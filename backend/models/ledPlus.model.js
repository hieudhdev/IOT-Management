'use strict'
const {Schema, model} = require('mongoose')

const ledPlus = new Schema({
    type: { type: String, default: 'ledPlus' },
    state: { type: String, enum: ['on', 'off'], default: 'off' },
    description: { type: String, default: "led extra for live-code"}
},
{
    timestamps: true,
    collection: "LedPlus"
})

module.exports = model('LedPlus', ledPlus);