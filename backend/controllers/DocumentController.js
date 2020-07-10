const db = require("../models/mongoDB");
const Document = db.tutorials;

//Crear y guardar documento
exports.create = (req, res) => {
  //Validar entrada
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //Se crea el modelo
  const document = new Document({
    title: req.body.title,
    description: req.body.description,
    disponible: req.body.disponible ? req.body.disponible : false
  });

  //Guardar en la bd
  document
    .save(document)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Document."
      });
    });
};

//Imprimir todos los documentos de la base de datos, estén activos o no
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Document.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

//Encontrar un documento según su id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Document.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Document with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Document with id=" + id });
    });
};

//Actualizar documento recibiendo su id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Document.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Document with id=${id}. Maybe Document was not found!`
        });
      } else res.send({ message: "Document was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Document with id=" + id
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
          message: `Cannot delete Document with id=${id}. Maybe Document was not found!`
        });
      } else {
        res.send({
          message: "Document was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Document with id=" + id
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
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
