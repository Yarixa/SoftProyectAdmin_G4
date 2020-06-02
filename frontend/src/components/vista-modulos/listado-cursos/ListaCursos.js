import React from 'react';
import { Table } from 'semantic-ui-react';
import DeshabilitarCurso from './botones-dialogos/DeshabilitarCurso';
import FormularioCurso from "./botones-dialogos/FormularioCurso";
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

export default function ListaCursos(props){
    const{ curso } = props;
    const classes = useStyles();

    return(
        <Table.Row>
            <Table.Cell>{curso.nombre}</Table.Cell>
            <Table.Cell>{curso.anioSemestre}</Table.Cell>
            <Table.Cell>{curso.profesor}</Table.Cell>
            <Table.Cell>
                <div className={classes.row} >
                    <FormularioModulo esModoEditar={true} moduloParaEditar={curso}/>
                    <EliminarCurso id={curso.id}/>
                </div>
            </Table.Cell>
        </Table.Row>

    )
}
