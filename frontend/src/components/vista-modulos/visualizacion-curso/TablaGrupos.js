import React from 'react';

import { Table } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import ListaGrupos from './ListaGrupos';

export default function TablaGrupos(){
    const grupos = useSelector(store => store.ListaGrupos.grupos);
    return (
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre del grupo</Table.HeaderCell>
                        <Table.HeaderCell>Jefe de grupo</Table.HeaderCell>
                        <Table.HeaderCell>#Integrantes</Table.HeaderCell>
                        <Table.HeaderCell>Proyecto</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        grupos.map((grupo) => <ListaGrupos key={grupo.id} curso={grupo}/>)
                    }
                </Table.Body>
            </Table>
         </div>
    )

}