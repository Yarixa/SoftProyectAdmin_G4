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
            <Table.Cell>{member.user_email}</Table.Cell>
            <Table.Cell>{member.lastName}</Table.Cell>
            <Table.Cell>{member.type}</Table.Cell>
            <Table.Cell><IconButton><DeleteIcon/></IconButton></Table.Cell>
        </Table.Row>
    )
}