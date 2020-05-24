const express = require("express")
const modulos = express.Router()

const cors = require("cors")

const Modulo = require("../models/Modulo")

modulos.use(cors())

/*  Funcion para crear un modulo
    Para los valores de los parametros se requiere del cuerpo(body) como parametro
*/
modulos.post('/register', (req,res)=>{
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
            res.json({error:"Ya existe un modulo con este codigo"})
        }
    }).catch(err=>{
        res.send(`error al crear: ${err}`)
    })
});
/**
 * Se utiliza el metodo get para traer  los modulos creados
 */
modulos.get('/show', (req,res)=>{
    Modulo.findAll().then(modulos=>{
        res.json({
            modulos : modulos 
        })
    })
})

/**
 * Se usa el metodo post, se usa el cuerpo(body) para para usar la id del modulo a eliminar.
 */
modulos.post('/delete', (req,res)=>{
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
})

modulos.post('/update',(req, res)=>{
    const moduloData = {
        id : req.id,
        nombre : req.nombre,
        degree : req.degree
    }
    Modulo.update({
        nombre: req.nombre,
        degree: req.degree

    },{
        where : {
            id : req.id
        }
    }).then(modulo=>{
        res.json({status : req.body.id + ' Actualizado '})
    }).catch(()=>{
        res.json({error: "No se puede actualizar datos"})
    })
})

module.exports = modulos;