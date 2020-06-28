const express = require("express")
const users = express.Router()

//Dentro de UsersController se encuentran las funciones necesarias para manejar a los usuarios
const userController = require("../controllers/UsersController.js")

const cors = require("cors")

users.use(cors())

//Metodos deshabilitados hasta que encuentre como evadir dnsbl-1.uceprotect.net
/*//Bloque deshabilitado dado a que contiene el envio de correos.
//Permite registrar al usuario. Hasta el momento no se ha tomado en cuenta el apartado de roles.
users.post('/create', userController.create)

//Funcion usada para cargar el archivo ubicado en ./upload.
//Para dejar el archivo en dicha direccion se debe usar /uploadFile.
//Deshabilitado hasta que usemos correos reales.
users.post('/massiveCreate/:xlsx_name', userController.massiveCreate)*/


//Permite listar todos los usuarios en la base de datos.
users.get('/readAll', userController.readAll)

//Permite listar un usuario
users.get('/readUser/:email', userController.readUser)

//Funcion que permite al usuario logear. Hasta el momento no he visto como hacer que el token expire.
users.post('/login', userController.login)

//Funcion para deshabilitar un usuario usando un correo.
//Es necesario pasar email como req.params
users.put('/disable/:email', userController.disable)

//Funcion para habilitar un usuario usando un correo.
//Es necesario pasar email como req.params
users.put('/enable/:email', userController.enable)

//Permite cambiar la contraseña de un usuario identificado por un correo.
//Es necesario el introducir la contraseña antigua y la nueva (obviamente).
//Es necesario pasar email como req.params
users.put('/updatePassword/:email', userController.updatePassword)

users.put('/updateUser/:email', userController.updateUser)

//Funcion usada para cargar el archivo ubicado en ./upload.
//Para dejar el archivo en dicha direccion se debe usar /uploadFile.
//Tiene una contraseña fija de "1234". Ademas no contiene el modulo para enviar correos.
users.post('/massiveCreate/:xlsx_name', userController.testMassiveCreate)

//Permite registrar al usuario. Hasta el momento no se ha tomado en cuenta el apartado de roles.
//Usuario de prueba, la contraseña es "1234" y no envia correo al nuevo usuario.
users.post('/create', userController.testCreate)

//FileUploader para poder meter los archivos .xlsx dentro de una carpeta especifica (./upload)
//Puede ser usado para subir otro tipo de archivos. No he restringido esto.
users.post('/uploadFile', userController.uploadFile)

//users.post('/sendPasswordEmail', userController.recoverPassword)



module.exports = users