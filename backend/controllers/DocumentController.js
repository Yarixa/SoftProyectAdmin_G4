const db = require("../models/mongoDB");
const Document = db.tutorials;

//Crear y guardar documento
exports.create = (req, res) => {
  //Validar entrada
  if (!req.body.projectID || !req.body.name) {
    res.status(400).send({ message: "Error: Se debe ingresar el ID del curso y el nombre del documento." });
    return;
  }

  //Se crea el modelo
  const document = new Document({
    projectID: req.body.projectID,
    name: req.body.name,
    description: req.body.description,
    disponible: req.body.disponible ? req.body.disponible : true
  });

  //Guardar en la bd
  document
    .save(document)
    .then(data => {
      //res.send(data);
      res.send({
        message: document.id
      })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al crear el documento."
      });
    });
};

//Imprimir todos los documentos de la base de datos, estén activos o no
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Document.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al cargar documentos."
      });
    });
};

//Encontrar un documento según su id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Document.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "No se encontró el documento con la id=" + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error al obtener el documento con la id=" + id });
    });
};

//Actualizar documento recibiendo su id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Debe ingreasar los campos a modificar"
    });
  }

  const id = req.params.id;

  Document.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `No se puede actualizar documento id=${id}`
        });
      } else res.send({ message: "El documento fue actualizado exitosamente" });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al actualizar el documento id=" + id
      });
    });
};

//Borrar un documento, recibiendo su id
exports.delete = (req, res) => {
  const id = req.params.id;

  Document.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `No se puede eliminar el documento id=${id}.`
        });
      } else {
        res.send({
          message: "El documento fue eliminado exitosamente"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo borrar el documento con id=" + id
      });
    });
};

/*Borrar todos los documentos de la base de datos
exports.deleteAll = (req, res) => {
  Document.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};
*/

//Encontrar todos los documentos activos
exports.findAlldisponible = (req, res) => {
  Document.find({ disponible: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al mostrar los documentos."
      });
    });
};


/*/Habilitar documento
exports.habilitar = (req, res) => {
  const id = req.params.id;

  Document.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "No se encontró el documento con la id=" + id });
      else{
        res.send(data)
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error al obtener el documento con la id=" + id });
    });
};*/