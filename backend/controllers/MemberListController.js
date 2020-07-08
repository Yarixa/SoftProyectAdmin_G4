const db = require("../database/db.js")
//const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const MemberList = require("../models/MemberList")
const Team = require("../models/Team")
const Sequelize = require('sequelize')


exports.createTeam = (req, res) => {
	const teamData = {
		course_id: req.params.course_id,
		project_id: req.body.project_id,
		name: req.body.name
	}
	Team.findOne({
		where: {
			course_id: teamData.course_id,
			project_id: teamData.project_id,
		}
	})
	.then(team => {
		if(!team){
			Team.create(teamData)
			.then(team => {
				res.json({message: "El team ha sido creado."})
			})
			.catch(err => {
				res.status(400).json({
					error: "Ha ocurrido un error al momento de ingresar el team a la base de datos."
				})
			})
		}
		else{
			//Cabe destacar de que cada proyecto tiene un grupo, excepto por el proyecto 1, el cual es default.
			if(teamData.project_id == 1){
				Team.create(teamData)
				.then(team => {
					res.json({message: "El team ha sido creado."})
				})
				.catch(err => {
					res.status(400).json({
						error: "Ha ocurrido un error al momento de ingresar el team a la base de datos."
					})
				})
			}
			else{
				res.json({
					teamExists: "El team " + teamData.name + " ya esta registrado en el curso de ID "
					+ teamData.course_id + " y con el projecto " + teamData.project_id
				})
			}
		}
	})
	.catch(err => {
		res.status(400).json({
			error: "Ha ocurrido un error en el ingreso del usuario: " + err
		})
	})
}

exports.create = (req, res) => {
	const memberListData = {
		user_email: req.body.user_email,
		course_id: req.body.course_id,
		team_id: req.body.team_id,
		type: req.body.type
	}
	MemberList.findOne({
		where: {
			user_email: memberListData.user_email,
			course_id: memberListData.course_id,
			team_id: memberListData.team_id
		}
	})
	.then(memberList => {
		if(!memberList){
			MemberList.create(memberListData)
			.then(memberList => {
				res.json({message: "El usuario ha sido integrado al curso."})
			})
			.catch(err => {
				res.status(400).json({
					error: "Ha ocurrido un error al momento de ingresar el usuario a la base de datos."
				})
			})
		}
		else{
			res.json({
				userExists: "El usuario " + memberListData.user_email + " ya esta registrado en el curso de ID"
				+ memberListData.course_id
			})
		}
	})
	.catch(err => {
		res.status(400).json({
			error: "Ha ocurrido un error en el ingreso del usuario: " + err
		})
	})
}

exports.readAll = (req, res) => {

	MemberList.findAll({

	})
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.status(500).json({
			message:
				err.message || "There was an error while retrieving"
		})
	})
}

exports.readAllTeams = (req, res) => {

	Team.findAll({

	})
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.status(500).json({
			message:
				err.message || "There was an error while retrieving"
		})
	})
}

exports.readTeamsByCourse = (req, res) => {

	db.sequelize.query("Select * from teams inner join memberLists on teams.course_id = " + req.query.course_id	)
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.status(500).json({
			message:
				err.message || "There was an error while retrieving"
		})
	})
}

/*exports.readTeamsByCourse = (req, res) => {
	Team.belongsTo(MemberList, {foreignKey: 'course_id', sourceKey: 'course_id'})
	MemberList.belongsTo(Team, {foreignKey: 'course_id', sourceKey: 'course_id'})
	Team.findAll({
		where: {
			course_id: req.query.course_id
		},
		include: [{
			model: MemberList,
			where: {course_id: Sequelize.col('team.course_id')},
			required: true
		}]
	})
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.status(500).json({
			message:
				err.message || "There was an error while retrieving"
		})
	})
}*/

exports.readByUser = (req, res) => {

	MemberList.findAll({
		where: {
			user_email: req.query.user_email
		}
	})
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.status(500).json({
			message:
				err.message || "There was an error while retrieving"
		})
	})
}

exports.readByCourse = (req, res) => {

	MemberList.findAll({
		where: {
			course_id: req.query.course_id
		}
	})
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.status(500).json({
			message:
				err.message || "There was an error while retrieving"
		})
	})
}

exports.readByTeam = (req, res) => {

	MemberList.findAll({
		where: {
			team_id: req.query.team_id,
		}
	})
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.status(500).json({
			message:
				err.message || "There was an error while retrieving"
		})
	})
}

exports.updateTeam = (req, res) => {
	MemberList.findOne({
		where:{
			user_email: req.params.user_email,
			course_id: req.params.course_id,
			team_id: 1
		}
	})
	.then(memberList => {
		if(memberList){
			MemberList.update({
					team_id: req.body.team_id
				},
				{where:{
					user_email: req.params.user_email,
					course_id: req.params.course_id,
					team_id: 1
				}
			})
			.then(result => {
				console.log(result)
				res.json({
					message: "Se ha modificado el grupo del usuario " + memberList.user_email
				})
			})
			.catch(err => {
				res.json({
					error: "No existe el usuario dentro del tema 2 " + err
				})
			})
		}
		else{
			res.json({
					error: "No existe el usuario dentro del tema 3 " + err
			})
		}
	})
	.catch(err => {
		res.json({
				error: "No existe el usuario dentro del tema 1 " + err
		})
	})
}

exports.updateRole = (req, res) => {
	MemberList.findOne({
		where:{
			user_email: req.params.user_email,
			course_id: req.params.course_id
		}
	})
	.then(memberList => {
		if(memberList){
			MemberList.update({
					type: req.body.type
				},
				{where:{
					user_email: req.params.user_email,
					course_id: req.params.course_id,
					team_id: req.params.team_id
				}
			})
			.then(result => {
				res.json({
					message: "Se ha modificado el rol del usuario " + user_email
				})
			})
			.catch(err => {
				res.json({
					error: "No existe el usuario dentro del tema"
				})
			})
		}
		else{
			res.json({
					error: "No existe el usuario dentro del tema"
			})
		}
	})
	.catch(err => {
		res.json({
				error: "No existe el usuario dentro del tema"
		})
	})
}

exports.enable = (req, res) => {
	MemberList.findOne({
		where:{
			user_email: req.params.user_email,
			course_id: req.params.course_id
		}
	})
	.then(memberList => {
		if(memberList){
			MemberList.update({
					active: true
				},
				{where:{
					user_email: req.params.user_email,
					course_id: req.params.course_id
				}
			})
			.then(result => {
				res.json({
					message: "Se ha activado el usuario"
				})
			})
			.catch(err => {
				res.json({
					error: "No existe el usuario dentro del tema"
				})
			})
		}
		else{
			res.json({
					error: "No existe el usuario dentro del tema"
			})
		}
	})
	.catch(err => {
		res.json({
				error: "No existe el usuario dentro del tema"
		})
	})
}

exports.disable = (req, res) => {
	MemberList.findOne({
		where:{
			user_email: req.params.user_email,
			course_id: req.params.course_id
		}
	})
	.then(memberList => {
		if(memberList){
			MemberList.update({
					active: false
				},
				{where:{
					user_email: req.params.user_email,
					course_id: req.params.course_id
				}
			})
			.then(result => {
				res.json({
					message: "Se ha desactivado el usuario"
				})
			})
			.catch(err => {
				res.json({
					error: "No existe el usuario dentro del tema"
				})
			})
		}
		else{
			res.json({
					error: "No existe el usuario dentro del tema"
			})
		}
	})
	.catch(err => {
		res.json({
				error: "No existe el usuario dentro del tema"
		})
	})
}

//Funcion obtenida para subir un archivo.
//Deberia de mover este metodo para otro controlador, dado a que se puede usar para otras cosas.
//Aunque si lo usamos para las imagenes, debería de ser personal para cada proyecto.
exports.uploadFile = async (req, res) => {
	try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let file = req.files.file;

            //Use the mv() method to place the file in upload directory (i.e. "upload")
            file.mv('./upload/' + file.name);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                		//nombre necesario para llamar a la funcion de cargar los usuarios.
                    name: file.name
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.testMassiveCreate = async (req, res) => {

		try{


			//console.log(memberListArray)

			res.json(await cargaArchivo(req))

	}
	catch(e){
		res.json("There was an error on the file. " + e)
	}
}

var  cargaArchivo = async (req) =>{

			var XLSX = require('xlsx');
			var workbook = XLSX.readFile("./upload/" + req.params.xlsx_name);
			var sheetNames = workbook.SheetNames;

			var sheetIndex = 1;

			var memberListArray = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetIndex-1]]);

			for(var i = 0; i < memberListArray.length; i++){
				const dRole = checkRegex(memberListArray[i]["Dirección de correo"])
				const memberListData = {

					user_email: memberListArray[i]["Dirección de correo"],
					course_id: req.params.course_id,
					team_id: 1,
					type: dRole

				}
				console.log(memberListData)
				await MemberList.findOne({
					where: {
						user_email: memberListData.user_email,
						course_id: memberListData.course_id,
						team_id: 1
					}
				})
				.then(memberList =>{
					if(!memberList){
							MemberList.create(memberListData)
							.then(user => {
								console.log("User " + memberListData.user_email + " linked.")
							})
							.catch(err => {
								console.log('Error: ' + err )
							})
					}else{
						console.log("Error")
					}
				})
				.catch(err => {
					console.log('error: ' + err)
				})
		}
		return("La operación fue realizada.")
}

var checkRegex = (email) => {
	var examineRegex = email.match(/@utalca.cl/g)
	console.log(examineRegex)
	if(examineRegex != null){
		return "Profesor"
	}
	return "Alumno"
}


