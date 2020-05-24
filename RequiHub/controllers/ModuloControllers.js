const db = require("../database/db.js")
const Modulo = require("../models/Modulo")


//Funcion para crear un
exports.create = (req,res)=>{
    const moduloData = {
        id    : req.body.id,
        nombre : req.body.nombre,
        degree : req.body.degree
    }
    Modulo.findOne({
        where : {
            id : req.body.id
        }
    }).then(modulo=>{
        if(!modulo){
            Modulo.create(moduloData).then(
                modulo=>{
                    res.json({
                        status : modulo.id + ' registrado'
                    })
                }
            ).catch(err =>{
                res.send('error en crear '+err)
            })
        }else{
            res.json({error:"Ya existe un modulo con este codigo "+modulo.id})
        }
    }).catch(err=>{
        res.send(`error al crear: ${err}`)
    })
}
//funcion para eliminar modulo
exports.delete = (req,res)=>{
    Modulo.findOne({
        where : {
            id : req.body.id
        }
    }).then(modulo =>{
        if(modulo){
            Modulo.destroy({
                where : {
                    id : req.body.id
                }
            }).then(modulo=>{
                res.json({status : req.body.id  + ' eliminado'})
            }).catch(modulo=>{
                res.json({error: "No se puede eliminar modulo"})
            })
        }else{
            res.status(400).json({error:"Modulo no existe"})
            res.end()
        }
    }).catch(err=>{
        res.status(400).json({error:err})
    })
}
//Funcion para visualizar todos los modulos
exports.readAll = (req,res)=>{
    Modulo.findAll().then(modulos=>{
        res.json({
            modulos : modulos 
        })
    })
}

//Funcion para actualizar datos de modulos
exports.update = (req, res)=>{
    Modulo.findOne({
        where : {
            id: req.body.id
        }
    }).then(modulo=>{
        if(modulo){
           Modulo.update({
               nombre : req.body.nombre,
               degree : req.body.degree
           },{
               where: {
                   id : req.body.id
               }
           }).then(result =>{
               res.json({status : modulo.id + " Actualizado "})
           }).catch(err=>{
               res.json({error:req.body.id+" no se puede actualizar error "+err})
           })
        }else{
            res.json({erro:"no se encuntra "+req.id})
        }
    }).catch(err=>{
        res.status(400).json({error:"No se encuentro ID: "+req.body.id+ " "+ err})
    })
}