const Sequelize = require('sequelize')
const db = require("../database/db.js")
module.exports = db.sequelize.define(
	'course',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		subject_id: {
			type: Sequelize.STRING
		},
		anio:{
			type: Sequelize.INTEGER
		},
		semestre: {
			type: Sequelize.INTEGER
		}
	},
	{
		timestamps: false
	}
)
