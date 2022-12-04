const { Schema, model } = require('mongoose')

const VideosSchema = new Schema({
    image: String,
    link: String,
    title: String,
})

module.exports = model('videos', VideosSchema)

