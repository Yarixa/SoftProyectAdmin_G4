const express = require("express")
const modulos = express.Router()

//const Modulo = require("../models/Modulo")
const moduloController = require("../controllers/ModuloControllers")
const cors = require("cors")
modulos.use(cors())

//Crear modulo
modulos.post('/create', moduloController.create)

//Borrar modulo, se recibe el id para borrar la tupla
modulos.delete('/delete/:id', moduloController.delete)

//Listar modulos existentes de la BD
modulos.get('/readAll', moduloController.readAll)

//Editar modulo, se recibe id para editar
modulos.put('/update/:id', moduloController.update)

//Deshabilitar modulo, se recibe el id
modulos.put('/deshabilitar/:id', moduloController.deshabilitar)

//Habilitar modulo, se recibe el id
modulos.put('/habilitar/:id', moduloController.habilitar)

//Contar cursos de la BD
modulos.get('/contarCursos', moduloController.contarCursos)

module.exports = modulos;