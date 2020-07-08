import React from 'react';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Material | Estilos
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

export default function GroupCell(props) {
    const {member} = props;

    return (
        <Table.Row>
            <Table.Cell>{member.first_name}</Table.Cell>
            <Table.Cell textAlign = 'center'>{member.last_name}</Table.Cell>
            <Table.Cell textAlign = 'center'>{member.role}</Table.Cell>
             <Table.Cell textAlign = 'center'>{member.group}</Table.Cell>
             <Table.Cell textAlign = 'center'>{member.group_role}</Table.Cell>
             <Table.Cell textAlign = 'center'>{member.email}</Table.Cell>
             <Table.Cell textAlign = 'center'>...Acciones...</Table.Cell>
        </Table.Row>
    )
}