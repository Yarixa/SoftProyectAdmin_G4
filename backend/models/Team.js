const Sequelize = require('sequelize')

const db = require("../database/db.js")
//Sequelize utiliza las tablas con nombre en plural en este senido debe terminar en 's'
module.exports = db.sequelize.define(
    'teams',
    {
        id:{
            type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
        },
       course_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'courses',
                key: 'id'
            }
        },
        project_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'project',
                key: 'id'
            }
        },
        name: {
            type: Sequelize.STRING
        },
        active: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    },
    {
        timestamps:false
    }
 );