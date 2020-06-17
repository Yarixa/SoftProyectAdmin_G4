import React from 'react';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function GroupCell(props) {

    const {group} = props;

    return (
        <Table.Row>
            <Table.Cell>{group.name}</Table.Cell>
            <Table.Cell>{group.members}</Table.Cell>
        </Table.Row>
    )
}