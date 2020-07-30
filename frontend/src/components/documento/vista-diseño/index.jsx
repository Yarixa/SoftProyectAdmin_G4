import React from 'react';
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CardHeader, Container, Grid } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card'
import CardContent  from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import ImageIcon from "@material-ui/icons/Image";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Snackbar from "@material-ui/core/Snackbar";

import {TransformComponent,TransformWrapper} from "react-zoom-pan-pinch";



const useStyle = makeStyles((theme)=>({
    root: {
        maxWidth:"100%",
        borderStyle:"groove"
    },
    botones : {
        position:"static",
        textAlign:"center"
    },
    margenes:{
        marginBottom:"2%"
    },
    raiz : {
        padding:"2%"
    },
    contenedorImg : {
        height:"400px",
        textAlign:"center"
    },
    imagen : {
        height:"70%",
        width:"70%",
    }

    
}))


export default function VistaDisenio(props){
    const classes = useStyle();
    const [state,setState]=React.useState({
        open:false,
        vertical:'top',
        horizontal:'right',
    });
    const {vertical,horizontal,open}=state;
    const handleClick = (newState)=>()=>{
        setState({open:true,...newState});
    }
    const handleClose =()=>{
        setState({...state,open:false});
    }

    const titulo = "Proyecto de requisito"
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if(file){
            const reader = new FileReader();
            const {current} = uploadedImage;
            current.file = file;
            reader.onload = e =>{
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
            handleClick({vertical:'top', horizontal:'right'});
        }
    };

    

    

    return (

        
        
        <div className={classes.raiz}>
            <Container fixed  className={classes.root}>
                <Grid className={classes.margenes} container spacing={9}>
                    <Grid item xs>
                        <Card>
                            <CardHeader title={titulo}>
                            
                            </CardHeader>
                            <CardContent className={classes.contenedorImg}>
                                <TransformWrapper>
                               
                                    <TransformComponent>
                                    <img className={classes.imagen} 
                                        ref={uploadedImage}
                                        
                                    />   
                                    </TransformComponent>
                                </TransformWrapper>
                                
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid className={classes.menu} item xs={3} container direction="column" spacing={1}>
                        
                        <Grid item xs direction="column" spacing={2}>
                            <div>
                            <input type="file"  accept="image/*" style={{display:"none"}} onChange={handleImageUpload} ref={imageUploader} />
                            <Button startIcon={<ImageIcon/>} variant="contained" color="primary" component="span"  onClick={()=>imageUploader.current.click()}> 
                                Subir 
                            </Button>
                                                    
                            <Button variant="contained" color="primary"  startIcon={<SaveIcon />}>
                                Guardar
                            </Button>
                            </div>
                        </Grid> 
                    </Grid>
                </Grid>
                <Grid className={classes.margenes} item xs>
                <h3>Descipción</h3>
                <CKEditor 
                        editor = {ClassicEditor}
                        data = "<p>Ingresar Descripcion del documento</p>"
                    />
                </Grid>
                
            </Container>    
            <Grid  className={classes.botones}>
                    <Button  startIcon={<AddCircleIcon/>}  size="expand" variant="contained" color="primary" >Agregar Diseño</Button>
                </Grid>   

            <Snackbar 
                anchorOrigin={{vertical,horizontal}}
                open={open}
                onClose={handleClose}
                message="Se cargo la imagen Correctamente"
                key={vertical+horizontal}
            />
        </div>
    );
}