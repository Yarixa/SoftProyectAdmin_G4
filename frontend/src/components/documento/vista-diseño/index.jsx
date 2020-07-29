import React from 'react';
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CardHeader, Container, Grid } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import { useDispatch, useSelector } from 'react-redux';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card'
import CardContent  from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";

const estilo = makeStyles((theme)=>({
    root :{
        flexGrow:1
    },
    paper: {
        padding:theme.spacing(2),
        color:theme.palette.text.secondary
    },
}));

function getModalStyle(){
    const top = 50;
    const left = 50 ;

    return {
        top : '${top}%',
        left: '${left}%',
        transform : 'translate(-${top}%,-${left}%)'
    };
}


export default function VistaDisenio(props){

        
    //this.state = {image:null};
   // this.onImageChange = this.onImageChange.bind(this);
    const state = {image:null}


    const onImageChange = event=>{
        if(event.target.files && event.target.files[0]){
            let img  = event.target.files[0];
           state.image = img;
        
        }
    };


    
    const [open, setOpen] = React.useState(false);

    const [modalStyle]=React.useState(getModalStyle);

    const handleOpen = ()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false)
    }

    const classes = estilo();
    const {idProyecto} = props;

    
    const body=(
        <div style={modalStyle}>
            <h2>Modal</h2>
            <p>
                Esto es una prueba de modal
            </p>
        </div>
    );

    return (

        
        <div>
                 <Container fixed className={classes.paper}>
            <Grid container spacing={9}>
                <Grid item xs>
                    <Card>
                        <CardHeader title="Documento de Diseño"/>
                        
                    <CardContent>
                        <img src={state.image} />
                    </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} container direction="column" spacing={1}>
                   <Grid item xs>
                       <input type="file" nmae="Imagen" onChange={onImageChange}/>
                        <Button variant="contained" color="primary" component="span" size="large" onClick={handleOpen}> 
                            Subir diseño 
                        </Button>
                   </Grid>
                   <Grid item xs>
                   <Button variant="contained" color="primary" size="large" startIcon={<SaveIcon />}>
                            Guardar Documento
                        </Button>
                   </Grid>
                </Grid>
            </Grid>
            <Grid item xs>
                <CKEditor 
                        editor = {ClassicEditor}
                        data = "<p>Ingresar Descripcion del documento</p>"
                    />
            </Grid>
        </Container>
        
        <Modal
            open={open}
            onClose={handleClose}
            >
            {body}
        </Modal>
        </div>
    );
}