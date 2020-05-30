import React from 'react';

import { Table } from 'semantic-ui-react';
import { useSelector } from 'react-redux';


import FilaTabla from './FilaTabla';
import FormularioModulo from "./botones-dialogos/FormularioModulo";

export default function TablaModulos(){
    const modulos = useSelector(store => store.listaModulos.modulos);

    return (
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre módulo</Table.HeaderCell>
                        <Table.HeaderCell>Semestre</Table.HeaderCell>
                        <Table.HeaderCell>Profesor(es)</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        modulos.map((modulo) => <FilaTabla key={modulo.id} modulo={modulo}/>)
                    }
                </Table.Body>
            </Table>
            <FormularioModulo esModoEditar={false} moduloParaEditar={{}} />
        </div>
    )

}
