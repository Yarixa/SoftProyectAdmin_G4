import React from 'react';
import { Table } from 'semantic-ui-react';
import EliminarProyecto from './botones-dialogos/EliminarProyecto';
import FormularioProyecto from "./botones-dialogos/FormularioProyecto";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    row: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    button: {
        padding: '12px'
    }
}));


export default function FilaTabla(props){
//    const dispatch = useDispatch();
    const{ proyecto } = props;
    const classes = useStyles();

    return(
        <Table.Row>
            <Table.Cell onClick={()=>{}}>{proyecto.nombre}</Table.Cell>
            <Table.Cell onClick={()=>{}}>{proyecto.descripcion}</Table.Cell>
            <Table.Cell>
                <div className={classes.row}>
                    <FormularioProyecto esModoEditar={true} proyectoParaEditar={proyecto}/>
                    <EliminarProyecto id={proyecto.id} />
                </div>
            </Table.Cell>
        </Table.Row>
    )
}

