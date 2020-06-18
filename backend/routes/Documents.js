const express = require("express")
const documents = express.Router()

const documentsController = require("../controllers/DocumentsController.js")

const cors = require("cors")

documents.use(cors())

//Crear curso
documents.post('/create', documentsController.create)

//Borrar curso, se recibe el id para borrar la tupla
documents.delete('/delete/:id', documentsController.delete)

//Deshabilitar curso, se recibe el id
documents.post('/deshabilitar/:id', documentsController.deshabilitar)

//Habilitar curso, se recibe el id
documents.post('/habilitar/:id', documentsController.habilitar)

//Editar curso, se recibe el id para editar el curso
documents.post('/update/:id', documentsController.update)

//Listar cursos existentes de la BD
documents.get('/readAll', documentsController.readAll)

module.exports = documents;