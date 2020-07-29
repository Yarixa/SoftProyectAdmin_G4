import React from 'react';


export default function VistaTesting(props){
    const {idProyecto} = props;

    return (
        <div>
            <h1>Documento de testing para el proyecto id={idProyecto}</h1>
        </div>
    );
}