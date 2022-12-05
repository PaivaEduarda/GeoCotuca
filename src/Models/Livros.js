const { Schema, model } = require('mongoose')

const LivrosSchema = new Schema({
    // ---- padrão ---- //
    image: String,
    link: String,
    title: String,
    //------------------//
    nome: String,
    autor: String,
    qtdPaginas: String,
    dataLancamento: String,

})

module.exports = model('livros', LivrosSchema)