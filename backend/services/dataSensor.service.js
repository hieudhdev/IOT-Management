'use strict'

const dataSensor = require('../models/dataSensor.model')
const { convertToObjectId, formatDate } = require('../utils/index')

class DataSensorService {

    static getNewestDataSensor = async () => {
        const newestDataSensor = await dataSensor.find().limit(1).sort({$natural:-1}).lean()
        // console.log(newestDataSensor)
        return newestDataSensor
    }

    static getAllDatas = async (page, sort, filter) => {
        const limit = 10
        const skip = (page - 1) * limit
        let sortBy = {}
        
        // handle sort
        switch (sort) {
            case 'newest':
                sortBy = { _id: -1 }
                break;
            case 'oldest':
                sortBy = { _id: 1 } 
                break;
            case 'tempAsc':
                sortBy = { temperature: 1 } 
                break;
            case 'tempDes':
                sortBy = { temperature: -1 } 
                break;
            case 'humiAsc':
                sortBy = { humidity: 1 } 
                break;
            case 'humiDes':
                sortBy = { humidity: -1 } 
                break;
            case 'lightAsc':
                sortBy = { light: 1 } 
                break;
            case 'lightDes':
                sortBy = { light: -1 } 
                break;
            case 'dobuiAsc':
                sortBy = { dobui: 1 } 
                break;
            case 'dobuiDes':
                sortBy = { dobui: -1 } 
                break;
            default:
                sortBy = { _id: 1 }
                break;
        }

        // handle filter
        const index = filter.indexOf(',')
        let option = filter.slice(0, index)
        let input = filter.slice(index+1)
        let filterBy = {}

        if (input !== '') {

            if (option == '_id') { 
                input = convertToObjectId(input)

                filterBy = {
                    [option]: input
                }
            }

            if (option == 'humidity' || option == 'light' || 'dobui')  {
                filterBy = {
                    [option]: parseInt(input)
                }
            }

            if (option == 'temperature') {
                filterBy = {
                    [option]: parseFloat(input)
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

        const foundDatas = await dataSensor.find(filterBy).sort(sortBy).skip(skip).limit(limit).lean()
        return foundDatas
    }

    static getTotalRecord = async (filter) => {

        // handle filter
        const index = filter.indexOf(',')
        let option = filter.slice(0, index)
        let input = filter.slice(index+1)
        let filterBy = {}

        if (input !== '') {
            if (option == '_id') { 
                input = convertToObjectId(input)

                filterBy = {
                    [option]: input
                }
            }
            if (option == 'humidity' || option == 'light' || 'dobui')  {
                filterBy = {
                    [option]: parseInt(input)
                }
            }
            if (option == 'temperature') {
                filterBy = {
                    [option]: parseFloat(input)
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

        const totalRecord = await dataSensor.find(filterBy).count()

        return totalRecord
    }

}

module.exports = DataSensorService