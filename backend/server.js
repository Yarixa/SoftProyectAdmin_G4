//------Variables mongoDB-------//
const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectID
const mongoDBURL = "mongodb://localhost:27017"
const mongoDBDatabaseName = "mongoDB"
var mongoDBdatabase, mongoDBcollection
//------------------------------//

var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var fileUpload = require("express-fileupload")
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

//Necesario para usar fileUpload.
//El tutorial recomendaba usar morgan, pero funciona de todas formas.
app.use(fileUpload({
    createParentPath: true
}));

var Users = require("./routes/Users")
var Modulos = require("./routes/Modulo")
var Courses = require("./routes/Courses")
var MemberList = require("./routes/MemberList")
var Projects = require("./routes/Project")

app.use("/courses", Courses)
app.use("/modulos", Modulos)
app.use("/users", Users)
app.use("/memberlist", MemberList)
app.use("/projects", Projects)

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
app.post("/documents/add", (request, response) => {
  request.body.disponible = true //se agrega disponibilidad true por defecto
  mongoDBcollection.insertOne(request.body, (error, result) => {
    if(error) {
      return response.status(500).send(error)
    }
    //response.send(request.id)
    response.send(result["ops"][0]["_id"])
  });
});

//Obtener todos los documentos
app.get("/documents/readAll", (request, response) => {
    mongoDBcollection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error)
        }
        response.send(result)
    });
});

//Obtener unico documento según su ID
app.get("/documents/get/:id", (request, response) => {
  mongoDBcollection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
      if(error) {
          return response.status(500).send(error)
      }
      response.send(result)
  });
});

//Deshabilitar dococumento según su ID
app.put("/documents/deshabilitar/:id", (request, response) => {
  mongoDBcollection.updateOne({ "_id": new ObjectId(request.params.id) },  { $set: {disponible: false} },(error, result) => {
      if(error) {
          return response.status(500).send(error)
      }
      response.send(result)
  });
});

//Habilitar dococumento según su ID
app.put("/documents/habilitar/:id", (request, response) => {
  mongoDBcollection.updateOne({ "_id": new ObjectId(request.params.id) },  { $set: {disponible: true} },(error, result) => {
      if(error) {
          return response.status(500).send(error)
      }
      response.send(result)
  });
});

//Editar dococumento según su ID
app.put("/documents/update/:id", (request, response) => {
  mongoDBcollection.updateOne({ "_id": new ObjectId(request.params.id) },  { $set: request.body },(error, result) => {
      if(error) {
          return response.status(500).send(error)
      }
      response.send(result)
  });
});

//Borrar permamentemente documento según su ID
app.delete("/documents/delete/:id", (request, response) => {
  mongoDBcollection.deleteOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
      if(error) {
          return response.status(500).send(error)
      }
      response.send(result)
  });
});

//Borrar permamentemente todos los documentos ¡¡¡PRECAUCIÓN!!!
app.delete("/documents/deleteAll/", (request, response) => {
  mongoDBcollection.deleteMany((error, result) => {
      if(error) {
          return response.status(500).send(error)
      }
      response.send(result)
  });
});
//--------------Final rutas mongoDB--------//

app.listen(port, () => {
	console.log("Server is running on port: " + port)
})
