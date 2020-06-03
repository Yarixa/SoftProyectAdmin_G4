import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from "@material-ui/core/styles/withStyles";


const useStyles = makeStyles({
    root: {
        margin: "1em",
        minWidth: "250px",
        boxSizing: "border-box"

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
    centrado: {
        textAlign: 'center',
    },
    botonGestionar:{
        background:'#007EDC',
        textTransform: 'none',
        borderRadius: 5,
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 20px',
        fontSize: 12,
        fontFamily: ['Arial',
        ].join(','),
        '&:hover': {
            backgroundColor: '#007EDC',
            borderColor: '#007EDC',

        },
        '&:active': {
            backgroundColor: '#007EDC',
            borderColor: '#007EDC',
        }
    },
    botonAgregar:{
        background:'#2DA64E',
        textTransform: 'none',
        borderRadius: 5,
        border: 0,
        color: 'white',
        height: 25,
        padding: '0 4px',
        float: "right",
        position: "relative",
        fontSize: 10,
        fontFamily: ['Arial',
        ].join(','),
        '&:hover': {
            backgroundColor: '#2DA64E',
            borderColor: '#2DA64E',

        },
        '&:active': {
            backgroundColor: '#2DA64E',
            borderColor: '#2DA64E',
        }
    },

});


export default function VistaCurso() {
    const classes = useStyles();

    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Grid container spacing={4}>
                    <Card className={classes.root}>

                        <CardContent>
                            <Button className={classes.botonAgregar}>Agregar</Button>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Grupos
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2"  >
                                6
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.centrado}>
                            <Button className={classes.botonGestionar}>Gestionar Grupos</Button>
                        </CardActions>
                    </Card>


                    <Card className={classes.root}>
                        <CardContent>
                            <Button className={classes.botonAgregar}>agregar</Button>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Proyectos
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2"  >
                                2
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button className={classes.botonGestionar}>Gestionar Proyectos</Button>
                        </CardActions>
                    </Card>


                <Card className={classes.root}>
                    <CardContent>
                        <Button className={classes.botonAgregar}>agregar</Button>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Integrantes
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2"  >
                            28
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className={classes.botonGestionar}>Gestionar Integrantes</Button>
                    </CardActions>
                </Card>

                <Card className={classes.root}>
                    <CardContent>
                        <Button className={classes.botonAgregar}>agregar</Button>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Ayudante
                        </Typography>
                        <Typography className={classes.pos}  component="h2"  >
                            Andres Andrade Norambuena
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary" component="h2"  >
                            Ayudantías
                            Lunes Bloque 2 y 3
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className={classes.botonGestionar}>Gestionar Ayudante</Button>
                    </CardActions>
                </Card>

            </Grid>

        </div>






    );
}