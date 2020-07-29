import React from 'react';
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { makeStyles, CardHeader } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card'
import CardContent  from "@material-ui/core/CardContent";

export default function Documentos(){
    const documento = "hola "
    const nombreProyecto ="Proyecto de Requisitos de Software";
    const curso = "curso1"
    const requisito_software=""
    const requisito_usuario = ""

    const editorConfig = {
        autosave:{
            guardar(editor){
                console.log("Guardado")
                return guardarDato(editor.getData())
            }
        },
        removePlugins: [ 'MediaEmbed', 'insert', 'Table'],
        image : {}
    }

    const guardarDato =(contenido)=>{
        console.log('hizo clic',contenido)
        /**
         *
         * @param {text} contenido
         * contenido del texto enriquecido
         *
         */
    }

    return (
        <div>
            <Card>
                <CardHeader title={nombreProyecto}/>
                <CardContent>
                    <h3>{curso}</h3>
                </CardContent>
                <CKEditor 
                    editor = {ClassicEditor}
                    data = "<p>Ingresar Dato</p>"
                    config ={editorConfig}

                />
                  <Button type="submit">Agregar</Button>
            </Card>   

    </div>
    );
}