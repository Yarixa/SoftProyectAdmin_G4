import React from 'react';
import { makeStyles, CardHeader } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card'
import CardContent  from "@material-ui/core/CardContent";
import Grid from '@material-ui/core/Grid'

export default function DocumentDesign(){

    const designNombre = "";
    return (
        <div>
            <h2>DOCUMENTO DE DISEÑO</h2>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h2>Imagen</h2>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h2>Descipcion</h2>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h3>Nombre</h3>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="container" color="primary" disableElevation>
                        Guardar
                    </Button>
                    
                </Grid>
            </Grid>
        </div>

    );
}