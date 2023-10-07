const mqtt = require('mqtt');

// [START] - terminal user input
const readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
   
var waitForUserInput = function() {
    rl.question("ON = 1 | OFF = 0 | Exit = e : ", function(answer) {
        if (answer == "e"){
            rl.close();
        } else {
            payload = answer
            client.publish(topic, payload)
            console.log(`
            pushlish in topic : ${topic}
            message: ${payload}
            `)
            waitForUserInput();
        }

    });
}

waitForUserInput();
// [END]

const options = {
    host: '227fe931a053465d8595ec08a679a827.s2.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'iamhieudh02',
    password: 'Iamhieudh02'
}

const client = mqtt.connect(options)

const topic = 'led_state'
let payload = '0'
  
client.on('connect', () => {
    // console.log('Connected Success!')
})

// client.publish(topic, payload)