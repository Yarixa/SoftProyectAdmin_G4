const Sequelize = require('sequelize')

const db = require("../database/database.js")

module.exports = db.sequelize.define(
    'subject',
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