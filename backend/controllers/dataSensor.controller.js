'use strict'

const DataSensorService = require('../services/dataSensor.service')

class DataSensorController {

    getNewest = async (req, res) => {
        const foundData = await DataSensorService.getNewestDataSensor()
        res.json(foundData)
    }

    getAllDatas = async (req, res) => {
        const foundDatas = await DataSensorService.getAllDatas(req.query.page, req.query.sort, req.query.filter)
        res.send(foundDatas)
    }

    getTotalRecord = async (req, res) => {
        const totalRecord = await DataSensorService.getTotalRecord(req.query.filter)
        res.send(`${totalRecord}`)
    }

}

module.exports = new DataSensorController