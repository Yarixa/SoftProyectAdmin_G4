import React from 'react';
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { makeStyles, CardHeader, Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card'
import CardContent  from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import Paper from "@material-ui/core/Paper";

const estilo = makeStyles((theme)=>({
    root :{
        flexGrow:1
    },
    paper: {
        padding:theme.spacing(2),
        color:theme.palette.text.secondary
    },
}));

export default function VistaDisenio(props){
    const classes = estilo();
    const {idProyecto} = props;

    return (

        
        <div>
            <Container fixed className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Card>
                        <CardHeader title="Documento de Diseño"/>
                        
                    <CardContent>
                        <h5>Deberia ir la imagen para visualizar</h5>
                    </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                   
                        <label htmlFor="container-button-file">
                        <Button variant="contained" color="primary" component="span">
                            Subir diseño 
                        </Button>
                        </label>
                        <input accept="image/*" id="icon-button-file" type="file"/>
             
                </Grid>
            </Grid>
            <Grid item xs>
                <CKEditor 
                        editor = {ClassicEditor}
                        data = "<p>Ingresar Descripcion del documento</p>"
                        
    
                    />
            </Grid>

            <Grid>
                <Grid item xs={12}>
                    <Button 
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<SaveIcon />}>
                        Guardar Documento
                    </Button>
                </Grid>
            </Grid>
        </Container>
        </div>
    );
}