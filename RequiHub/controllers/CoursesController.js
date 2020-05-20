const db = require("../database/db.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Course = require("../models/Course")

process.env.SECRET_KEY = 'secret'

//Funcion para crear un curso
exports.create = (req, res) => {
	const courseData = {
        id : req.id,
		subjet_id: req.body.subject_id,
		anio: req.body.anio,
		semestre: req.body.semestre,
    }
    Course.findOne({
        where : {
            id : req.id
        }
    }).then(course=>{
        if(!course){
            course.create(courseData).then(
                course=>{
                    res.json({
                        status : course.id + ' registred'
                    })
                }
            ).catch(err =>{
                res.send('error '+err)
            })
        }else{
            res.json({error:"El curso ya existe"})
        }
    }).catch(err=>{
        res.send('error: '+err)
    })
}

//Funcion para borrar curso, recibiendo como parametro el ID
exports.delete = (req, res) => {
	Course.findOne({
		where: {
			id: req.params.id
		}
	})
	.then(course => {
		if(course){
			Course.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(course => {
				res.json({status: req.params.id + ' deleted'})
			})
			.catch(course => {
				res.json({error: "No se puede eliminar el curso."})
			})
		}else{
			res.status(400).json({error: 'El curso no existe'})
			res.end()
		}
	})
	.catch(err => {
		res.status(400).json({error: err})
	})
}

//Retorna todos los cursos registrados
exports.readAll = (req, res) => {

	Course.findAll({})
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.status(500).send({
			message:
				err.message || "There was an error while retrieving"
		})
	})
}