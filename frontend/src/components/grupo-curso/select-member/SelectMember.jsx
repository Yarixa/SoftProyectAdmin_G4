import React from 'react';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Material-ui
import Checkbox from '@material-ui/core/Checkbox';

export default function SelectMember(props){
    
    return(
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Apellido</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Correo</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Seleccionar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Nombre1</Table.Cell>
                        <Table.Cell textAlign="center">Apellido1</Table.Cell>
                        <Table.Cell textAlign="center">Correo1</Table.Cell>
                        <Table.Cell textAlign="center"><Checkbox color="primary"/></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}