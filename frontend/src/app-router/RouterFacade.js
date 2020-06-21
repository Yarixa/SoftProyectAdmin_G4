import React, { useEffect, useState } from 'react';

import Modulos from '../components/vista-modulos/Modulos';
import Users from '../components/gestion-usuarios/Users';
import DashboardAdministrador from '../components/dashboard/DashboardAdministrador';

export default function RouterFacade(props) {
    const { route } = props;

    switch (route) {
        case 'modulos': return (<Modulos />);
        case 'usuarios': return (<Users />);
        case 'dashboard': return (<DashboardAdministrador />);
        default: return (<div> ERROR: RUTA NO ENCONTRADA !!</div>);
    }
}