import React from 'react';
import { Table } from 'semantic-ui-react';
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

export default function ListaGrupos(props) {
    const {grupo} = props;
    const classes = useStyles();

    return (
        <Table.Row>
            <Table.Cell>{grupo.nombre}</Table.Cell>

        </Table.Row>

    )
}