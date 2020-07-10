import React from 'react';
import Grupos from '../grupo-curso/Grupos';
import Members from './integrantes/Members';
import TablaProyectos from './gestion-proyectos';

export default function Curso(props) {
    const { idCurso } = props;

    return (
        <div>
            <div><h1 align='center'>Dashboard</h1></div>
            <div>
               <TablaProyectos idCurso={ idCurso }/>
            </div>
            <br></br>
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