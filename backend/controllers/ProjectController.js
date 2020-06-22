const db  = require("../database/db.js")
const Project = require("../models/Project")

exports.create = (req,res)=>{

    const projectData = {
        nombre : req.body.nombre,
        course_id : req.body.course_id,
        descripcion : req.body.descripcion
    }
    Project.findOne({
        where : {
            nombre :req.body.nombre,
            curso = req.body.course_id
        }
    }).then(project =>{
        if(!project){
            Project.create(projectData).then(
                project=>{
                    res.json({
                        id : project.id,
                        status : project.nombre + ' registrado'
                    })
                }
            ).catch(err =>{
                res.send(' error al crear '+err)
            })
        }else{
            res.json({error:" Ya existe el proyecto con el mismo nombre en el proyecto con id "+project.id})
        }
    }).catch(err=>{
        res.send('error al crear: '+err)
    })
}

exports.delete = (req,res)=>{
   
}

exports.deshabilitar = (req,res)=>{
    Project.findOne({
        where : {
            id :req.params.id
        }
    }).then(project =>{
        if(project){
            Project.update({
                disponible : false
            },{
                where:{
                    id : req.params.id
                }
            }).then(result =>{
                res.json({status: req.params.id +' eliminado'})
            }).catch(err=>{
                res.json({error: "No se puede eliminar"})
            })
        }else{
            res.status(400).json({error:"Proyecto no existe"})
            res.end()
        }
    }).catch(err=>{
        res.status(400).json({error:err})
    })
}

exports.habilitar = (req,res)=>{
    Project.findOne({
        where : {
            id :req.params.id
        }
    }).then(project =>{
        if(project){
            Project.update({
                disponible : true
            },{
                where:{
                    id : req.params.id
                }
            }).then(result =>{
                res.json({status: req.params.id +' habilitado'})
            }).catch(err=>{
                res.json({error: "No se puede habilitar"})
            })
        }else{
            res.status(400).json({error:"Proyecto no existe"})
            res.end()
        }
    }).catch(err=>{
        res.status(400).json({error:err})
    })
}

exports.readAll = (req,res)=>{
    Project.findAll({
        where : {
            disponible : true
        }
    }).then(proyectos =>{
        res.json({
            projects : proyectos
        })
    })
}

exports.update = (req, res)=>{
    Project.findOne({
        where : {
            id:req.params.id
        }
    }).then(project=>{
        if(project){
            Project.update({
                nombre : req.body.nombre,
                course_id : req.body.course_id,
                descripcion : req.body.descripcion
            },{
                where:{
                    id:req.params.id 
                }
            }).then(result=>{
                res.json({status:project.id + " Actualizado"})
            }).catch(err=>{
                res.json({error:req.params.id + " no se puede actualizar"+err})
            })
        }else{
            res.json({error:"no se encuentra "+req.params.id})
        }
    }).catch(err=>{
        res.status(400).json({error:" No se encuentra ID "+req.params.id+" "+err})
    })
}

exports.search = (req,res)=>{}