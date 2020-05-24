const express = require("express")
const modulos = express.Router()

//const Modulo = require("../models/Modulo")
const moduloController = require("../controllers/ModuloControllers")
const cors = require("cors")
modulos.use(cors())

modulos.post('/create', moduloController.create)

modulos.delete('/delete/', moduloController.delete)

modulos.get('/readAll', moduloController.readAll)

modulos.post('/update', moduloController.update)

module.exports = modulos;