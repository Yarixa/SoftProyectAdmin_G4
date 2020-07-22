import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import DocConstruccion from './DocConstruccion';
import DocTesting from './DocTesting';
import DocDiseño from './DocDiseño';
import DocRequisitos from './DocRequisitos';
import {useDispatch, useSelector} from "react-redux";
import {fetchProyectos} from "../vista-curso/gestion-proyectos/proyectosDuck";


export default function DashboardProyecto(props) {
    const { idProyecto } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProyectos());
    }, [dispatch]);

    const listadoProyectos = useSelector(store => store.proyectos.listadoProyectos);
    const proyectoActual = listadoProyectos.find(proyecto => idProyecto == proyecto.id);

    return (
     <div>
         <h1>proyecto: {proyectoActual?proyectoActual.nombre:"cargando..."}</h1>
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            xs={12}
            spacing={1}
        >
            <Grid item xs={3}>
                <DocRequisitos idProyecto={idProyecto}/>
            </Grid>
            <Grid item xs={3}>
                <DocDiseño idProyecto={idProyecto}/>
            </Grid>
            <Grid item xs={3}>
                <DocConstruccion idProyecto={idProyecto}/>
            </Grid>
            <Grid item xs={3}>
                <DocTesting idProyecto={idProyecto}/>
            </Grid>
        </Grid>
    </div>




    );
}