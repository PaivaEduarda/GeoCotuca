const { Schema, model } = require('mongoose')

const TemaSchema = new Schema({
    image: String,
    link: String,
    title: String,
    body: String,
})

module.exports = model('temas', TemaSchema)