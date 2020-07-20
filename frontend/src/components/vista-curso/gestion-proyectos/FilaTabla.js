import React from 'react';
import { Link } from "react-router-dom";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import EliminarProyecto from './botones-dialogos/EliminarProyecto';
import FormularioProyecto from "./botones-dialogos/FormularioProyecto";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    row: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    button: {
        padding: '12px'
    }
}));

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export default function FilaTabla(props) {
    //    const dispatch = useDispatch();
    const { proyecto } = props;
    const { idCurso } = props;
    const { key } = props;
    const classes = useStyles();

    return (
        <StyledTableRow>
            <StyledTableCell component={Link} to={"/curso/"+idCurso+"/proyecto/"+proyecto.id}>{proyecto.nombre}</StyledTableCell>
            <StyledTableCell component={Link} to={"/curso/"+idCurso+"/proyecto/"+proyecto.id}>{proyecto.descripcion}</StyledTableCell>
            <StyledTableCell>
                <div className={classes.row}>
                    <FormularioProyecto esModoEditar={true} proyectoParaEditar={proyecto} />
                    <EliminarProyecto id={proyecto.id} />
                </div>
            </StyledTableCell>
        </StyledTableRow>
    )
}

