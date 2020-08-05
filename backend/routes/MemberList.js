const express = require("express")
const memberList = express.Router()

//Dentro de UsersController se encuentran las funciones necesarias para manejar a los usuarios
const memberListController = require("../controllers/MemberListController.js")

const cors = require("cors")

memberList.use(cors())

/**
 * @api {post} /memberList/create Permite añadir un integrante al curso
 * @apiName create
 * @apiGroup MemberList
 *
 *
 * @apiSuccess {Json[String]} Message Mensaje de creación correcta.
 * @apiError {Json[String]} Error Mensaje de error, la cuenta del usuario no esta creada.
 * @apiError {Json[String]} UserExists Mensaje de error, el usuario ya se encuentra asignado a la asignatura.
 * @apiError {Json[String]} Error Mensaje de error, existe otro error.
 */
memberList.post('/create', memberListController.create)

/**
 * @api {get} /memberList/readall Recibe la informacion de los miembros de lista de integrantes.
 * @apiName readAll
 * @apiGroup MemberList
 *
 *
 * @apiSuccess {Array[Data]} data Listado de miembros de un grupo.
 * @apiError {Json[String]} OtherError Mensaje de error.
 */
memberList.get('/readAll', memberListController.readAll)

/**
 * @api {get} /memberList/readbyuser Recibe la informacion de los miembros de lista de integrantes, separandolos por usuario.
 * @apiName readAll
 * @apiGroup MemberList
 *
 * @apiParam {Query[String]} user_email Email del usuario a solicitar.
 *
 * @apiSuccess {Array[Data]} data Listado de miembros de un grupo.
 * @apiError {Json[String]}  error Mensaje de error.
 */
memberList.get('/readByUser', memberListController.readByUser)

/**
 * @api {get} /memberList/readbyuser Recibe la informacion de los miembros de lista de integrantes, separandolos por curso.
 * @apiName readAll
 * @apiGroup MemberList
 *
 * @apiParam {Query[String]} user_email Email del usuario a solicitar.
 *
 * @apiSuccess {Array[Data]} data Listado de miembros de un grupo.
 * @apiError {Json[String]}  error Mensaje de error.
 */
memberList.get('/readByCourse', memberListController.readByCourse)

memberList.get('/readByTeam', memberListController.readByTeam)

memberList.get('/readAllTeams', memberListController.readAllTeams)

memberList.get('/readTeamByCourse', memberListController.readTeamsByCourse)

memberList.put('/updateTeam/:user_email/:team_id', memberListController.updateTeam)

memberList.put('/updateRole/:user_email/:course_id/:team_id', memberListController.updateRole)

memberList.put('/updateTeamName/:id', memberListController.updateTeamName)

memberList.put('/enable/:user_email/:course_id', memberListController.enable)

memberList.put('/disable/:user_email/:course_id', memberListController.disable)

memberList.put('/disableTeamMember/:id', memberListController.disableTeamMember)

memberList.put('/enableTeamMember/:id', memberListController.enableTeamMember)

memberList.put('/enableTeam/:id', memberListController.enableTeam)

memberList.put('/disableTeam/:id', memberListController.disableTeam)

memberList.put('/modificarRolCurso/:user_email/:course_id', memberListController.modificarRolCurso)

//memberList.post('/uploadFile', memberListController.uploadFile)

memberList.post('/massiveCreate/:xlsx_name/:course_id', memberListController.testMassiveCreate)

memberList.post('/createTeam/:course_id', memberListController.createTeam)

module.exports = memberList