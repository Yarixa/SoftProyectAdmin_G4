const express = require("express")
const documents = express.Router()
const documentController = require("../controllers/DocumentController.js");

const cors = require("cors")

documents.use(cors())

//Crear documento
documents.post("/add", documentController.create)

//Obtener todos los documentos
documents.get("/readAll", documentController.findAll)

//Obtener todos los documentos activos
documents.get("/disponibles", documentController.findAlldisponible)

//Obtener un único documento según su id
documents.get("/get/:id", documentController.findOne)

//Actualizar documento según su id
documents.put("/update/:id", documentController.update)

//Borrar un documento según su id
documents.delete("/delete/:id", documentController.delete)

module.exports = documents;

//app.use("/api/documentController", documents);