import React from 'react';
import { Table } from 'semantic-ui-react';
import EliminarCurso from './botones-dialogos/EliminarModulo';
import FormularioModulo from "./botones-dialogos/FormularioModulo";
import { makeStyles } from "@material-ui/core/styles";

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
    const{ modulo } = props;
    const classes = useStyles();

    return(
        <Table.Row>
            <Table.Cell>{modulo.nombre}</Table.Cell>
            <Table.Cell>{modulo.anioSemestre}</Table.Cell>
            <Table.Cell>{modulo.profesor}</Table.Cell>
            <Table.Cell>
                <div className={classes.row} >
                    <FormularioModulo esModoEditar={true} moduloParaEditar={modulo}/>
                    <EliminarCurso id={modulo.id}/>
                </div>
            </Table.Cell>
        </Table.Row>
    )
}

