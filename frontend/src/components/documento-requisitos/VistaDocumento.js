import React from 'react';
import Grid from '@material-ui/core/Grid';
import Referencias from './Referencias';
import Contexto from './Contexto';
import Alcance from './Alcance';
import Proposito from './Proposito';
import DescripGeneral from './DescripGeneral';
import SupYDep from './SupYDep';
import Restricciones from './Restricciones';
import Usuarios from './Usuarios';
import Requisitos from './Requisitos';
export default function VistaDocumento() {

    return (
     <div>
        <Grid container spacing={1}>
            <Proposito/>
            <Alcance/>
            <Contexto/>
            <Referencias/>
            <DescripGeneral/>
            <SupYDep/>
            <Restricciones/>
            <Usuarios/>
            <Requisitos/>
        </Grid>

    </div>




    );
}