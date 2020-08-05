import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Modulos from '../components/vista-modulos/Modulos';
import Users from '../components/gestion-usuarios/Users';
import DashboardAdministrador from '../components/dashboard/DashboardAdministrador';
import Curso from '../components/vista-curso';
import Editor from '../components/documento/Editor';
import Members from '../components/vista-curso/integrantes/Members';
import Grupos from '../components/grupo-curso/Grupos';
import TablaProyectos from '../components/vista-curso/gestion-proyectos';

import { useSelector, useDispatch } from 'react-redux';
import {fetchProyectos} from "../components/vista-curso/gestion-proyectos/proyectosDuck";
import {Documento} from "../components/documento/Editor";
import DashboardProyecto from "../components/vista-proyecto/VistaProyectos";
import VistaRequisitos from "../components/documento/vista-requisitos";
import VistaDisenio from "../components/documento/vista-diseño";
import VistaTesting from "../components/documento/vista-testing";
import VistaModulos from "../components/documento/vista-modulos";


export default function RouterFacade(props) {
    const { root } = props;
    const { subseccion } = props;
    const { idSubseccion } = props;
    const { id } = props;

    useEffect(() => {
        console.log('---> root: ' + root);
        console.log('---> subseccion: ' + subseccion);
        console.log('---> id: ' + id);
    }, [root, subseccion, id]);

    if (sessionStorage.getItem('logged') === 'false') {
        console.log("redirecting to login from RouterFacade!!")
        return (<Redirect to="/" />)
    }

    const arbolPrincipal = (subseccion) => {
        switch (subseccion) {
            case 'modulos': return (<Modulos />);
            case 'usuarios': return (<Users />);
            case 'dashboard': return (<DashboardAdministrador />);
            case 'proyectos': return (<Editor />);
            default: return (<div> ERROR 404: NO HAY NADA AQUÍ</div>);
        }
    }

    const arbolCurso = (idCurso, subseccion, idSubseccion) => {
        switch (subseccion) {
            case 'home': return (<Curso idCurso={idCurso} />);
            case 'integrantes': return (<Members idCurso={idCurso} needsBack={true} />);
            case 'proyectos': return (<TablaProyectos idCurso={idCurso} needsBack={true} />);
            case 'proyecto': return (<DashboardProyecto idCurso={idCurso} idProyecto={idSubseccion} />);
            case 'grupos': return (<Grupos idCurso={idCurso} needsBack={true} />);
            default: return (<div> ERROR 404: NO HAY NADA AQUÍ</div>);
        }
    }

    const arbolProyecto = (idProyecto, subseccion) => {
        switch (subseccion) {
            case 'req': return (<VistaRequisitos idProyecto={idProyecto}/>);
            case 'dis': return (<VistaDisenio idProyecto={idProyecto}/>);
            case 'test': return (<VistaTesting idProyecto={idProyecto}/>);
            case 'mod': return (<VistaModulos idProyecto={idProyecto}/>);
            default: return (<div> ERROR 404: NO HAY NADA AQUÍ</div>);
        }
    }

    switch (root) {
        case 'home': return arbolPrincipal(subseccion);
        case 'curso': return arbolCurso(id, subseccion, idSubseccion);
        case 'proyecto': return arbolProyecto(id, subseccion, idSubseccion);
        default: return (<div> ERROR 404: NO HAY NADA AQUÍ </div>);
    }

}