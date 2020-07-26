import React from 'react';


export default function VistaRequisitos(props){
    const {idProyecto} = props;

    return (
        <div>
            <h1>Documento de requisitos para el proyecto id={idProyecto}</h1>
        </div>
    );
}