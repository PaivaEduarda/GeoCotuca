const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/web')

module.exports = {Mongoose: mongoose}