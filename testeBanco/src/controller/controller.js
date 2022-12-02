const db = require('../data/db')
const temas = require('../models/temas')

const Temas = db.Mongoose.model('esquemaTemas',temas.TemasSchema,'temas')


exports.buscaraiz = ('/', async(req, resp) => {
     resp.send('<h1>Servidor de internet NodeJS funcionando</h1>')
    })
    

exports.getTodoOsTemas = ('/temas',async(req,res) => {
    await Temas.find({}).lean().exec(function(e,listaRegistros){
        res.json(listaRegistros);
        res.end();
    })
})

exports.incluirTemas = ('/incluirTemas',async(req,res)=>{
    let tituloTema = req.query.tituloTema
    let textoTema = req.query.textoTema
    let imgTemas = req.query.imgTemas


    let temas = new Temas({tituloTema,textoTema, imgTemas})
    try{
        await temas.save()
        res.send("Tema incluido")          
    }
    catch(err){ 
        next(err)
    }
})

exports.alterarTema = ('/alterarTema',async(req,res)=>{
    let tituloTemas = req.query.tituloTemas
    let textoTemas = req.query.textoTemas
    let imgTemas = req.query.imgTemas
    await Users.updateOne({_tituloTemas:tituloTemas},{$set: {textoTemas:textoTemas,imgTemas:imgTemas}})
    res.send("Tema alterado")
})

exports.excluirTema = ('/excluirTema',async(req,res)=>{
    let tituloTemas = req.query.tituloTemas
    await Temas.deleteOne({_tituloTemas:tituloTemas})
    res.send("Tema excluído")
})

exports.excluirTemaID = ('/excluirTemaID',async(req,res)=>{
    let idTemas = req.query.id
    await Temas.deleteOne({_idTemas:id})
    res.send("Tema excluído")
})
