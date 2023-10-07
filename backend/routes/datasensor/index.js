'use strict'

const express = require('express')
const router = express.Router()
const DataSensorController = require('../../controllers/dataSensor.controller.js')

router.get('', DataSensorController.getNewest)
router.get('/all', DataSensorController.getAllDatas)

module.exports = router