const express = require("express")
const courses = express.Router()

const courseController = require("../controllers/CoursesController.js")

const cors = require("cors")

courses.use(cors())

//Crear curso
courses.post('/create', courseController.create)

//Borrar curso, se recibe el id para borrar la tupla
courses.delete('/delete/:id', courseController.delete)

//Listar cursos existentes de la BD
courses.get('/readAll', courseController.readAll)

//Editar curso, se recibe el id para editar el curso
courses.put('/update/:id', courseController.update)

//Deshabilitar curso, se recibe el id
courses.put('/deshabilitar/:id', courseController.deshabilitar)

//Habilitar curso, se recibe el id
courses.put('/habilitar/:id', courseController.habilitar)

//Listar todos los cursos asociados a un modulo, especificando su ID
courses.get('/findAll/:subject_id', courseController.findAll)

module.exports = courses;