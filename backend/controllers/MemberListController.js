const db = require("../database/db.js")
//const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const MemberList = require("../models/MemberList")
const TeamList = require("../models/TeamList")
const Team = require("../models/Team")
const User = require("../models/User")
const Sequelize = require('sequelize')
const fs = require('fs')


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
				Team.findAll({
					limit: 1,
				  order: [ [ 'id', 'DESC' ]]
				})
				.then (team => {
					res.json({data: team})
				})

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
					Team.findAll({
						limit: 1,
					  order: [ [ 'id', 'DESC' ]]
					})
					.then (team => {
						res.json({data: team})
					})

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
		type: req.body.type
	}
	MemberList.findOne({
		where: {
			user_email: memberListData.user_email,
			course_id: memberListData.course_id
		}
	})
	.then(memberList => {
		if(!memberList){
			MemberList.create(memberListData)
			.then(memberList => {
				MemberList.findAll({
					limit: 1,
				  order: [ [ 'id', 'DESC' ]]
				})
				.then (memberList => {
					res.json({memberList: memberList})
				})
				.catch(err => {
					res.status(400).json({
						error: "Ha ocurrido un error al momento de ingresar el memberList a la base de datos."
					})
				})
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
	Team.findAll({
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
  /*MemberList.findAll({
		where: {
			course_id: req.query.course_id
		}})*/
	db.sequelize.query(
		"Select * from memberLists left join users on memberLists.user_email = users.email where memberLists.course_id = " + req.query.course_id
	)
	.spread(metadata => {
		res.send(metadata)
	})
	.catch(err => {
		res.status(500).json({
			message:
				err.message || "There was an error while retrieving"
		})
	})
}

//retornar objeto <-
exports.readByTeam = (req, res) => {

	/*MemberList.findAll({
		where: {
			team_id: req.query.team_id,
		}
	})
	.then(data => {
		res.send(data)
	})*/
	db.sequelize.query(
		"Select * from teamLists left join users on teamLists.user_email = users.email where teamLists.team_id = " + req.query.team_id
	)
	.spread(metadata => {
		res.send(metadata)
	})
	.catch(err => {
		res.status(500).json({
			message:
				err.message || "There was an error while retrieving"
		})
	})
}

var contarMiembros = async (team_id) => {
	return TeamList.count({
		where: {
			team_id: team_id
		}
	})
	.then(count => {
		return count
	})
	.catch(err => {
		return 0
	})
}

//retornar objeto <-
exports.updateTeam = (req, res) => {
	const teamListData = {
		user_email: req.params.user_email,
		team_id: req.params.team_id,
		type: req.body.type
	}
	TeamList.findOne({
		where:{
			user_email: req.params.user_email,
			team_id: req.params.team_id
		}
	})
	.then(teamList => {
		if(!teamList){
			TeamList.create(teamListData)
			.then(result => {
				TeamList.findAll({
					limit: 1,
				  order: [ [ 'id', 'DESC' ]]
				})
				.then (teamList => {
					res.json({data: teamList})
				})

			})
			.catch(err => {
				res.status(400).json({
					error: err
				})

			})
			.catch(err => {
				res.json({
					error: err
				})
			})
		}
		else{
			res.json({
					error: "No existe el usuario dentro del tema 3 "
			})
		}
	})
	.catch(err => {
		res.json({
				error: "No existe el usuario dentro del tema 1 "
		})
	})
}

exports.updateRole = (req, res) => {
	TeamList.findOne({
		where:{
			user_email: req.params.user_email,
			team_id: req.params.team_id
		}
	})
	.then(teamList => {
		if(teamList){
			TeamList.update({
					type: req.body.type
				},
				{where:{
					user_email: req.params.user_email,
					team_id: req.params.team_id
				}
			})
			.then(result => {
				teamList.type = req.body.type
				res.json({
					teamlist: teamList
				})
			})
			.catch(err => {
				res.json({
					error: err + 'd'
				})
			})
		}
		else{
			res.json({
					error: err + 'a'
			})
		}
	})
	.catch(err => {
		res.json({
				error: err
		})
	})
}

exports.updateTeamName = (req, res) => {
	Team.findOne({
		where: {
			id: req.params.id
		}
	})
	.then(team => {
		if(team){
			Team.update({
				name: req.body.name
			},
			{
				where:{
					id: req.params.id
				}
			})
			.then(result => {
				team.name = req.body.name
				res.json({
					team: team
				})
			})
		}
		else{
			res.json({
				err: true,
				messageError: "No se encontro un team con esa id"
			})
		}
	})
	.catch(err => {

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

exports.enableTeamMember = (req, res) => {
	TeamList.findOne({
		where:{
			id: req.params.id
		}
	})
	.then(teamList => {
		if(teamList){
			TeamList.update({
				active: true
			},{
				where: {
					id: req.params.id
				}
			})
			.then(result => {
				teamList.active = true
				res.json({
					teamList: teamList
				})
			})
			.catch(err => {
				res.json({
					error: true,
					messageError: "Existe un error"
				})
			})
		}
	})
	.catch(err => {

	})
}

exports.disableTeamMember = (req, res) => {
	TeamList.findOne({
		where:{
			id: req.params.id
		}
	})
	.then(teamList => {
		if(teamList){
			TeamList.update({
				active: false
			},{
				where: {
					id: req.params.id
				}
			})
			.then(result => {
				teamList.active = false
				res.json({
					teamList: teamList
				})
			})
			.catch(err => {
				res.json({
					error: true,
					messageError: "Existe un error"
				})
			})
		}
	})
	.catch(err => {

	})
}

exports.enableTeam = (req, res) => {
	Team.findOne({
		where: {
			id: req.params.id
		}
	})
	.then(team => {
		if(team){
			Team.update({
				active: true
			},
			{
				where: {
					id: req.params.id
				}
			})
			.then(result => {
				team.active = true
				res.json({
					team: team
				})
			})
			.catch(err => {
				res.json({
					error: true,
					messageError: "Existe un error"
				})
			})
		}
	})
	.catch(err =>{

	})
}

exports.disableTeam = (req, res) => {
	Team.findOne({
		where: {
			id: req.params.id
		}
	})
	.then(team => {
		if(team){
			Team.update({
				active: false
			},
			{
				where: {
					id: req.params.id
				}
			})
			.then(result => {
				team.active = false
				res.json({
					team: team
				})
			})
			.catch(err => {
				res.json({
					error: true,
					messageError: "Existe un error"
				})
			})
		}
	})
	.catch(err =>{

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
            await file.mv('./upload/' + file.name);

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
			if(await uploadFile(req)){

				res.json({memberListArray: await cargaArchivo(req)})
			}
	}
	catch(e){
		res.json("There was an error on the file. " + e)
	}
}

var uploadFile = async (req) => {
	try {
        if(!req.files) {
            return false
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let file = req.files.file;

            //Use the mv() method to place the file in upload directory (i.e. "upload")
            await file.mv('./upload/' + file.name);

            //send response
            return true
        }
    } catch (err) {
        return false
    }
}

var crearNuevoUsuario = async (req) => {
		var XLSX = require('xlsx');
			try{
				var workbook = await XLSX.readFile("./upload/" + req.params.xlsx_name);
				//console.log(workbook)
				var sheetNames = workbook.SheetNames;

				var usuariosAceptados = []

				var sheetIndex = 1;

				var userArray = await XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetIndex-1]]);
				console.log(userArray)
				for(var i = 0; i < userArray.length; i++){
					const today = new Date()
					const dPassword =  "1234"
					const dRole = checkRegex(userArray[i]["Dirección de correo"])
					const userData = {
						first_name: userArray[i].Nombre,

						last_name: userArray[i]["Apellido(s)"],
						email: userArray[i]["Dirección de correo"],
						role: dRole,
						password: dPassword,
						created: today
					}
					console.log(userData)
					usuariosAceptados.push(await almacenarNuevoUsuario(userData))
				}
			return usuariosAceptados
		}
		catch(e){
			return e
		}
}


var almacenarNuevoUsuario = async (userData) => {
		console.log("DE")
		return User.findOne({
					where: {
						email: userData.email
					}
				})
				.then(user =>{
					//console.log(user)
					if(!user){
						let hash = bcrypt.hashSync(userData.password, 10)
						//console.log(hash)
						userData.password = hash
						return User.create(userData)
						.then(user => {
								console.log("Dea")
								return User.findOne({
									where: {
										email: userData.email
									}
								})
								.then (user => {
									return user
								})
								.catch(err => {
									return {
										error: err
									}
								})
							})
							.catch(err => {
								return {
									error: err
								}
							})
					}else{
						return {
							error: "Usuario ya creado"
						}
					}
				})
				.catch(err => {
					return {
						error: err
					}
				})
}


var  cargaArchivo = async (req) =>{
			await crearNuevoUsuario(req)
			var usuariosAceptados = []
			var XLSX = require('xlsx');
			var workbook = await XLSX.readFile("./upload/" + req.params.xlsx_name);
			var sheetNames = workbook.SheetNames;

			var sheetIndex = 1;

			var memberListArray = await XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetIndex-1]]);



			for(var i = 0; i < memberListArray.length; i++){
				const dRole = checkRegex(memberListArray[i]["Dirección de correo"])
				const memberListData = {

					user_email: memberListArray[i]["Dirección de correo"],
					first_name: memberListArray[i].Nombre,
					last_name: memberListArray[i]["Apellido(s)"],
					course_id: req.params.course_id,
					type: dRole

				}

			const resultado = await almacenarUsuario(memberListData)
			usuariosAceptados.push(resultado)

		}
		//Metodo para eliminar el archivo subido y cargado.
		try{
			const path = "./upload/" + req.params.xlsx_name
			fs.unlink( path, (err) =>{

			})
		}
		catch(err){
			console.error(err)
		}
		return usuariosAceptados
}

var crearJSONUsuario = async (resultado, memberListData) =>{
	var resultado = JSON.stringify(resultado)
	console.log(resultado)
	const UsuarioJSON = {
		id: resultado["id"],
		first_name: memberListData.first_name,
		last_name: memberListData.last_name,
		course_id: memberListData.course_id,
		type: memberListData.type,
		active: true
	}
	return UsuarioJSON;
}

exports.modificarRolCurso = async (req, res) =>{

	MemberList.findOne({
		where: {
			user_email: req.params.user_email,
			course_id: req.params.course_id
		}
	})
	.then(memberList => {
		if(memberList){
			var resBusqueda = memberList
			if(memberList.type.localeCompare("Profesor") != 0){
				MemberList.update({
					type: req.body.type
				},{
					where:{
						user_email: req.params.user_email,
						course_id: req.params.course_id
					}
				})
				.then(memberList => {
					resBusqueda.type = req.body.type;
					res.json({
						memberList: resBusqueda
					})
				})
				.catch(err => {
					res.json({
						errorMessage: "Hubo un error al actualizar el usuario"
					})
				})
			}
			else{
				res.json({
					errorMessage: "El usuario es un profesor"
				})
			}
		}
		else{
			res.json({
				errorMessage: "El usuario no existe dentro del curso"
			})
		}
	})

}

var almacenarUsuario = async (memberListData) => {

		return MemberList.findOne({
					where: {
						user_email: memberListData.user_email,
						course_id: memberListData.course_id,
					},
				})
				.then((memberList) =>{
					if(!memberList){
							return MemberList.create(memberListData)
							.then(memberList => {
								return MemberList.findAll({
									limit: 1,
  								where: {
  									user_email: memberListData.user_email,
   									course_id: memberListData.course_id
 									},
  								order: [ [ 'user_email', 'DESC' ]]
								})
								.then(memberList =>{
									var member = JSON.stringify(memberList)
									var memberZone = JSON.parse(member)
									return {
										id: memberZone.map(x => x.id)[0],
										first_name: memberListData.first_name,
										last_name: memberListData.last_name,
										course_id: memberListData.course_id,
										type: memberListData.type,
										active: true
									}
								})
								.catch(err => {
									return {
										user_email: memberListData.user_email,
										course_id: memberListData.course_id,
										errorMessage: "El usuario no ha podido ser agregado al curso"
									}
								})
							})
							.catch(err => {
								return {
									user_email: memberListData.user_email,
									course_id: memberListData.course_id,
									errorMessage: "El usuario no ha podido ser agregado al curso"
								}
							})

					}else{
						return {
									user_email: memberListData.user_email,
									course_id: memberListData.course_id,
									errorMessage: "El usuario no ha podido ser agregado al curso"
						}
					}
				})
				.catch(err => {
					console.log('error: ' + err)
		})

		//Metodo para eliminar el archivo subido y cargado.
		try{
			const path = "./upload/" + req.params.xlsx_name
			fs.unlink( path, (err) =>{

			})
		}
		catch(err){
			console.error(err)
	}
}

var checkRegex = (email) => {
	var examineRegex = email.match(/@utalca.cl/g)
	if(examineRegex != null){
		return "Profesor"
	}
	return "Alumno"
}


