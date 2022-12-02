const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuariosSchema = new Schema({
    nomeCompleto : String,
    emailUsuario : String,
    senhaUsuario : String
}, {collection: 'usuarios'})

module.exports = {UsuariosSchema : usuariosSchema}

