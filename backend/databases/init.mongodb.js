'use strict'

const mongoose = require('mongoose');
const connectStr = 'mongodb://localhost:27017/iot'

const connectDB = mongoose.connect(connectStr)
.then(() => console.log('Connect database successfully!'))
.catch(err => console.log('Error connect!'))

module.exports = connectDB