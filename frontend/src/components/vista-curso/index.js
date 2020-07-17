import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import BotonAgregar from "./visualizacion-curso/BotonAgregar";
import BotonGestionar from "./visualizacion-curso/BotonGestionar";
//import Grupos from '../grupo-curso/Grupos';
import Members from './integrantes/Members';
//import TablaProyectos from './gestion-proyectos'; 

const useStyles = makeStyles({
    cardSm: {
        margin: "calc(8%/8)",
        width: "23%",
        boxSizing: "border-box"
    },
    tarjetaGrupo: {
        margin: "1em",
        width: '100%',
        height: '60%',
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

export default function Curso(props) {
    const classes = useStyles();
    const { idCurso } = props;

    const [cantGrupos, setCantGrupos] = useState(0);
    const [cantProyectos, setCantProyectos] = useState(0);
    const [cantIntegrantes, setCantIntegrantes] = useState(0);

    useEffect(() => { }, [cantGrupos, cantProyectos, cantIntegrantes]);

    return (
        <Grid container spacing={4}>
            <CardSm titulo={"Grupos"} idCurso={idCurso} subseccion={'grupos'} >
                <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">{cantGrupos}</Typography>
            </CardSm>

            <CardSm titulo={"Proyectos"} idCurso={idCurso} subseccion={'proyectos'} >
                <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">{cantProyectos}</Typography>
            </CardSm>

            <CardSm titulo={"Integrantes"} idCurso={idCurso} subseccion={'integrantes'} >
                <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">{cantIntegrantes}</Typography>
            </CardSm>

            <CardSm titulo={"Ayudante"} idCurso={idCurso} subseccion={'ayudante'} >
                <Typography className={classes.pos} component="h2">Andres Andrade Norambuena</Typography>
                <Typography className={classes.pos} color="textSecondary" component="h2">Ayudantías Lunes Bloque 2 y 3</Typography>
            </CardSm>

            <div className={classes.tarjetaGrupo}>
                <Members idCurso={idCurso} needsBack={false}/>
            </div>
        </Grid>


        //<div>
        //    <div><h1 align='center'>Dashboard</h1></div>
        //    <div>
        //      <TablaProyectos idCurso={ idCurso }/>
        //     </div>
        //     <br></br>
        //     <div>
        //         <Members idCurso = {idCurso} />
        //     </div>
        //     <br></br>
        //     <div>
        //         <Grupos idCurso = {idCurso}/>
        //     </div>
        // </div> 
    );
}

function CardSm(props) {
    const classes = useStyles();
    const { titulo } = props;
    const { idCurso } = props;
    const { subseccion } = props;

    return (
        <Card className={classes.cardSm}>
            <CardContent>
                <BotonAgregar idCurso={idCurso} subseccion={subseccion} />
                <Typography className={classes.titulo} color="textSecondary" gutterBottom>
                    {titulo}
                </Typography>
                {props.children}
            </CardContent>
            <CardActions classes={{ root: classes.centrado }}>
                <BotonGestionar idCurso={idCurso} subseccion={subseccion} />
            </CardActions>
        </Card>
    );
}