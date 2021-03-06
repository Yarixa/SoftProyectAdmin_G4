import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const useStyles = makeStyles({

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

});

export default function BotonGestionar(props){
    const classes = useStyles();
    const { idCurso } = props;
    const { subseccion } = props;

    return (
        <Button 
        className={classes.botonGestionar} 
        component={Link} 
        to={'/curso/'+idCurso+'/'+subseccion}
        >
        Gestionar
        </Button>
    );
}