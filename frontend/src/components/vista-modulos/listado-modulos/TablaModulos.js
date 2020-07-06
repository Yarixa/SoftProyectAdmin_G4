import React from 'react';

import { Table } from 'semantic-ui-react';
import { useSelector } from 'react-redux';


import FilaTabla from './FilaTabla';
import FormularioModulo from "./botones-dialogos/FormularioModulo";

export default function TablaModulos(){
    const listaModulos = useSelector(store => store.modulos.listadoModulos);

    return (
        <div>
            <Table striped selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre módulo</Table.HeaderCell>
                        <Table.HeaderCell>Deartamento</Table.HeaderCell>
                        <Table.HeaderCell>Número de cursos</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        listaModulos.map((modulo) => <FilaTabla key={ modulo.id } modulo={ modulo }/>)
                    }
                </Table.Body>
            </Table>
            <FormularioModulo esModoEditar={ false } moduloParaEditar={{}} />
        </div>
    )

}
