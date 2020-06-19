import React from 'react';
import AgregarGrupo from './boton-grupos/AgregarGrupo';
import GroupCell from './GroupCell';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function CurseGroup(props) {
    const {curso} = props;
    const GroupList = [{
            id: "1",
            name: "Crudders",
            members: "6"
        },
        {
            id: "2",
            name: "AC/DC",
            members: "6"},
        {
            id: "3",
            name: "OMLUL",
            members: "6"},
        {
            id: "4",
            name: "Traxer",
            members: "6"
        }];

    return(
        <div>
            <h1 align = 'center'>Grupos del Curso</h1>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Integrantes</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Edit</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Gestion Integrantes</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Eliminar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        GroupList.map((group) => <GroupCell key = {group.id} group = {group}/>)
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan = '5' textAlign = 'right'>
                            <AgregarGrupo esEditar = {false}/>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
