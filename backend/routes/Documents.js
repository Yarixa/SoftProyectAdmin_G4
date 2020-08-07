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

//----------------Gestor de Imágenes------------//

const multiparty = require('connect-multiparty')
const MultipartyMiddleware = multiparty({uploadDir:`${process.cwd()}/documents/images`})
documents.post("/upload", MultipartyMiddleware, (req, res) => {
    console.log(req.files.upload)
})

//----------------Rutas mongoDB-----------------//

//Agregar documento
documents.post("/add", (request, response) => {
if(request.body.projectID!==null || request.body.tipo!==null){ //Valida que se ingresen atributos importantes
    request.body.disponible = true //se agrega disponibilidad true por defecto
    mongoDBcollection.insertOne(request.body, (error, result) => {
    if(error) {
        return response.status(500).send(error)
    }
    response.send(result["ops"][0]["_id"])
    })
} 
else{
    response.send("Se debe ingresar el ID del proyecto y el tipo de documento a ingresar (req/test/dis/imp/desc)")
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

//--------------Rutas para la generación de documentos--------//
const pdf = require('html-pdf')
const { response } = require("express")

//--------------Documento Requisitos-----------------//
const reqTemplate = require(`${process.cwd()}/documents/requisitos/template.js`)
documents.post('/requisitos/crear-documento/:projectID', (req, res) => {
    //Primero se obtienen todos los requisitos de usuario, y se almacenan en result1
    mongoDBcollection.find({"projectID": req.params.projectID, tipo: "req"}).toArray((error1, result1) => {
        if(error1) {
            return response.status(500).send(error1)
        }
        //Luego se obtiene la entrada con la información general del documento, y se almacena en result2
        mongoDBcollection.find({"projectID": req.params.projectID, tipo: "desc"}).toArray((error2, result2) => {
            if(error2) {
                return response.status(500).send(error2)
            }
            //Se pasan los parámetros al template. Éste devuelve el codigo html para ser escrito en el documento pdf
            pdf.create(reqTemplate(result1, result2), {}).toFile(`${process.cwd()}/documents/requisitos/Documento-Requisitos.pdf`, (err) => {
                if(err) {
                    res.send(Promise.reject());
                }
                res.send("Documento de requisitos creado exitosamente")
                //res.send(Promise.resolve());
            });
        });
    });
});
documents.get('/documento-requisitos', (req, res) => { //Ruta para obtener el documento de requisitos
    res.sendFile(`${process.cwd()}/documents/requisitos/Documento-Requisitos.pdf`)
})

//-----------------Documento de diseño----------//
const disTemplate = require(`${process.cwd()}/documents/disenio/template.js`)
documents.post('/disenio/crear-documento/:projectID', (req, res) => {
    //Primero se obtienen todos los documentos asociados al documento de diseño, y se almacenan en result1
    mongoDBcollection.find({"projectID": req.params.projectID, tipo: "dis"}).toArray((error1, result1) => {
        if(error1) {
            return response.status(500).send(error1)
        }
        //Luego se obtiene la entrada con la información general del documento, y se almacena en result2
        mongoDBcollection.find({"projectID": req.params.projectID, tipo: "desc"}).toArray((error2, result2) => {
            if(error2) {
                return response.status(500).send(error2)
            }
            //Se pasan los parámetros al template. Éste devuelve el codigo html para ser escrito en el documento pdf
            pdf.create(disTemplate(result1, result2), {}).toFile(`${process.cwd()}/documents/disenio/Documento-Disenio.pdf`, (err) => {
                if(err) {
                    res.send(Promise.reject());
                }
                res.send("Documento de diseño creado exitosamente")
                //res.send(Promise.resolve());
            });
        });
    });
});
documents.get('/documento-disenio', (req, res) => { //Ruta para obtener el documento de diseño
    res.sendFile(`${process.cwd()}/documents/disenio/Documento-Disenio.pdf`)
})

//-----------------Documento de Implementacón----------//
const impTemplate = require(`${process.cwd()}/documents/implementacion/template.js`)
documents.post('/implementacion/crear-documento/:projectID', (req, res) => {
    //Primero se obtienen todos los documentos asociados al documento de implemetacion, y se almacenan en result1
    mongoDBcollection.find({"projectID": req.params.projectID, tipo: "imp"}).toArray((error1, result1) => {
        if(error1) {
            return response.status(500).send(error1)
        }
        //Luego se obtiene la entrada con la información general del documento, y se almacena en result2
        mongoDBcollection.find({"projectID": req.params.projectID, tipo: "desc"}).toArray((error2, result2) => {
            if(error2) {
                return response.status(500).send(error2)
            }
            //Se pasan los parámetros al template. Éste devuelve el codigo html para ser escrito en el documento pdf
            pdf.create(impTemplate(result1, result2), {}).toFile(`${process.cwd()}/documents/implementacion/Documento-Implementacion.pdf`, (err) => {
                if(err) {
                    res.send(Promise.reject());
                }
                res.send("Documento de implementacion creado exitosamente")
                //res.send(Promise.resolve());
            });
        });
    });
});
documents.get('/documento-implementacion', (req, res) => { //Ruta para obtener el documento de implementacion
    res.sendFile(`${process.cwd()}/documents/implementacion/Documento-Implementacion.pdf`)
})

//-----------------Documento de Pruebas----------//
const testTemplate = require(`${process.cwd()}/documents/pruebas/template.js`)
documents.post('/pruebas/crear-documento/:projectID', (req, res) => {
    //Primero se obtienen todos los documentos asociados al documento de implemetacion, y se almacenan en result1
    mongoDBcollection.find({"projectID": req.params.projectID, tipo: "test"}).toArray((error1, result1) => {
        if(error1) {
            return response.status(500).send(error1)
        }
        //Luego se obtiene la entrada con la información general del documento, y se almacena en result2
        mongoDBcollection.find({"projectID": req.params.projectID, tipo: "desc"}).toArray((error2, result2) => {
            if(error2) {
                return response.status(500).send(error2)
            }
            //Se pasan los parámetros al template. Éste devuelve el codigo html para ser escrito en el documento pdf
            pdf.create(testTemplate(result1, result2), {}).toFile(`${process.cwd()}/documents/pruebas/Documento-Pruebas.pdf`, (err) => {
                if(err) {
                    res.send(Promise.reject());
                }
                res.send("Documento de pruebas creado exitosamente")
                //res.send(Promise.resolve());
            });
        });
    });
});
documents.get('/documento-pruebas', (req, res) => { //Ruta para obtener el documento de pruebas
    res.sendFile(`${process.cwd()}/documents/pruebas/Documento-Pruebas.pdf`)
})

module.exports = documents;