'use strict'

const express = require('express')
const router = express.Router()
const LedFanController = require('../../controllers/ledfan.controller')

// led
router.get('/led/history', LedFanController.getAllLedActions)
router.get('/led/:id', LedFanController.pubLed)
// fan
router.get('/fan/history', LedFanController.getAllFanActions)
router.get('/fan/:id', LedFanController.pubFan)

module.exports = router