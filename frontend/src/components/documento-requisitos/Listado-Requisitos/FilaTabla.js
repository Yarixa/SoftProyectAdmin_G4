import React from 'react';
import { Table } from 'semantic-ui-react';
import EliminarRequisito from './botones-dialogos/EliminarRequisito';
import { makeStyles } from "@material-ui/core/styles";
import FormularioRequisito from "./botones-dialogos/FormularioRequisito";

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
    const{ requisito } = props;
    const classes = useStyles();

    return(
        <Table.Row>
            <Table.Cell>{requisito.rU}</Table.Cell>
            <Table.Cell>{requisito.nombre}</Table.Cell>
            <Table.Cell>{requisito.descripcion}</Table.Cell>
            <Table.Cell>{requisito.fuente}</Table.Cell>
            <Table.Cell>{requisito.estabilidad}</Table.Cell>
            <Table.Cell>{requisito.tipo}</Table.Cell>
            <Table.Cell>
                <div className={classes.row} >
                    <FormularioRequisito esModoEditar={true} requisitoParaEditar={requisito}/>
                    <EliminarRequisito id={requisito.id}/>
                </div>
            </Table.Cell>
        </Table.Row>
    )
}

