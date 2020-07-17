import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TablaGrupos from "./TablaGrupos";
import BotonAgregar from "./BotonAgregar";
import BotonGestionar from "./BotonGestionar";

import Grupos from '../grupo-curso/Grupos';

const useStyles = makeStyles({
    cardSm: {
        margin: "calc(8%/8)",
        width: "23%",
        boxSizing: "border-box"
    },
    tarjetaGrupo:{
        margin: "1em",
        width: '100%',
        height: '50%',
        boxSizing: "border-box"
    },
    bullet: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '12px',
        transform: 'scale(0.8)',
    },
    titulo: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 5,
        textAlign: 'center',
    },
    centrado: {
        justifyContent: 'center'
    },

});

export default function VistaCurso(props) {
    const classes = useStyles();
    const {idCurso} = props;

    return (
        <div>
            <Grid container spacing={4}>
                <CardSm titulo={"Grupos"} gestionar={()=>{}} agregar={()=>{}}> 
                    <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">6</Typography>
                </CardSm>

                <CardSm titulo={"Proyectos"} gestionar={()=>{}} agregar={()=>{}}> 
                        <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">2</Typography>
                </CardSm>

                <CardSm titulo={"Integrantes"} gestionar={()=>{}} agregar={()=>{}}> 
                    <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">28</Typography>
                </CardSm>

                <CardSm titulo={"Ayudante"} gestionar={()=>{}} agregar={()=>{}}> 
                    <Typography className={classes.pos}  component="h2">Andres Andrade Norambuena</Typography>
                    <Typography className={classes.pos} color="textSecondary" component="h2">Ayudantías Lunes Bloque 2 y 3</Typography>
                </CardSm>

                <Card className={classes.tarjetaGrupo}>
                    <CardContent>
                        <Typography className={classes.titulo} color="textSecondary" gutterBottom>Resumen Grupos</Typography>
                        <Grupos idCurso={idCurso}/>                        
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}

function CardSm(props) {
    const classes = useStyles();
    const { titulo } = props;
    const { gestionar } = props;
    const { agregar } = props;

    return (
        <Card className={classes.cardSm}>
            <CardContent>
                <BotonAgregar action={ agregar } />
                <Typography className={classes.titulo} color="textSecondary" gutterBottom>
                    {titulo}
                </Typography>
                {props.children}
            </CardContent>
            <CardActions classes={{root: classes.centrado}}>
                <BotonGestionar action={ gestionar } />
            </CardActions>
        </Card>
    );
}

