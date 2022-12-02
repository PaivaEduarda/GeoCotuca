const mongoose = require('mongoose')

const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    sname: String,
    email: String,
    password: String
},{collection:'usuarios'})

module.exports = {usuarioSchema:usuarioSchema}