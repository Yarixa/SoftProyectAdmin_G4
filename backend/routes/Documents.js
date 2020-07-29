const mongoDBURL = "mongodb://localhost:27017"
const mongoDBDatabaseName = "mongoDB"
const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectID
var mongoDBdatabase, mongoDBcollection
//---------------Fin variables mongoDB-----------//

const express = require("express")
const documents = express.Router()
const cors = require("cors")
documents.use(cors())

//----------------Conexión mongoDB---------//
MongoClient.connect(mongoDBURL,{ useUnifiedTopology: true }, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error
    }
    mongoDBdatabase = client.db(mongoDBDatabaseName)
    mongoDBcollection = mongoDBdatabase.collection("documents")
    console.log("Conectado a `" + mongoDBDatabaseName + "`!")
});
//----------------Rutas mongoDB-----------------//

//Agregar documento
documents.post("/documents/add", (request, response) => {
if(request.body.projectID!==null || request.body.tipo!==null){//Valida que se ingresen atributos importantes
    request.body.disponible = true //se agrega disponibilidad true por defecto
    mongoDBcollection.insertOne(request.body, (error, result) => {
    if(error) {
        return response.status(500).send(error)
    }
    response.send(result["ops"][0]["_id"])
    })
} 
else{
    response.send("Se debe ingresar el ID del proyecto y el tipo de documento a ingresar (req/test/dis/imp)")
}
})

//Obtener todos los documentos
documents.get("/readAll", (request, response) => {
    mongoDBcollection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error)
        }
        response.send(result)
    });
});

//Obtener todos los documentos de un determinado proyecto
documents.get("/readAll/:projectID", (request, response) => {
    mongoDBcollection.find({"projectID": request.params.projectID}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error)
        }
        response.send(result)
    });
});

//Obtener documento de requisito de un proyecto en especifico
documents.get("/req/:projectID", (request, response) => {
    mongoDBcollection.find({"projectID": request.params.projectID, tipo: "req"}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error)
        }
        response.send(result)
    });
});

//Obtener documento de testeo de un proyecto en especifico
documents.get("/test/:projectID", (request, response) => {
    mongoDBcollection.find({"projectID": request.params.projectID, tipo: "test"}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error)
        }
        response.send(result)
    });
});

//Obtener documento de diseño de un proyecto en especifico
documents.get("/dis/:projectID", (request, response) => {
    mongoDBcollection.find({"projectID": request.params.projectID, tipo: "dis"}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error)
        }
        response.send(result)
    });
});

//Obtener documento de implementacion de un proyecto en especifico
documents.get("/imp/:projectID", (request, response) => {
    mongoDBcollection.find({"projectID": request.params.projectID, tipo: "imp"}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error)
        }
        response.send(result)
    });
});

//Obtener unico documento según su ID
documents.get("/get/:id", (request, response) => {
    mongoDBcollection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error)
        }
        response.send(result)
    });
});

//Deshabilitar dococumento según su ID
documents.put("/deshabilitar/:id", (request, response) => {
    mongoDBcollection.updateOne({ "_id": new ObjectId(request.params.id) },  { $set: {disponible: false} },(error, result) => {
        if(error) {
            return response.status(500).send(error)
        }
        response.send(result)
    });
});

//Habilitar dococumento según su ID
documents.put("/habilitar/:id", (request, response) => {
    mongoDBcollection.updateOne({ "_id": new ObjectId(request.params.id) },  { $set: {disponible: true} },(error, result) => {
        if(error) {
            return response.status(500).send(error)
        }
        response.send(result)
    });
});

//Editar dococumento según su ID
documents.put("/update/:id", (request, response) => {
    mongoDBcollection.updateOne({ "_id": new ObjectId(request.params.id) },  { $set: request.body },(error, result) => {
        if(error) {
            return response.status(500).send(error)
        }
        response.send(result)
    });
});

//Borrar permamentemente documento según su ID
documents.delete("/delete/:id", (request, response) => {
    mongoDBcollection.deleteOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error)
        }
        response.send(result)
    });
});

//Borrar permamentemente todos los documentos ¡¡¡PRECAUCIÓN!!!
documents.delete("/deleteAll/", (request, response) => {
    mongoDBcollection.deleteMany((error, result) => {
        if(error) {
            return response.status(500).send(error)
        }
        response.send(result)
    });
});
//--------------Final rutas mongoDB--------//

const pdf = require('html-pdf')
const pdfTemplate = require(`${process.cwd()}/documents/requisitos/template.js`)

documents.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile(`${process.cwd()}/documents/requisitos/Documento-Requisitos.pdf`, (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

documents.get('/obtener-pdf', (req, res) => {
    res.sendFile(`${process.cwd()}/documents/requisitos/Documento-Requisitos.pdf`)
})

module.exports = documents;