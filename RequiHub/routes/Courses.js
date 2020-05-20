const express = require("express")
const courses = express.Router()

const courseController = require("../controllers/CoursesController.js")

const cors = require("cors")

courses.use(cors())

//Crear curso
courses.post('/create', courseController.create)

//Borrar curso
courses.delete('/delete/:id', courseController.delete)

//Listar cursos existentes de la BD
courses.get('/readAll', courseController.readAll)

module.exports = courses;