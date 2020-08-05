const db = require("../database/db.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/User")
const fs = require('fs')
const sgMail = require('@sendgrid/mail');

//Es necesario el solicitar la API KEY y declarala como variable de entorno.
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

process.env.SECRET_KEY = 'secret'

//Declaramos la funcion create. Esta funcion esta encargada de crear un usuario si y solo si no existe un usuario con el mismo email.
//Es recomendable cambiar findOne por findByPk, dado a que esto es lo que Sequelize recomienda.
exports.create = (req, res) => {
	const today = new Date()
	const dPassword =  Math.random().toString(36).substr(2, 5)
	const dRole = checkRegex(req.body.email)
	const userData = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		role: dRole,
		password: dPassword,
		created: today
	}
	User.findOne({
		where: {
			email: req.body.email
		}
	})
	.then(user =>{
		if(!user){
			const hash = bcrypt.hash(dPassword, 10, (err, hash) => {
				userData.password = hash
				User.create(userData)
				.then(user => {
					/*Llama a la funcino encargada de enviar el correo con la nueva contraseña
					*No se esta haciendo tratamiento para los correos enviados con email invalido,
					*Falta agregar el asunto a la plantilla. Dicha plantilla se encuentra en la pagina de SendGrid.
					*/
					sendPasswordEmail(dPassword, userData.email, userData.first_name);
					res.json({status: user.email + ' registered'})
				})
				.catch(err => {
					res.send('error' + err)
				})
			})
		}else{
			res.json({error: "User already exist"})
		}
	})
	.catch(err => {
		res.send('error: ' + err)
	})
}

//Declaramos la funcion que permite al usuario logearse a la pagina.
//Problemas conocidos son por ejemplo el hecho de que aun no se implementa un metodo para hacer expirar nuestro token.
//Recomendable, cambiar el tipo de token por uno que permita renovarse e implementar los metodos GET necesarios.
exports.login = (req, res) => {
	User.findOne({
		where: {
			email: req.body.email
		}
	})
	.then(user => {
		if(user){
			if(user.disponible){
				//Funcion encargada para verificar el hash de password.
				if(bcrypt.compareSync(req.body.password, user.password)){
					let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
						expiresIn: 60
					})
					res.send(token)
				}
				else{
					res.status(400).json({
						error: true,
						errorMessage: "password invalida"
					})
				}
			}
			else{
				res.status(400).json({
					error: true,
					errorMessage: "El usuario se encuentra deshabilitado"
				})
			}
		}else{
			res.status(400).json({
				error: true,
				errorMessage: "User does not exists"
			})
			res.end()
		}
	})
	.catch(err => {
		res.status(400).json({
			error: true,
			errorMessage: err
		})
	})
}

//Declaramos la funcion que permite deshabilitar un usuario.
//Esta funcion necesita recibir un parametro, :email en este caso.
exports.disable = (req, res) => {
	User.findOne({
		where: {
			email: req.params.email
		}
	})
	.then(user => {
		if(user){
			User.update(
				{disponible: false},
				{where: {email: req.params.email}}
			)
			.then(user => {
				res.json({status: req.params.email + ' disabled'})
			})
			.catch(user => {
				res.json({error: "Can't disable user."})
			})
		}else{
			res.status(400).json({error: 'User does not exist'})
			res.end()
		}
	})
	.catch(err => {
		res.status(400).json({error: err})
	})
}

//Declaramos la funcion que permite habilitar un usuario.
//Esta funcion necesita recibir un parametro, :email en este caso.
exports.enable = (req, res) => {
	User.findOne({
		where: {
			email: req.params.email
		}
	})
	.then(user => {
		if(user){
			User.update(
				{disponible: true},
				{where:
					{email: req.params.email}
				}
			)
			.then(user => {
				res.json({status: req.params.email + ' enabled'})
			})
			.catch(user => {
				res.json({error: "Can't enable user."})
			})
		}else{
			res.status(400).json({error: 'User does not exist'})
			res.end()
		}
	})
	.catch(err => {
		res.status(400).json({error: err})
	})
}

//Declaramos la funcion que permite cambiar la contraseña de un usuario.
//Esta funcion necesita recibir un parametro, :email en este caso.
exports.updatePassword = (req, res) => {
	User.findOne({
		where: {
			email: req.params.email
		}
	})
	.then(user => {
		if(user){
			if(bcrypt.compareSync(req.body.oldPassword, user.password)){
				const hash = bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
					User.update(
						{password: hash},
						{where: { email: req.params.email } }
					)
					.then(result =>{
							res.json({status: req.params.email + ' updated'})
							res.send()
					})
					.catch(err =>{
							res.json({error: err})
					})
				})
			}
			else{
				res.json({error: 'Wrong password'})
				res.end()
			}
		}	else{
			res.status(400).json({error: 'User' + req.params.email + 'does not exist'})
			res.end()
		}
	})
	.catch(err => {
		res.status(400).json({error: 'User' + req.params.email + 'does not exist'})
		res.end()
	})
}

//Funcion usada para poder actualizar un usuario, es necesario el tener el email
//y el objeto usuario para poder efectuar esta operacion.
//Solo se puede modificar el nombre y el apellido con esta funcion
//para modificar la contraseña es necesario usar updatePassword.
exports.updateUser = (req, res) => {
	User.findOne({
		where: {
			email: req.params.email
		}
	})
	.then(user => {
		if(user){
				User.update(
					{first_name: req.body.first_name,
					last_name: req.body.last_name},
					{where: {email: req.params.email}}
				).then(result => {
					res.json({status: req.params.email + ' updated'}
				)}).catch(err =>{
					res.json({error: err})
				})
			}
		else{
				res.json({error: 'Wrong password'})
			}
		})
	.catch(err => {
		res.status(400).json({error: 'User' + req.params.email + 'does not exist'})
		res.end()
	})
}

//Funcion que permite listar todos los usuarios.
exports.readAll = (req, res) => {

	User.findAll({})
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


//Funcion que, dado el email de un usuario, permite buscar a dicho usuario.
exports.readUser = (req, res) => {
	User.findOne({
		where: {email: req.params.email}
	})
	.then(data => {
		if(data){
			res.send(data)
		}
		else{
			res.status(400).end()
		}
	})
	.catch(err => {
		res.status(500).send({
			message:
				err.message || "There was an error while retrieving"
		})
	})
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



exports.tMassive = async(req, res) => {
	try{
		var flag = true
		if(flag){
			res.json({
				usuariosAceptados: await testMassiveCreate(req, res)
			})
		}
		else{
			res.json({
				d: "D"
			})
		}
	}
	catch(err){

	}
}

//Funcion que carga un archivo .xlsx para luego crear una cantidad n de usuario
//donde n es la cantidad de usuarios no repetidos.
//dicha funcion se encarga de crear usuarios de test, los cuales no reciben correo
//y tienen contraseña fija "1234"
var testMassiveCreate = async (req, res) => {
		var XLSX = require('xlsx');
			try{
				var workbook = await XLSX.readFile("./upload/" + req.params.xlsx_name);
				console.log(workbook)
				var sheetNames = workbook.SheetNames;

					var workbook = await XLSX.readFile("./upload/" + req.params.xlsx_name);
					var sheetNames = workbook.SheetNames;

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
		catch(e){
			return e
		}
}

var almacenarUsuario = async (userData) => {
		return User.findOne({
					where: {
						email: userData.email
					}
				})
				.then(user =>{
					console.log(user)
					if(!user){
						let hash = bcrypt.hashSync(userData.password, 10)
						console.log(hash)
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

//Declaramos la funcion create. Esta funcion esta encargada de crear un usuario si y solo si no existe un usuario con el mismo email.
//Es recomendable cambiar findOne por findByPk, dado a que esto es lo que Sequelize recomienda.
//Version de prueba, tiene contraseña fija "1234" y no envia correo al nuevo usuario.
exports.testCreate = (req, res) => {
	const today = new Date()
	const dPassword = "1234" //Math.random().toString(36).substr(2, 5)
	const dRole = checkRegex(req.body.email)
	const userData = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		role: dRole,
		password: dPassword,
		created: today
	}
	User.findOne({
		where: {
			email: req.body.email
		}
	})
	.then(user =>{
		if(!user){
			const hash = bcrypt.hash(dPassword, 10, (err, hash) => {
				userData.password = hash
				User.create(userData)
				.then(user => {
					/*Llama a la funcino encargada de enviar el correo con la nueva contraseña
					*No se esta haciendo tratamiento para los correos enviados con email invalido,
					*Falta agregar el asunto a la plantilla. Dicha plantilla se encuentra en la pagina de SendGrid.
					*/
					//sendPasswordEmail(dPassword, userData.email, userData.first_name);
					User.findOne({
						where:{
							email: user.email
						}
					})
					.then(user => {
						res.json({
							user: user
						})
					})
					.catch(err => {
						res.json({
							error: err
						})
					})
				})
				.catch(err => {
					res.json({error: err})
				})
			})
		}else{
			res.json({error: "User already exist"})
		}
	})
	.catch(err => {
		res.json({error: err})
	})
}

//Funcion encargada de revisar el correo para determinar el tipo de usuario
//para los casos que consideren @utalca seran definidos como Profesor
//mientras que los casos contrarios seran Alumno.
//Debe de entenderse de que el calce debe de ser preciso.
var checkRegex = (email) => {
	var examineRegex = email.match(/@utalca.cl/g)
	console.log(examineRegex)
	if(examineRegex != null){
		return "Profesor"
	}
	return "Alumno"
}

//Funcion privada encargada de enviar el correo con la nueva contraseña al usuario
var sendPasswordEmail = (password, email, first_name) =>{
	msg = {
	  to: email,
	  from: 'gsoftware.4.test@gmail.com',
	  templateId: 'd-6ae879da344446c8b62ca5b2584f8e2e',

	  dynamic_template_data: {
	  	name: first_name,
	  	password: password
	  }

	};
	sgMail
	.send(msg)
	.then(() => {}, error => {
	  console.error(error);
	  if (error.response) {
	    console.error(error.response.body)
	  }
	  res.json({error: error})
	  });
 }


//Funcion obtenida para subir un archivo.
//Deberia de mover este metodo para otro controlador, dado a que se puede usar para otras cosas.
//Aunque si lo usamos para las imagenes, debería de ser personal para cada proyecto.
/*exports.uploadFile = async (req, res) => {
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
}*/

//Funcion que carga un archivo .xlsx para luego crear una cantidad n de usuario
//donde n es la cantidad de usuarios no repetidos.
/*exports.massiveCreate = async (req, res) => {

	if(await uploadFile(req)){

		var XLSX = require('xlsx');
			try{
				var workbook = XLSX.readFile("./upload/" + req.params.xlsx_name);
				var sheetNames = workbook.SheetNames;

				var sheetIndex = 1;

				var userArray = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetIndex-1]]);

				for(var i = 0; i < userArray.length; i++){
					const today = new Date()
					const dPassword =  "1234"//Math.random().toString(36).substr(2, 5)
					const dRole = checkRegex(userArray[i]["Dirección de correo"])
					const userData = {
						first_name: userArray[i].Nombre,
						last_name: userArray[i]["Apellido(s)"],
						email: userArray[i]["Dirección de correo"],
						role: dRole,
						password: dPassword,
						created: today
					}
					User.findOne({
						where: {
							email: req.body.email
						}
					})
					.then(user =>{
						if(!user){
							const hash = bcrypt.hash(dPassword, 10, (err, hash) => {
								userData.password = hash
								User.create(userData)
								.then(user => {
									//sendPasswordEmail(dPassword, userData.email, userData.first_name);
								})
								.catch(err => {
									console.log('error' + err)
								})
							})
						}else{
							console.log("User already exist")
						}
					})
					.catch(err => {
						console.log('error: ' + err)
					})
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

			res.json("All Users registered")


		}
		catch(e){
			res.json("There was an error on the file.")
		}
	}
	else{
		res.json({
			f: "F"
		})
	}
}*/