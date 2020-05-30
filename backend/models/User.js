const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
	'user',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		first_name: {
			type: Sequelize.STRING
		},
		last_name:{
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING,
			unique: true
		},
		role: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.STRING
		},
		disponible: {
			type: Sequelize.BOOLEAN,
			defaultValue: true
		},
		created: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW
		}
	},
	{
		timestamps: false
	}
)

