import React from 'react';
import AgregarGrupo from './boton-grupos/AgregarGrupo';
import {Link} from "react-router-dom";

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Material | Estilos
import BuildIcon from '@material-ui/icons/Build';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

export default function GroupCell(props) {

    const {group} = props;

    return (
        <Table.Row>
            <Table.Cell>{group.name}</Table.Cell>
            <Table.Cell textAlign = 'center'>{group.members}</Table.Cell>
            <Table.Cell textAlign = 'center'><IconButton color = 'primary'><AgregarGrupo esEditar = {true} group = {group}/></IconButton></Table.Cell>
            <Table.Cell textAlign = 'center'><IconButton component= {Link} to={`/grupo/miembros/${group.id}`}><BuildIcon /></IconButton></Table.Cell>
            <Table.Cell textAlign = 'center'><IconButton color = 'secondary'><DeleteIcon /></IconButton></Table.Cell>
        </Table.Row>
    )
}