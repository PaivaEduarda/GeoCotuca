const express = require('express')
const controller = require('../controller/controller')

const router = express.Router()

router.get('/', controller.buscaraiz)

router.get('/temas',controller.getTodoOsTemas)

router.post('/incluirTemas',controller.incluirTemas)

router.put('/alterarTemas',controller.alterarTema)

router.delete('/excluirTemas',controller.excluirTema)

router.delete('/excluirTemasID',controller.excluirTema)


module.exports = router