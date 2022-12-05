const { Schema, model } = require('mongoose')

const TemaSchema = new Schema({
    // ---- padrão ---- //
    image: String,
    link: String,
    title: String,
    //------------------//
    body: String,
})

module.exports = model('temas', TemaSchema)