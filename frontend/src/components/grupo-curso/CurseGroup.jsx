import React from 'react';
import AgregarGrupo from './boton-grupos/AgregarGrupo';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function CurseGroup(props) {
    const {curso} = props;
    const GroupList;

    return(
        <div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Integrantes</Table.HeaderCell>
                        <Table.HeaderCell textAling = 'center'>Edit</Table.HeaderCell>
                        <Table.HeaderCell textAling = 'center'>Eliminar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        GroupList.map((group) => <GroupCell key = {group.id} group = {group}/>)
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell>
                            <AgregarGrupo />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
