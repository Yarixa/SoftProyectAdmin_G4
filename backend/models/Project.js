const Sequelize = require('sequelize')

const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'projects',
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoincrement: true
        },
        course_id :{
            type : Sequelize.INTEGER,
            
        },
        nombre : {
            type : Sequelize.TEXT
        },
        descripcion:{
            type : Sequelize.TEXT
        }
    }
)