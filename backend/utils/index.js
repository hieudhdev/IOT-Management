'use strict'

const { Types } = require('mongoose')

const convertToObjectId = (id) => {
    return new Types.ObjectId(id)
}

const formatDate = (dateInput) => {
    let startDate = dateInput.slice(0, dateInput.indexOf(' '))
    let endDate = dateInput.slice(dateInput.indexOf(' ') + 1)

    let newStartDate = startDate.split("/").reverse().join("/")
    let newEndDate = endDate.split("/").reverse().join("/")

    return [newStartDate, newEndDate]
}

module.exports = {
    convertToObjectId,
    formatDate
}