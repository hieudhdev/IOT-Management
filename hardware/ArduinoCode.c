#ifdef ESP8266
 #include <ESP8266WiFi.h>
 #else
 #include <WiFi.h>
#endif

#include "DHTesp.h"
#include <ArduinoJson.h>
#include <PubSubClient.h>
#include <WiFiClientSecure.h>
#include <stdlib.h>

/**** DHT11 sensor Settings *******/
#define DHTpin 2   //Set DHT pin as GPIO2 (D4)
DHTesp dht;

/**** LED Settings *******/
const int led = 5; //Set LED pin as GPIO5 (D1)
const int led_fan = 4; // Set LED2 (FAN) pin as GPIO4 D2
const int led_plus = 0; // Set LED2 (FAN) pin as GPIO4 D3

/**** PHOTOCELL Settings *******/
#define PHOTOCELL A0 

int readLightSensor() {
  return analogRead(PHOTOCELL);
}

/****** WiFi Connection Details *******/
const char* ssid = "Planto";
const char* password = "12345678";

/******* MQTT Broker Connection Details *******/
const char* mqtt_server = "227fe931a053465d8595ec08a679a827.s2.eu.hivemq.cloud";
const char* mqtt_username = "iamhieudh02";
const char* mqtt_password = "Iamhieudh02";
const int mqtt_port = 8883;

/**** Secure WiFi Connectivity Initialisation *****/
WiFiClientSecure espClient;

/**** MQTT Client Initialisation Using WiFi Connection *****/
PubSubClient client(espClient);

unsigned long lastMsg = 0;
#define MSG_BUFFER_SIZE (50)
char msg[MSG_BUFFER_SIZE];

/************* Connect to WiFi ***********/
void setup_wifi() {
  delay(10);
  Serial.print("\nConnecting to ");
  Serial.println(ssid);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  randomSeed(micros());
  Serial.println("\nWiFi connected\nIP address: ");
  Serial.println(WiFi.localIP());
}

/************* Connect to MQTT Broker ***********/
void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    String clientId = "ESP8266Client-";   // Create a random client ID
    clientId += String(random(0xffff), HEX);
    // Attempt to connect
    if (client.connect(clientId.c_str(), mqtt_username, mqtt_password)) {
      Serial.println("connected");

      client.subscribe("led_state");   // subscribe the topics here
      client.subscribe("led_fan_state");   // subscribe the topics here
      client.subscribe("led_plus_state");   // subscribe the topics here

    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");   // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

/***** Callback Method for Receiving MQTT messages and Switching LED ****/
void callback(char* topic, byte* payload, unsigned int length) {
  String incommingMessage = "";
  for (int i = 0; i < length; i++) incommingMessage+=(char)payload[i];

  Serial.println("Message arrived ["+String(topic)+"]: "+incommingMessage);

  //--- check the incomming message
  if( strcmp(topic,"led_state") == 0){
    if (incommingMessage.equals("1")) {
      digitalWrite(led, HIGH);  // Turn the LED on
      // client.publish("led_state", "LED_ON_DONE");
    }
    else {
      digitalWrite(led, LOW);  // Turn the LED off
      // client.publish("led_state", "LED_OFF_DONE");
    } 
  }

  //--- check the incomming message
  if( strcmp(topic,"led_fan_state") == 0){
    if (incommingMessage.equals("1"))  {
      digitalWrite(led_fan, HIGH);   // Turn the LED on
      // client.publish("led_state", "FAN_ON_DONE");
    }
    else { 
      digitalWrite(led_fan, LOW);  // Turn the LED off
      // client.publish("led_state", "FAN_OFF_DONE");
    }
  }

  //--- check the incomming message
  if( strcmp(topic,"led_plus_state") == 0){
    if (incommingMessage.equals("1"))  {
      digitalWrite(led_plus, HIGH);   // Turn the LED on
      // client.publish("led_state", "FAN_ON_DONE");
    }
    else { 
      digitalWrite(led_plus, LOW);  // Turn the LED off
      // client.publish("led_state", "FAN_OFF_DONE");
    }
  }

}

/**** Method for Publishing MQTT Messages **********/
void publishMessage(const char* topic, String payload , boolean retained){
  if (client.publish(topic, payload.c_str(), true))
    Serial.println("Message published ["+String(topic)+"]: "+payload);
}

/**** Application Initialisation Function******/
void setup() {

  dht.setup(DHTpin, DHTesp::DHT11); //Set up DHT11 sensor
  pinMode(led, OUTPUT); //set up LED
  pinMode(led_fan, OUTPUT); //set up FAN
  pinMode(led_plus, OUTPUT); //set up LED_PLUS
  // set up PHOTOCELL

  Serial.begin(9600);
  while (!Serial) delay(1);
  setup_wifi();

  #ifdef ESP8266
    espClient.setInsecure();
  #else
    espClient.setCACert(root_ca);      // enable this line and the the "certificate" code for secure connection
  #endif

  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
}

/******** Main Function *************/
void loop() {

  if (!client.connected()) reconnect(); // check if client is connected
  client.loop();

  //read DHT11 temperature and humidity reading
  delay(dht.getMinimumSamplingPeriod());
  float humidity = dht.getHumidity();
  float temperature = dht.getTemperature();
  // int r = rand() % 100;

  // photocell reading light
  int light = readLightSensor();
  // String lightStr = String(lightValue);

  DynamicJsonDocument doc(1024);

  doc["deviceId"] = "NodeMCU";
  // doc["siteId"] = "IOT";
  doc["humidity"] = humidity;
  doc["temperature"] = temperature;
  doc["light"] = light;
  // doc["dobui"] = r;

  char mqtt_message[128];
  serializeJson(doc, mqtt_message);

  publishMessage("esp8266_data", mqtt_message, true);

  delay(5000);

}