import React from 'react';
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


    return(

        <div>
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
        </div>
    );
}