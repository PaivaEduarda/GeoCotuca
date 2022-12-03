const { Schema, model } = require('mongoose')

const usuariosSchema = new Schema({
    nomeCompleto : String,
    emailUsuario : String,
    senhaUsuario : String
})

module.exports = model('usuarios', usuariosSchema)