const { Schema, model } = require('mongoose')

const LivrosSchema = new Schema({
    // ---- padrão ---- //
    image: String,
    link: String,
    title: String,
    //------------------//
    linkCompra: String,
    linkCompra1: String,
    linkCompra2: String,

    nome: String,
    autor: String,
    qtdPaginas: String,
    dataLancamento: String,
    imgLivro: String,
    nome1: String,
    autor1: String,
    qtdPaginas1: String,
    dataLancamento1: String,
    imgLivro1: String,
    nome2: String,
    autor2: String,
    qtdPaginas2: String,
    dataLancamento2: String,
    imgLivro2: String
})

module.exports = model('livros', LivrosSchema)