import React from 'react';

import { Table } from 'semantic-ui-react';
import { useSelector } from 'react-redux';


import FilaTabla from './FilaTabla';
import FormularioRequisito from "./botones-dialogos/FormularioRequisito";

export default function TablaRequisitos(){
    const requisitos = useSelector(store => store.listaRequisitos.requisitos);

    return (
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Descripción</Table.HeaderCell>
                        <Table.HeaderCell>Fuente</Table.HeaderCell>
                        <Table.HeaderCell>Estabilidad</Table.HeaderCell>
                        <Table.HeaderCell>Tipo</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        requisitos.map((requisito) => <FilaTabla key={requisito.id} requisito={requisito}/>)
                    }
                </Table.Body>
            </Table>
            <FormularioRequisito esModoEditar={false} requisitoParaEditar={{}} />
        </div>
    )

}
