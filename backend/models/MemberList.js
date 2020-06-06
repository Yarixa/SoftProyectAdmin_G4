const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
	'memberList',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		user_email: {
			type: Sequelize.STRING,
			references: {
				model: 'users',
				key: 'email'
			}
		},
		course_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'courses',
				key: 'id'
			}
		},
		team_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'teams',
				key: 'id'
			}
		},
		type: {
			type: Sequelize.STRING,
			defaultValue: 'Alumno'
		},
		active: {
			type: Sequelize.BOOLEAN,
			defaultValue: true
		}
	},
	{
		timestamp: false
	}
)