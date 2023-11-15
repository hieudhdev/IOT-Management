'use strict'

const led = require('../services/led.service')
const client = require('../mqtts/init.mqtt')
const topicLed = process.env.TOPIC_LED
const topicFan = process.env.TOPIC_LED_FAN
const topicLedPlus = process.env.TOPIC_LED_PLUS

const LedService = require('../services/led.service')
const FanService = require('../services/fan.service')
const LedPlusService = require('../services/ledPlus.service')

class LedFanController {

    // LED
    pubLed = async (req, res) => {
        const payload = req.params.id
        client.publish(topicLed, payload)

        LedService.saveAction(payload)
        res.send(payload)
    }

    getAllLedActions = async (req, res) => {
        const foundActions = await LedService.getAllActions(req.query.page, req.query.sort, req.query.filter)
        res.send(foundActions)
    }

    getTotalRecordLed = async (req, res) => {
        const totalRecord = await LedService.getTotalRecord(req.query.filter)

        res.send(`${totalRecord}`)
    }

    getTotalOnLed = async (req, res) => {
        const totalOn = await LedService.getTotalOn()

        res.send(`${totalOn}`)
    }

    // FAN
    pubFan = async (req, res) => {
        const payload = req.params.id
        client.publish(topicFan, payload)

        FanService.saveAction(payload)
        res.send(payload)
    }

    getAllFanActions = async (req, res) => {
        const foundActions = await FanService.getAllActions(req.query.page, req.query.sort, req.query.filter)
        res.send(foundActions)
    }

    getTotalRecordFan = async (req, res) => {
        const totalRecord = await FanService.getTotalRecord(req.query.filter)

        res.send(`${totalRecord}`)
    }

    getTotalOnFan = async (req, res) => {
        const totalOn = await FanService.getTotalOn()

        res.send(`${totalOn}`)
    }

    // LED PLUS
    pubLedPlus = async (req, res) => {
        const payload = req.params.id
        client.publish(topicLedPlus, payload)

        LedPlusService.saveAction(payload)
        res.send(payload)
    }

    getAllLedPlusActions = async (req, res) => {
        const foundActions = await LedPlusService.getAllActions(req.query.page, req.query.sort, req.query.filter)
        res.send(foundActions)
    }

    getTotalRecordLedPlus = async (req, res) => {
        const totalRecord = await LedPlusService.getTotalRecord(req.query.filter)

        res.send(`${totalRecord}`)
    }

}

module.exports = new LedFanController