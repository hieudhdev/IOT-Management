'use strict'
const {Schema, model} = require('mongoose')

const fan = new Schema({
    type: { type: String, default: 'fan' },
    state: { type: String, enum: ['on', 'off'], default: 'off' },
    description: { type: String, default: "tiny fan"}
},
{
    timestamps: true,
    collection: "Fans"
})

module.exports = model('Fan', fan);