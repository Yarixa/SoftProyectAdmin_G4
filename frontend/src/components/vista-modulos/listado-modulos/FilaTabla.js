import React from 'react';
import { Table } from 'semantic-ui-react';
import EliminarCurso from './botones-dialogos/EliminarModulo';
import FormularioModulo from "./botones-dialogos/FormularioModulo";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux';
import { mostrarInstancias } from "../modulosDuck";

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
    const dispatch = useDispatch();
    const{ modulo } = props;
    const classes = useStyles();

    return(
        <Table.Row onClick={()=>dispatch(mostrarInstancias(modulo.id))}>
            <Table.Cell>{modulo.nombre}</Table.Cell>
            <Table.Cell>{modulo.id}</Table.Cell>
            <Table.Cell>
                <div className={classes.row}>
                    <FormularioModulo esModoEditar={true} moduloParaEditar={modulo}/>
                    <EliminarCurso id={modulo.id}/>
                </div>
            </Table.Cell>
        </Table.Row>
    )
}

