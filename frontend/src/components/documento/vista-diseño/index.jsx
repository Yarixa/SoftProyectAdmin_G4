import React from 'react';


export default function VistaDisenio(props){
    const {idProyecto} = props;

    return (
        <div>
            <h1>Documento de diseño para el proyecto id={idProyecto}</h1>
        </div>
    );
}