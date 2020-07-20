import React, { useEffect } from 'react';
import CardHeader from "@material-ui/core/CardHeader";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';


import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector, useDispatch } from 'react-redux';


import FilaTabla from './FilaTabla';
import FormularioProyecto from "./botones-dialogos/FormularioProyecto";
import {fetchProyectos} from "./proyectosDuck";


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




export default function TablaProyectos(props){
    const { idCurso } = props; 
    const {needsBack} = props;
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(()=>{
        console.log("fetching proyectos !!");
        dispatch(fetchProyectos());
    }, [dispatch])

    const listadoProyectos = useSelector(store => store.proyectos.listadoProyectos);

    return (
        <div>
            <Card className={classes.card}> 
                <CardHeader 
                title={'Listado Proyectos'} 
                action={
                    !needsBack
                    ?<div/>
                    :<IconButton component={Link} to={'/curso/'+idCurso+'/home'}>
                        <ArrowBackIcon/>
                    </IconButton>
                }></CardHeader>
                <CardContent>
                    <TableContainer>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre proyecto</TableCell>
                                    <TableCell>Descripción</TableCell>
                                    <TableCell>Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                listadoProyectos.map((proyecto) => <FilaTabla key={ proyecto.id } proyecto={ proyecto } idCurso={ idCurso }/>)                                       
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <FormularioProyecto idCurso = { idCurso } esModoEditar={ false } proyectoParaEditar={{}} />
                </CardContent>
            </Card>
        </div>
    )

}
