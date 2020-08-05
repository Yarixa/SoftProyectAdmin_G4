import React from 'react';
import VistaDocumento from "../../documento-requisitos/VistaDocumento";


export default function VistaRequisitos(props){
    const {idProyecto} = props;

    return (
        <div>
            <VistaDocumento/>
        </div>
    );
}