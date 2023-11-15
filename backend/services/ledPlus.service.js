'use strict'

const ledPlus = require('../models/ledPlus.model')
const { convertToObjectId, formatDate } = require('../utils/index')

class LedPlusService {

    static saveAction = async (payload) => {
        const newState = payload == "1" ? "on" : "off" 

        ledPlus.create({
            type: 'ledPlus',
            state: newState,
            description: 'led plus live code'
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

        const foundDatas = await ledPlus.find(filterBy).sort(sortBy).skip(skip).limit(limit).lean()

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
        
        const totalRecord = await ledPlus.find(filterBy).count()

        return totalRecord
    }
}

module.exports = LedPlusService