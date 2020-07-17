import React, { useEffect } from 'react';
import CardHeader from "@material-ui/core/CardHeader";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';


import { Table } from 'semantic-ui-react';
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
            
            <Table striped selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre proyecto</Table.HeaderCell>
                        <Table.HeaderCell>Descripción</Table.HeaderCell>
                        <Table.HeaderCell>Acciones</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        listadoProyectos.map((proyecto) => <FilaTabla key={ proyecto.id } proyecto={ proyecto }/>)
                    }
                </Table.Body>
            </Table>
            <FormularioProyecto idCurso = { idCurso } esModoEditar={ false } proyectoParaEditar={{}} />
            </Card>
        </div>
    )

}
