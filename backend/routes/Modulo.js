const express = require("express")
const modulos = express.Router()

//const Modulo = require("../models/Modulo")
const moduloController = require("../controllers/ModuloControllers")
const cors = require("cors")
modulos.use(cors())

modulos.post('/create', moduloController.create)

//funcion modulo
modulos.delete('/delete/:id', moduloController.delete)

modulos.get('/readAll', moduloController.readAll)

modulos.put('/update/:id', moduloController.update)

modulos.put('/deshabilitar/:id', moduloController.deshabilitar)

modulos.put('/habilitar/:id', moduloController.habilitar)
module.exports = modulos;