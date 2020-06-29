const Sequelize = require('sequelize')

const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'projects',
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        course_id :{
            type : Sequelize.INTEGER
            
        },
        nombre : {
            type : Sequelize.TEXT
        },
        descripcion:{
            type : Sequelize.TEXT
        },
        //sequaelize no toma la columna 'created_at' por lo que se debe definir
        createdAt: {
            field: 'created_at',
            type: Sequelize.DATE
        },
        updatedAt : {
            field: 'updated_at',
            type: Sequelize.DATE
        },
        disponible: {
			type: Sequelize.BOOLEAN
        },
        
    }
)