import React from 'react';
import AgregarMiembro from './boton-miembros/AgregarMiembro';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Material | Estilos
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

export default function GroupCell(props) {
    const {member} = props;

    return (
        <Table.Row key = {member.id + "T"}>
            <Table.Cell key = {member.id + "n"}>{member.first_name}</Table.Cell>
            <Table.Cell key = {member.id + "a"}>{member.last_name}</Table.Cell>
            <Table.Cell key = {member.id + "t"}>{member.type}</Table.Cell>
            <Table.Cell key = {member.id + "e"} textAlign = 'center'><AgregarMiembro esEditar = {true} member = {member}/></Table.Cell>
            <Table.Cell key = {member.id + "d"} textAlign = 'center'><IconButton><DeleteIcon color='secondary'/></IconButton></Table.Cell>
        </Table.Row>
    )
}