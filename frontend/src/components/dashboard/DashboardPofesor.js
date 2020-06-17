import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from "@material-ui/core/Chip";


const useStyles = makeStyles((theme) => ({
    root: {
        margin: "1em",
        minWidth: "250px",
        boxSizing: "border-box"

    },
    paper: {
        float: "right",
        position: "relative",
        textAlign: 'center',
        color: 'white',
        whiteSpace: 'nowrap',
        background: '#007EDC',
        textTransform: 'none',
        borderRadius: 12,
        border: 3,
        height: 18,
        fontSize: 9,
    },
    tarjetaEstadistica:{
        margin: "1em",
        minWidth: "250px",
        maxWidth: 50,
    },
    bullet: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '12px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,


    },
    pos: {
        marginBottom: 5,
        textAlign: 'center',
    },

}));


export default function DashboardProfesor() {
    const classes = useStyles();

    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Grid container spacing={4}>
                <Card className={classes.root}>
                    <CardContent>
                        <Chip className={classes.paper} color="primary" label="2020-1"/>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Mis Cursos</Typography>
                        <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">5</Typography>
                    </CardContent>
                </Card>


                <Card className={classes.root}>
                    <CardContent>
                        <Chip className={classes.paper} color="primary" label="2020-1"/>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Proyectos</Typography>
                        <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">10</Typography>
                    </CardContent>
                </Card>


                <Card className={classes.root}>
                    <CardContent>
                        <Chip className={classes.paper} color="primary" label="2020-1"/>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Proyectos Pendientes</Typography>
                        <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">2</Typography>
                    </CardContent>
                </Card>

                <Card className={classes.root}>
                    <CardContent>
                        <Chip className={classes.paper} color="primary" label="2020-1"/>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Proyectos Finalizados</Typography>
                        <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">8</Typography>
                    </CardContent>
                </Card>

            </Grid>

            <Grid container spacing={4}>

                <Card className={classes.tarjetaEstadistica}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Resumen Semanal</Typography>

                    </CardContent>
                </Card>

                <Card className={classes.tarjetaEstadistica}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Estadísticas</Typography>
                        <div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>

        </div>
    );
}