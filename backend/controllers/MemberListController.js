const db = require("../database/db.js")
//const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const MemberList = require("../models/MemberList")

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
			course_id: memberListData.course_id
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
					course_id: req.params.course_id
				}
			})
			.then(result => {
				res.json({
					message: "Se ha modificado el rol del usuario"
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

exports.massiveCreate = (req, res) => {

}

