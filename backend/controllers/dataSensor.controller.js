'use strict'

const DataSensorService = require('../services/dataSensor.service')

class DataSensorController {

    getNewest = async (req, res) => {
        const foundData = await DataSensorService.getNewestDataSensor()
        res.json(foundData)
    }

    getAllDatas = async (req, res) => {
        const foundDatas = await DataSensorService.getAllDatas(req.query.page, req.query.sort)
        res.send(foundDatas)
    }

}

module.exports = new DataSensorController