const db = require('../database/db')
const user = require('../model/usuario')

const Users = db.Mongoose.model('esquemaUsuario',user.usuarioSchema,'usuarios')


exports.buscaraiz = ('/', async(req, resp) => {
     resp.send('<h1>Servidor de internet NodeJS funcionando</h1>')
})
    

exports.getUsuarios = ('/usuarios',async(req,res) => {
    await Users.find({}).lean().exec(function(e,listaRegistros){
        res.json(listaRegistros);
        res.end();
    })
})

exports.incluirUsuario = ('/incluirusuario',async(req,res)=>{
    let password = req.query.password
    let email = req.query.email
    let name = req.query.name
    let usuario = new Users({email, password, name})
    try{
        await usuario.save()
        res.send("Usuário incluso")          
    }
    catch(err){ 
        next(err)
    }
})

exports.verificarLogin = ('/verificarLogin',async(req,res)=>{
    let password = req.query.password
    let email = req.query.email
    try
    {
        await Users.findOne({email: email}).then(e => {
            if(e.password === password)
                res.redirect("../home")
            else
                res.send("usuário não encontrado")
            console.log(e)
        })
    }
    catch(Exception)
    {
        res.send("usuário nao encontrado")
    }
})