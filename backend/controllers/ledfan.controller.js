'use strict'

const led = require('../services/led.service')
const client = require('../mqtts/init.mqtt')
const topicLed = process.env.TOPIC_LED
const topicFan = process.env.TOPIC_LED_FAN

const LedService = require('../services/led.service')
const FanService = require('../services/fan.service')

class LedFanController {

    // LED
    pubLed = async (req, res) => {
        const payload = req.params.id
        client.publish(topicLed, payload)

        LedService.saveAction(payload)
        res.send(payload)
    }

    getAllLedActions = async (req, res) => {
        const foundActions = await LedService.getAllActions(req.query.page, req.query.sort)
        res.send(foundActions)
    }

    // FAN
    pubFan = async (req, res) => {
        const payload = req.params.id
        client.publish(topicFan, payload)

        FanService.saveAction(payload)
        res.send(payload)
    }

    getAllFanActions = async (req, res) => {
        const foundActions = await FanService.getAllActions(req.query.page, req.query.sort)
        res.send(foundActions)
    }

}

module.exports = new LedFanController