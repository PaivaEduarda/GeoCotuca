const Exercicios = require("../Models/Exercicios")
const Temas = require("../Models/Temas")
const Videos = require("../Models/Videos")

module.exports = {
    home: (req, res) => {
        Temas.find().then(e => {
            res.render('home', { dados: e })
        }).catch(e => 
            res.status(500).send("error internal")
        )
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
    exercicios: (req, res) => {
        Exercicios.find().then(e => {
            res.render('exercicios', { dados: e })
        }).catch(e => 
            res.status(500).send("error internal")
        )
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
    videos: (req, res) => {
        Videos.find().then(e => {
            res.render('videos', { dados: e })
        }).catch(e => 
            res.status(500).send("error internal")
        )
    },
    livros: (req, res) => {
        Livros.find().then(e => {
            res.render('livros', { dados: e })
        }).catch(e => 
            res.status(500).send("error internal")
        )
    },
    livro: (req, res) => {
        Livros.findOne({
            link: req.params.link
        }).then(e => {
            res.render('livro', { tema: e }) 
        }).catch(e =>
            res.status(404).send("tema não existe")
            )
    }
}