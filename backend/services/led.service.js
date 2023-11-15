'use strict'

const led = require('../models/led.model')
const { convertToObjectId, formatDate } = require('../utils/index')

class LedService {

    static saveAction = async (payload) => {
        const newState = payload == "1" ? "on" : "off" 

        led.create({
            type: 'led',
            state: newState,
            description: 'red led'
        })
    }

    static getAllActions = async (page, sort, filter) => {
        const limit = 10
        const skip = (page - 1) * limit
        const sortBy = sort === 'newest' ? { _id: -1 } : { _id: 1 }

        const index = filter.indexOf(',')
        let option = filter.slice(0, index)
        let input = filter.slice(index+1)
        let filterBy = {}
        // console.log(option, input)

        if (input !== '') {
            if (option == '_id') { 
                input = convertToObjectId(input)

                filterBy = {
                    [option]: input
                }
            }
            if (option == 'on' || option == 'off') {}  {
                filterBy = {
                    [option]: input
                }
            }
            if (option == 'createdAt') {
                let startDate = formatDate(input)[0]
                let endDate = formatDate(input)[1]
                
                filterBy = {
                    createdAt: {
                        $gte: new Date(startDate), 
                        $lte: new Date(endDate)     
                    }
                }
            }
        }

        const foundDatas = await led.find(filterBy).sort(sortBy).skip(skip).limit(limit).lean()

        return foundDatas 
    }

    static getTotalRecord = async (filter) => {
        const index = filter.indexOf(',')
        let option = filter.slice(0, index)
        let input = filter.slice(index+1)
        let filterBy = {}
        // console.log(option, input)

        if (input !== '') {
            if (option == '_id') { 
                input = convertToObjectId(input)

                filterBy = {
                    [option]: input
                }
            }
            if (option == 'on' || option == 'off') {}  {
                filterBy = {
                    [option]: input
                }
            }
            if (option == 'createdAt') {
                let startDate = formatDate(input)[0]
                let endDate = formatDate(input)[1]
                
                filterBy = {
                    createdAt: {
                        $gte: new Date(startDate), 
                        $lte: new Date(endDate)     
                    }
                }
            }
        }
        
        const totalRecord = await led.find(filterBy).count()

        return totalRecord
    }

    static getTotalOn = async () => {
        const totalOn = await led.find({state: 'on'}).count()

        return totalOn
    }
}

module.exports = LedService