import React from 'react';
import Grupos from '../grupo-curso/Grupos';
import Members from './integrantes/Members';

export default function Curso(props) {
    const { idCurso } = props;

    return (
        <div>
            <div><h1 align='center'>Dashboard</h1></div>
            <div>
                <Members />
            </div>
            <br></br>
            <div>
                <Grupos idCurso = {idCurso}/>
            </div>
        </div>
    );
}