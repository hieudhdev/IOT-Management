'use strict'

const express = require('express')
const router = express.Router()
const DataSensorController = require('../../controllers/dataSensor.controller.js')

router.get('', DataSensorController.getNewest)
router.get('/all', DataSensorController.getAllDatas)
router.get('/totalRecord', DataSensorController.getTotalRecord)

module.exports = router