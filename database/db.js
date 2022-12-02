const mongoose = require('mongoose')

//string de conexão com o banco
mongoose.connect('mongodb://localhost:27017/web-app')


module.exports = {Mongoose: mongoose}