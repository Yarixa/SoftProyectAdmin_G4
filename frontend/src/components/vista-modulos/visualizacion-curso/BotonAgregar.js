import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({

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

export default function BotonAgregar(){
    const classes = useStyles();
    return (
        <div>
            <Button className={classes.botonAgregar}>Agregar</Button>{/* Agregar acción de redirección */}
        </div>
    )

}