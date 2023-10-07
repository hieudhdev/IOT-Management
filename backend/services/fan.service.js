'use strict'

const fan = require('../models/fan.model')

class FanService {

    static saveAction = async (payload) => {
        const newState = payload == "1" ? "on" : "off" 

        fan.create({
            type: 'fan',
            state: newState,
            description: 'tiny fan (led instead)'
        })
    }

    static getAllActions = async (page, sort) => {
        const limit = 10
        const skip = (page - 1) * limit
        const sortBy = sort === 'newest' ? { _id: 1 } : { _id: -1 }
        const filter = {}

        const foundDatas = await fan.find(filter).sort(sortBy).skip(skip).limit(limit).lean()
        return foundDatas 
    }

}

module.exports = FanService