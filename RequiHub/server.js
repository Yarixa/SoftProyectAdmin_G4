var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

var Courses = require("./routes/Courses")

app.use("/courses", Courses) //ruta de cursos

app.listen(port, () => {
	console.log("El servidor está corriendo en el puerto: " + port)
})