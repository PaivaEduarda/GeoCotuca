const express = require('express')
const controller = require('../Controller/controller')

const router = express.Router()

router.get('/', controller.buscarRaiz)
router.get('/usuarios', controller.getUsuarios)

router.post('/incluirUsuarios', controller.incluirUsuario)

module.exports = router