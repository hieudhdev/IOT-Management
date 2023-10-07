const mqtt = require('mqtt');

const options = {
    host: '227fe931a053465d8595ec08a679a827.s2.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'iamhieudh02',
    password: 'Iamhieudh02'
}

const client = mqtt.connect(options)

const topic = 'esp8266_data'
  
client.on('connect', () => {
    console.log('Connected Success!')

    client.subscribe([topic], () => {
        console.log(`Subcribe to topic: ${topic}`)
    })
})

client.on('message', (topic, payload) => {
    console.log(`   
    - Received message from topic: ${topic}
    - Message: ${payload.toString()}`)
})