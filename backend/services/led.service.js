'use strict'

const led = require('../models/led.model')

class LedService {

    static saveAction = async (payload) => {
        const newState = payload == "1" ? "on" : "off" 

        led.create({
            type: 'led',
            state: newState,
            description: 'red led'
        })
    }

    static getAllActions = async (page, sort) => {
        const limit = 10
        const skip = (page - 1) * limit
        const sortBy = sort === 'newest' ? { _id: 1 } : { _id: -1 }
        const filter = {}

        const foundDatas = await led.find(filter).sort(sortBy).skip(skip).limit(limit).lean()
        return foundDatas 
    }
}

module.exports = LedService