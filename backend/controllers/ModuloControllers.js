const db = require("../database/db.js")
const Modulo = require("../models/Modulo")
const Curso = require("../models/Course")

//Funcion para crear un modulo
exports.create = (req,res)=>{
    const moduloData = {
       // id    : req.body.id,
        nombre : req.body.nombre,
        degree : req.body.degree
    }
    Modulo.findOne({
        where : {
            nombre : req.body.nombre
        }
    }).then(modulo=>{
        if(!modulo){
            Modulo.create(moduloData).then(
                modulo=>{
                    res.json({
                        id : modulo.id,
                        //status : modulo.nombre + ' registrado'
                    })
                }
            ).catch(err =>{
                res.send('error en crear '+err)
            })
        }else{
            res.json({error:"El modulo ya existe"+modulo.id})
        }
    }).catch(err=>{
        res.send(`Error al crear: ${err}`)
    })
}
//funcion para eliminar modulo 
exports.delete = (req,res)=>{
    Modulo.findOne({
        where : {
            id : req.params.id
        }
    }).then(modulo =>{
        if(modulo){
            Modulo.destroy({
                where : {
                    id : req.params.id
                }
            }).then(modulo=>{
                res.json({status : req.params.id  + ' eliminado'})
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
exports.deshabilitar = (req,res)=>{
    Modulo.findOne({
        where : {
            id : req.params.id
        }
    }).then(modulo =>{
        if(modulo){
            console.log(modulo.disponible)
            Modulo.update({
                disponible : 0
            },{
                where: {
                    id : req.params.id
                }
            }).then(result=>{
                res.json({status: req.params.id + ' eliminado'})
            }).catch(err=>{
                res.json({error : " No se peude eliminar"})
            })
        }else{
            res.status(400).json({error:"Modulo no existe"})
            res.end()
        }
    }).catch(err=>{
        res.status(400).json({error:err})
    })    
}
exports.habilitar  = (req,res)=>{
    Modulo.findOne({
        where : {
            id : req.params.id
        }
    }).then(modulo=>{
        if(modulo){
            Modulo.update({
                disponible : 1
            },{
                where: {
                    id : req.params.id
                }
            }).then(result=>{
                res.json({status : req.params.id + ' - tupla habilitada'})
            }).catch(err=>{
                res.json({error : " No se puede habilitar"})
            })
        }else{
            res.status(400).json({error:"Modulo no existe"})
            res.end()
        }
    }).catch(err =>{
        res.status(400).json({error:err})
    })
}

//Funcion para visualizar todos los modulos
exports.readAll = (req,res)=>{
    Modulo.findAll({
        where:{
            disponible : 1
        }
    }).then(modulos=>{
        res.json({
            modulos : modulos 
        })
    })
}
//cuenta la cantidad de cursos que tiene asociado a cada modulo
exports.contarCursos = (req,res)=>{
    Curso.findAll({
    //los atributos que salen en la busqueda
    attributes: [ "subject_id", ["count(subject_id)","cantidad"]],
    
    group : ['subject_id'],
    where:{
        disponible:1
    }

    }).then(result=>{
        res.json({
            modulos: result
        })
    }).catch(err=>{
        res.json({
            status: "error al consultar "+ err
        })
    })
}

//Funcion para actualizar datos de modulos
exports.update = (req, res)=>{
    Modulo.findOne({
        where : {
            id: req.params.id
        }
    }).then(modulo=>{
        if(modulo){
           Modulo.update({
               nombre : req.body.nombre,
               degree : req.body.degree
           },{
               where: {
                   id : req.params.id
               }
           }).then(result =>{
               res.json({status : modulo.id + " tupla actualizada"})
           }).catch(err=>{
               res.json({error:req.params.id+" no se puede actualizar error "+err})
           })
        }else{
            res.json({erro:"no se encuntra "+req.params.id})
        }
    }).catch(err=>{
        res.status(400).json({error:"No se encuentro ID: "+req.params.id+ " "+ err})
    })
}
