const { Schema, model } = require('mongoose')

const VideosSchema = new Schema({
    // ---- padrão ---- //
    image: String,
    link: String,
    title: String,
    //------------------//
})

module.exports = model('videos', VideosSchema)

