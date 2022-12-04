const { Schema, model } = require('mongoose')

const ExerciciosSchema = new Schema({
    image: String,
    link: String,
    title: String,
    questao1: String,
    questao2: String,
    questao3: String,
    questao4: String,
    questao5: String,
})

module.exports = model('exercicios', ExerciciosSchema)