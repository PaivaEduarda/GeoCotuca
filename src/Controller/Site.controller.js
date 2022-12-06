const Exercicios = require("../Models/Exercicios")
const Livros = require("../Models/Livros")
const Temas = require("../Models/Temas")
const Videos = require("../Models/Videos")
const SearchController = require("./Search.controller")

module.exports = {
    //------------------------------------------------------------//
    // home/tema
    home: (req, res) => {
        const { search } = req.query;
        Temas.find().then(e => {
            if(search && search.length > 0)
                e = SearchController.buscador(search, e)
            res.render('home', { dados: e })
        }).catch(e => {
            console.log(e)
            res.status(500).send("erro interno")
        })
    },
    tema: (req, res) => {
        Temas.findOne({
            link: req.params.link
        }).then(e => {
            res.render('tema', { tema: e }) 
        }).catch(e =>
            res.status(404).send("tema não existe")
            )
    },
    //------------------------------------------------------------//
    // exercicios
    exercicios: (req, res) => {
        const { search } = req.query;
        Exercicios.find().then(e => {
            if(search && search.length > 0)
                e = SearchController.buscador(search, e)
            res.render('exercicios', { dados: e })
        }).catch(e => {
            console.log(e)
            res.status(500).send("error internal")
        })
    },
    exercicio: (req, res) => {
        Exercicios.findOne({
            link: req.params.link
        }).then(e => {
            res.render('exercicio', { exercicio: e }) 
        }).catch(e =>
            res.status(404).send("exercicios não existente")
            )
    },
    //------------------------------------------------------------//
    // videos
    videos: (req, res) => {
        const { search } = req.query;
        Videos.find().then(e => {
            if(search && search.length > 0)
                e = SearchController.buscador(search, e)
            res.render('videos', { dados: e })
        }).catch(e => {
            console.log(e)
            res.status(500).send("error internal")
        })
    },
    //------------------------------------------------------------//
    // livros
    livros: (req, res) => {
        const { search } = req.query;
        Livros.find().then(e => {
            if(search && search.length > 0)
                e = SearchController.buscador(search, e)
            res.render('livros', {dados: e})
        }).catch(e => {
            console.log(e)
            res.status(500).send("error internal")
        })
    },
    livro: (req, res) => {
        Livros.findOne({
            link: req.params.link
        }).then(e => {
            res.render('livro', { livro: e }) 
        }).catch(e =>
            res.status(404).send("livros não existente")
            )
    }
}