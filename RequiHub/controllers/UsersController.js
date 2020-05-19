const db = require("../database/db.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/User")

process.env.SECRET_KEY = 'secret'

//Declaramos la funcion create. Esta funcion esta encargada de crear un usuario si y solo si no existe un usuario con el mismo email.
//Es recomendable cambiar findOne por findByPk, dado a que esto es lo que Sequelize recomienda.
exports.create = (req, res) => {
	const today = new Date()
	const userData = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		password: req.body.password,
		created: today
	}

	User.findOne({
		where: {
			email: req.body.email
		}
	})
	.then(user =>{
		if(!user){
			const hash = bcrypt.hash(req.body.password, 10, (err, hash) => {
				userData.password = hash
				User.create(userData)
				.then(user => {
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
			//Funcion encargada para verificar el hash de password.
			if(bcrypt.compareSync(req.body.password, user.password)){
				let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
					expiresIn: 60
				})
				res.send(token)
			}
			else{
				res.end()
			}
		}else{
			res.status(400).json({error: 'User does not exist'})
			res.end()
		}
	})
	.catch(err => {
		res.status(400).json({error: err})
	})
}

//Declaramos la funcion que permite borrar un usuario. Cabe destacar de que esta funcion cambiará de borrar a deshabilitar.
//Esta funcion necesita recibir un parametro, :email en este caso.
exports.delete = (req, res) => {
	User.findOne({
		where: {
			email: req.params.email
		}
	})
	.then(user => {
		if(user){
			User.destroy({
				where: {
					email: req.params.email
				}
			})
			.then(user => {
				res.json({status: req.params.email + ' deleted'})
			})
			.catch(user => {
				res.json({error: "Can't delete user."})
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

	})
}

exports.updateUser = (req, res) => {

}
