const Sequelize = require('sequelize')

const db = {}
const sequelize  = new Sequelize('proyecto', 'root', '', {
    host : 'localhost',
    dialect : 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('conectado')
})
.catch(err =>{
    console.log('No se conecto')
})

db.sequelize = sequelize
db.Sequelize  = Sequelize 

module.exports = db 