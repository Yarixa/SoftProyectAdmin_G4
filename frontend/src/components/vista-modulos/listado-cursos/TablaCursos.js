import React from 'react';

import { Table } from 'semantic-ui-react';
import { useSelector } from 'react-redux';


import ListaCursos from './ListaCursos';
import FormularioCurso from "./botones-dialogos/FormularioCurso";

export default function TablaCursos(){
    const cursos = useSelector(store => store.listaCursos.cursos);

    return (
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre curso</Table.HeaderCell>
                        <Table.HeaderCell>Semestre</Table.HeaderCell>
                        <Table.HeaderCell>Profesor(es)</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        cursos.map((curso) => <FilaTabla key={curso.id} curso={curso}/>)
                    }
                </Table.Body>
            </Table>
            <FormularioCurso esModoEditar={false} cursoParaEditar={{}} />
        </div>
    )

}s
