import React from 'react';



export default function VistaCurso() {

    return (
        <div>
            <Grid container spacing={4}>
                <Card className={classes.root}>
                    <CardContent>
                        <BotonAgregar></BotonAgregar>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Grupos</Typography>
                        <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">6</Typography>
                    </CardContent>
                    <CardActions>
                        <BotonGestionar></BotonGestionar>
                    </CardActions>
                </Card>


                <Card className={classes.root}>
                    <CardContent>
                        <BotonAgregar></BotonAgregar>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Proyectos</Typography>
                        <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">2</Typography>
                    </CardContent>
                    <CardActions>
                        <BotonGestionar></BotonGestionar>
                    </CardActions>
                </Card>


                <Card className={classes.root}>
                    <CardContent>
                        <BotonAgregar></BotonAgregar>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Integrantes</Typography>
                        <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">28</Typography>
                    </CardContent>
                    <CardActions>
                        <BotonGestionar></BotonGestionar>
                    </CardActions>
                </Card>

                <Card className={classes.root}>
                    <CardContent>
                        <BotonAgregar></BotonAgregar>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Ayudante
                        </Typography>
                        <Typography className={classes.pos}  component="h2">Andres Andrade Norambuena</Typography>
                        <Typography className={classes.pos} color="textSecondary" component="h2">Ayudantías Lunes Bloque 2 y 3</Typography>
                    </CardContent>
                    <CardActions>
                        <BotonGestionar></BotonGestionar>
                    </CardActions>
                </Card>


                <Card className={classes.tarjetaGrupo}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Resumen Curso</Typography>
                        <TablaGrupos></TablaGrupos>
                    </CardContent>
                </Card>

            </Grid>

        </div>
    );
}