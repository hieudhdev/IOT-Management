'use strict'

const express = require('express')
const router = express.Router()

// api
router.use('/v1/api/datasensor', require('./datasensor')); 
router.use('/v1/api/devicecontrol', require('./devicecontrol'));

module.exports = router