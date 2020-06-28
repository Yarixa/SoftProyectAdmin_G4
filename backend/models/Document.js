const Sequelize = require('sequelize')

const db = require("../database/db.js")
//Sequelize utiliza las tablas con nombre en plural en este senido debe terminar en 's'
module.exports = db.sequelize.define(
    'documents',
    {
        id:{
            type : Sequelize.TEXT,
            primaryKey:true
        },
        projectID:{
            type : Sequelize.TEXT,
        },
        sectionType:{
            type: Sequelize.TEXT
        },
        content:{
            type: Sequelize.TEXT
        },
        disponible:{
            type: Sequelize.BOOLEAN
        }
    }
 );