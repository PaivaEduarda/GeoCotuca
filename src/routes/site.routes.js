const express = require('express')
const path = require('path')
const SiteController = require('../Controller/Site.controller')

const router = express.Router()

router.get('/', (req, res) => res.redirect('/home'))
router.get('/home', SiteController.home)
router.get('/tema/:link', SiteController.tema)

router.get('/exercicios', SiteController.exercicios)
router.get('/exercicio/:link', SiteController.exercicio)

router.get('/videos', SiteController.videos)

router.get('/livros', SiteController.livros)
router.get('/livro/:link', SiteController.livro)


module.exports = router