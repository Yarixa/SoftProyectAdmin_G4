import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";

import CardHeader from "@material-ui/core/CardHeader";
import MemberList from './MemberList';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Members(props){
    const dispatch = useDispatch();

    const {idCurso} = props;

    useEffect(() => {
        // hacer aquí la llamada para fetching de grupos
    }, [dispatch]);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardHeader title={"Lista de Integrantes"}/>
                        <CardContent>
                            <MemberList idCurso = {idCurso}/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>
    );
}