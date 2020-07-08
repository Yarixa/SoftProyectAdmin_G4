import React from 'react';
import AgregarGrupo from './boton-grupos/AgregarGrupo';
import { useDispatch } from 'react-redux';
import { mostrarGrupos } from './groupDucks';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Material | Estilos
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton } from '@material-ui/core';

export default function GroupCell(props) {
    const dispatch = useDispatch();
    const {group} = props;

    return (
        <Table.Row>
            <Table.Cell>{group.name}</Table.Cell>
            <Table.Cell textAlign = 'center'>{group.boss}</Table.Cell>
            <Table.Cell textAlign = 'center'>{group.members}</Table.Cell>
            <Table.Cell textAlign = 'center'><IconButton color = 'primary'><AgregarGrupo esEditar = {true} group = {group}/></IconButton></Table.Cell>
            <Table.Cell textAlign = 'center'><IconButton color = 'secondary'><DeleteIcon /></IconButton></Table.Cell>
            <Table.Cell textAlign = 'center'><IconButton onClick={()=>dispatch(mostrarGrupos(group))}><ArrowForwardIosIcon /></IconButton></Table.Cell>
        </Table.Row>
    )
}