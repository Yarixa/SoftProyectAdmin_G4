import React, {useEffect} from 'react';

import Modulos from '../components/vista-modulos/Modulos';
import Users from '../components/gestion-usuarios/Users';
import DashboardAdministrador from '../components/dashboard/DashboardAdministrador';
import Curso from '../components/vista-curso';
import Documentos from '../components/documento/Documento';

export default function RouterFacade(props) {
    const { route } = props;
    const { arg } = props;

    useEffect(()=>{
        console.log('---> route: ' + route);
        console.log('---> arg: ' + arg);
    }, [route, arg]);

    switch (route) {
        case 'modulos': return (<Modulos />);
        case 'usuarios': return (<Users />);
        case 'dashboard': return (<DashboardAdministrador />);
        case 'curso': return (<Curso idCurso={arg}/>);
        case 'proyectos': return (<Documentos />);
        default: return (<div> ERROR: RUTA NO ENCONTRADA !!</div>);
    }
}