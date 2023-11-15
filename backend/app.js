const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mqttClient = require('./mqtts/init.mqtt.js')
const dataSensor = require('./models/dataSensor.model.js')

// Connect database (mongodb)
require('./databases/init.mongodb.js')

// cors config
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));

// Connect mqtt broker (hivemq)
const topic_dht = process.env.TOPIC_DHT
const topic_led = process.env.TOPIC_LED
mqttClient.on('connect', () => {
    console.log('Connect mqtt broker success!')

    mqttClient.subscribe([topic_dht], () => {
        console.log(`Subcribe to topic: ${topic_dht}`)
    })

    mqttClient.subscribe([topic_led], () => {
        console.log(`Subcribe to topic: ${topic_led}`)
    })

})

mqttClient.on('message', async (topic, payload) => {
    console.log(`
    - Received message from topic: ${topic}
    - Message: ${payload}`)

    // if led/fan on/off success => save to database
    // if (topic == topic_led) {
    //     const newPayload = payload.toString()
    //     switch (newPayload) {
    //         case "LED_ON_DONE" :
    //             console.log(1)
    //             break;
    //         case "LED_OFF_DONE" :
    //             console.log(2)
    //             break;
    //         case "FAN_ON_DONE" :
    //             console.log(3)
    //             break;
    //         case "FAN_OFF_DONE" :
    //             console.log(4)
    //             break;
    //     }
    // } 

    if (topic == topic_dht)
    {
        // receive data from broker
        const newPayload = JSON.parse(payload.toString())
        
        // BRING THAT FOLLOWING INTO DATASENSOR SERVICES
        const newDataSensor = await dataSensor.create({
            device: newPayload.deviceId,
            humidity: newPayload.humidity,
            temperature: newPayload.temperature,
            light: newPayload.light
        })
    }

})

// router init
app.use('', require('./routes/index'))
// app.use('', async (req, res) => {
//     const newDataSensor = await dataSensor.create({
//         device: 'nodeMCU',
//         humidity: 4,
//         temperature: 30,
//         light: 900
//     })

//     res.send(newDataSensor)

//     console.log(newDataSensor)
// })

// init server
const PORT =  process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})