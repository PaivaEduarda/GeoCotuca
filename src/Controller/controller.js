const db = require('../database/db')
const usuarios = require('../Models/Usuarios')

const Usuarios = db.Mongoose.model('esquemaUsuarios', usuarios.UsuariosSchema, 'usuario')

exports.buscarRaiz = ('/', async(req, res)=>{
    res.render('../../home.html')
})

exports.getUsuarios = ('/usuarios', async(req, res)=>{
    await Usuarios.find({}).lean().exec(function(e, listaRegistros){
        res.json(listaRegistros)
        res.end()
    })
})

exports.incluirUsuario = ('incluirusuario', async(req,res)=>{
    let nome = req.query.nome
    let email = req.query.enail

    let usuario = new Usuarios({nome, email})
    try{
        await usuario.save()
        res.send('usuario incluso')
    }
    catch(err)
    {
        next(err)
    }
})

