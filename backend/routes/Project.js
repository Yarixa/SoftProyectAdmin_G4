const express = require("express")
const projects = express.Router()

const projectController = require("../controllers/ProjectController.js")
const cors = require("cors")
projects.use(cors())


/**
 * @api {post} /projects/create Permite crear un proyecto de un curso
 * @apiName create
 * @apiGroup Project
 * 
 * @apiSuccess {Json[String]} id del proyecto y Mensaje de creacion correcta
 * @apiError {Json[String]} Error al conectar con la conexion
 * @apiError {Json} Error, ya existe un proyecto con el mismo nombre en el curso
 * @apiError {Json} Error, error al crear, revisar los parametros
 */
projects.post('/create', projectController.create)

projects.delete('/delete/:id', projectController.delete)

projects.get('/readAll', projectController.readAll)

projects.put('/update/:id', projectController.update)

projects.put('/deshabilitar/:id', projectController.deshabilitar)
projects.put('/habilitar/:id', projectController.habilitar)

//funcion busqueda de proyectos
projects.get('/search/:query', projectController.search)

/**
 * @api {post} /projects/readAll/:course_id Busca proyectos por  curso
 * @apiName buscar
 * @apiGroup Project
 * 
 * @apiSuccess {Json[projects]} objetos de tipo proyectoss
 * @apiError {Json[string]} no se encuentrar proyectos con la id del curso
 */
projects.get('/readAll/:curso', projectController.buscar)

module.exports = projects;
