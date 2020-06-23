import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        textAlign: "center",
        backgroundColor: theme.palette.common.white,
        color: "grey",
    },
    body: {
        textAlign: "center",
        color: "grey",
        fontSize: 10,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(nombre, jefeGrupo, numIntegrantes, Proyecto,) {
    return { nombre, jefeGrupo, numIntegrantes, Proyecto, };
}

const rows = [
    createData('Grupo 1', 'Jose Pérez', 3, 'ProyectoX'),
    createData('Grupo 2', 'Jose Pérez', 5, 'ProyectoX'),
    createData('Grupo 3', 'Jose Pérez', 4, 'ProyectoX'),
    createData('Grupo 4', 'Jose Pérez', 5, 'ProyectoX'),
    createData('Grupo 5', 'Jose Pérez', 6, 'ProyectoX'),
    createData('Grupo 5', 'Jose Pérez', 5, 'ProyectoX'),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function TablaGrupos() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="right">Nombre del Grupo</StyledTableCell>
                        <StyledTableCell align="right">Jefe de Grupo</StyledTableCell>
                        <StyledTableCell align="right">#Integrantes</StyledTableCell>
                        <StyledTableCell align="right">Proyecto</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.nombre}>
                            <StyledTableCell align="right">{row.nombre}</StyledTableCell>
                            <StyledTableCell align="right">{row.jefeGrupo}</StyledTableCell>
                            <StyledTableCell align="right">{row.numIntegrantes}</StyledTableCell>
                            <StyledTableCell align="right">{row.Proyecto}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}