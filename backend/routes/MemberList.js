const express = require("express")
const memberList = express.Router()

//Dentro de UsersController se encuentran las funciones necesarias para manejar a los usuarios
const memberListController = require("../controllers/MemberListController.js")

const cors = require("cors")

memberList.use(cors())

//Permite crear una asociacion entre usuario y curso. Basicamente un integrante.
memberList.post('/create', memberListController.create)

memberList.get('/readAll', memberListController.readAll)

memberList.get('/readByUser', memberListController.readByUser)

memberList.get('/readByCourse', memberListController.readByCourse)

memberList.get('/readByTeam', memberListController.readByTeam)

memberList.put('/updateRole/:user_email/:course_id', memberListController.updateTeam)

memberList.put('/updateRole/:user_email/:course_id/:team_id', memberListController.updateRole)

memberList.put('/enable/:user_email/:course_id', memberListController.enable)

memberList.put('/disable/:user_email/:course_id', memberListController.disable)

memberList.post('/uploadFile', memberListController.uploadFile)

memberList.post('/massiveCreate/:xlsx_name/:course_id', memberListController.testMassiveCreate)

module.exports = memberList