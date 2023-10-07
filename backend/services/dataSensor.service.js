'use strict'

const dataSensor = require('../models/dataSensor.model')

class DataSensorService {

    static getNewestDataSensor = async () => {
        const newestDataSensor = await dataSensor.find().limit(1).sort({$natural:-1}).lean()
        // console.log(newestDataSensor)
        return newestDataSensor
    }

    static getAllDatas = async (page, sort) => {
        const limit = 10
        const skip = (page - 1) * limit
        const sortBy = sort === 'newest' ? { _id: 1 } : { _id: -1 }
        const filter = {}

        const foundDatas = await dataSensor.find(filter).sort(sortBy).skip(skip).limit(limit).lean()
        return foundDatas
    }

}

module.exports = DataSensorService