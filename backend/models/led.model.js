'use strict'
const {Schema, model} = require('mongoose')

const led = new Schema({
    type: { type: String, default: 'led' },
    state: { type: String, enum: ['on', 'off'], default: 'off' },
    description: { type: String, default: "led 5V red color"}
},
{
    timestamps: true,
    collection: "Leds"
})

module.exports = model('Led', led);