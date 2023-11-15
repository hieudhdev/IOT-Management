'use strict'

const express = require('express')
const router = express.Router()
const LedFanController = require('../../controllers/ledfan.controller')

// led
router.get('/led/history', LedFanController.getAllLedActions)
router.get('/led/totalRecord', LedFanController.getTotalRecordLed)
router.get('/led/totalOnLed', LedFanController.getTotalOnLed)
router.get('/led/:id', LedFanController.pubLed)

// fan
router.get('/fan/history', LedFanController.getAllFanActions)
router.get('/fan/totalRecord', LedFanController.getTotalRecordFan)
router.get('/fan/totalOnFan', LedFanController.getTotalOnFan)
router.get('/fan/:id', LedFanController.pubFan)

// led plus
router.get('/ledplus/history', LedFanController.getAllLedPlusActions)
router.get('/ledplus/totalRecord', LedFanController.getTotalRecordLedPlus)
router.get('/ledplus/:id', LedFanController.pubLedPlus)

module.exports = router