const Sequelize = require('sequelize')

const db = require("../database/database.js")
//Sequelize utiliza las tablas con nombre en plural en este senido debe terminar en 's'
module.exports = db.sequelize.define(
    'subjects',
    {
        id:{
            type : Sequelize.TEXT,
            primaryKey:true
        },
        nombre:{
            type: Sequelize.TEXT
        },
        degree:{
            type: Sequelize.TEXT
        }


    },
    {
        timestamps:false
    }
 );