var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

var Modulos = require("./routes/Modulo")

app.get("/", (req,res)=>{
    res.json({
        message: "Bienvenido a la gestion de modulos"
    })
})
app.use("/modulos", Modulos)

app.listen(port,()=>{
    console.log("Servidor corre en puerto : "+port)
})