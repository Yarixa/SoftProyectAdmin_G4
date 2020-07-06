const db = require("../database/db.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Course = require("../models/Course")

process.env.SECRET_KEY = 'secret'

//Funcion para crear un curso
exports.create = (req, res) => {
	const courseData = {
        //id : req.id,
		subject_id: req.body.subject_id,
		anio: req.body.anio,
		semestre: req.body.semestre,
	}

    Course.findOne({
        where : {
            anio: req.body.anio,
		    semestre: req.body.semestre,
        }
    }).then(course =>{
        if(!course){
			Course.create(courseData)
			.then(course => {
				res.json({
                    id : course.id
                    //status: course.id + 'registrado'
                })
			})
			.catch(err => {
				res.send('Error al crear: ' + err)
			})
        }else{
            res.json({error:"El curso ya existe en el periodo "+course.anio+"-"+course.semestre})
        }
    }).catch(err=>{
        res.send(`Error al crear: ${err}`)
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
				res.json({status: req.params.id + ' eliminado'})
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

//Función para deshabilitar curso, el cual establece el booleano como false
exports.deshabilitar = (req, res)=>{
	Course.findOne({
        where : {
            id: req.params.id
        }
    }).then(course=>{
        if(course){
           Course.update({
               disponible : false
           },{
               where: {
                   id : req.params.id
               }
           }).then(result =>{
               res.json({status : course.id + " - tupla deshabilitada "})
           }).catch(err=>{
               res.json({error:req.params.id+" no se puede deshabilitar, error "+err})
           })
        }else{
            res.json({erro:"No se encuntra el ID: "+req.id})
        }
    }).catch(err=>{
        res.status(400).json({error:"No se encuentra ID: "+req.params.id+" "+ err})
    })
}

//Función para habilitar curso, el cual establece el booleano como true
exports.habilitar = (req, res)=>{
	Course.findOne({
        where : {
            id: req.params.id
        }
    }).then(course=>{
        if(course){
           Course.update({
               disponible : true
           },{
               where: {
                   id : req.params.id
               }
           }).then(result =>{
               res.json({status : course.id + " - tupla habilitada"})
           }).catch(err=>{
               res.json({error:req.params.id+" no se puede habilitar, error "+err})
           })
        }else{
            res.json({erro:"No se encuntra el ID: "+req.id})
        }
    }).catch(err=>{
        res.status(400).json({error:"No se encuentra ID: "+req.params.id+" "+ err})
    })
}

//Funcion para actualizar una tupla de curso recibiendo como parámetro su ID para identificarla
exports.update = (req, res)=>{
    Course.findOne({
        where : {
            id: req.params.id
        }
    }).then(course=>{
        if(course){
           Course.update({
               subject_id : req.body.subject_id,
               anio : req.body.anio,
               semestre : req.body.semestre
           },{
               where: {
                   id : req.params.id
               }
           }).then(result =>{
               res.json({status : course.id + " tupla actualizada"})
           }).catch(err=>{
               res.json({error:req.params.id+" no se puede actualizar error "+err})
           })
        }else{
            res.json({erro:"No se encuntra el ID: "+req.id})
        }
    }).catch(err=>{
        res.status(400).json({error:"No se encuentra ID: "+req.params.id+" "+ err})
    })
}

//Funcion que retorna todos los cursos registrados
exports.readAll = (req, res) => {
	Course.findAll({})
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.status(500).send({
			message:
				err.message || "Error"
		})
	})
}

//Funcion que retorna todos los cursos registrados
exports.findAll = (req, res) => {
    Course.findAll({
        where : {
            subject_id: req.params.subject_id
        }
    })
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.status(500).send({
			message:
				err.message || "Error"
		})
	})
}
