import React from 'react';

import DeshabilitarCurso from './botones-dialogos/DeshabilitarCurso';
import {Link} from "react-router-dom";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from "@material-ui/core/styles";

import FormularioCurso from "./botones-dialogos/FormularioCurso";

const useStyles = makeStyles((theme) => ({
    row: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    button: {
        padding: '12px'
    }
}));

export default function ListaCursos(props){
    const{ curso } = props;
    const { nombreModulo } = props;

    const classes = useStyles();

    return(
        <TableRow hover >
            <TableCell component={Link} to={"/curso/"+curso.id+"/home"}>{curso.anio + "-" + curso.semestre}</TableCell>
            <TableCell component={Link} to={"/curso/"+curso.id+"/home"}>{curso.profesor}</TableCell>
            <TableCell>
                <div className={classes.row} >
                    <FormularioCurso esModoEditar={true} cursoParaEditar={curso} nombreModulo = {nombreModulo}/>
                    <DeshabilitarCurso id={curso.id}/>
                </div>
            </TableCell>
        </TableRow>

    )
}
