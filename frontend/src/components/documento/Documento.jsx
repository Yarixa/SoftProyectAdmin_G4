import React, {Component} from 'react';
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Button from "@material-ui/core/Button";
import { createDocument, disableDocumento, enableDocumento, editarDocumento, getDocument} from './documentDucks';


const Documentos = ()=>{

    const dispach = useDispatch();

    //obteniendo datos del formultario

    const documeto = useSelector(store => store.documentos)
    
    const handleSubmit = () => {
        // Validar Datos
        dispatch(createUser(user))
        setOpen(false)
    }

    const proyectoNombre = e =>{
        document.title = e.target.value
    }
    return (
        <form method="POST">
            <div>
                <h2>Proyecto de Prueba </h2>
                <CKEditor
                    editor = {ClassicEditor}
                    data = "<p>Ingrese Texto</p>"
                    onInit = {editor=>{
                        console.log("editor listo para usar", editor);
                    }}
                    onChange = {(event,editor)=>{
                        const contenido = editor.getData();
                        console.log({event,editor,contenido});
                    }}
                />
                <Button onClick={this.handleSumit}>Guardar</Button>

            </div>
        </form>

    );
}