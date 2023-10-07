'use strict'
const {Schema, model} = require('mongoose')

const dataSensor = new Schema({
    device: { type: String, require: true },
    humidity: { type: Number, require: true },
    temperature: { type: Number, require: true },
    light: { type: Number, require: true }
},
{
    timestamps: true,
    collection: "DataSensors"
})

module.exports = model('DataSensor', dataSensor);