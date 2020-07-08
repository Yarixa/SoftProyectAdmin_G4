import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { mostrarInstancias, fetchModulos } from "./modulosDuck";

import TablaModulos from "./listado-modulos/TablaModulos";
import TablaCursos from "./listado-cursos/TablaCursos";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Modulos(){
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("fetching de módulos !!");
        dispatch(fetchModulos());
        // hacer aquí la llamada para fetching de módulos
    }, [dispatch]);

    const classes = useStyles();
    const moduloSeleccionado = useSelector(store => store.modulos.moduloSeleccionado);

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={moduloSeleccionado.nombre?6:12}>
                    <Card className={classes.card}>
                        <CardHeader title={"Módulos Activos"}/>
                        <CardContent>
                            <TablaModulos />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} hidden={moduloSeleccionado.nombre?false:true}>
                    <Card className={classes.card}> 
                        <CardHeader title={moduloSeleccionado.nombre?moduloSeleccionado.nombre:''} action={
                            <IconButton onClick={() => dispatch(mostrarInstancias({}))}>
                                <Close />
                            </IconButton>
                        }>
                        </CardHeader>
                        <CardContent>
                            {
                                moduloSeleccionado==={}
                                    ?<div></div>
                                    :<TablaCursos idModulo={moduloSeleccionado.id} nombreModulo={moduloSeleccionado.nombre}/>
                            }
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>
    );
}
