const express = require("express")
const projects = express.Router()

const projectController = require("../controllers/ProjectController.js")
const cors = require("cors")
projects.use(cors())

projects.post('/create', projectController.create)

projects.delete('/delete/:id', projectController.delete)

projects.get('/readAll', projectController.readAll)

projects.put('/update/:id', projectController.update)

projects.put('/deshabilitar/:id', projectController.deshabilitar)
projects.put('/habilitar/:id', projectController.habilitar)

//funcion busqueda de proyectos
projects.search('/search/', projectController.search)

module.exports = projects;
