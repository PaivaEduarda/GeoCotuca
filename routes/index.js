const express = require('express');
const routes = express.Router();

const teste = require('./teste');
const exercicios = require('./exercicios');
const home = require('./home');
const tema = require('./tema');
const livro = require('./livro')
// routes.use('/:id', teste);
routes.use('/exercicios', exercicios);
routes.use('/:tema', tema);
routes.use('/:livro', livro)
routes.use('/', home);

module.exports = routes;