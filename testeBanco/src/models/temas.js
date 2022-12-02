const mongoose = require('mongoose')

const Schema = mongoose.Schema

const temasSchema = new Schema({
    tituloTema: String,
    textoTema: String,
    imgTemas: String

},{collection:'temas'})

module.exports = {TemasSchema:temasSchema}