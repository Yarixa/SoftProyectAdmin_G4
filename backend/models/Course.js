const Sequelize = require('sequelize')
const db = require("../database/db.js")
module.exports = db.sequelize.define(
	'courses',
	{
		id:{
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		subject_id: {
			type: Sequelize.STRING(40)
		},
		anio:{
			type: Sequelize.INTEGER
		},
		semestre: {
			type: Sequelize.INTEGER
		},
		disponible: {
			type: Sequelize.BOOLEAN
		}
	},
	{
		timestamps: false
	}
)