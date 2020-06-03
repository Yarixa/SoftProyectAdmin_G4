import React, { useEffect } from 'react';

import { Table } from 'semantic-ui-react';
import { useSelector } from 'react-redux';


import ListaCursos from './ListaCursos';
import FormularioCurso from "./botones-dialogos/FormularioCurso";

export default function TablaCursos(props){
    const { idModulo } = props;

    useEffect(()=>{
        // hacer aquí el fetching de los cursos
        console.log("Fechign para este id: " + idModulo);
    });

    const cursos = useSelector(store => store.listaCursos.cursos);

    if(idModulo==null)
        return null;

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
                        cursos.map((curso) => <ListaCursos key={curso.id} curso={curso}/>)
                    }
                </Table.Body>
            </Table>
            <FormularioCurso esModoEditar={false} cursoParaEditar={{}} />
        </div>
    )

}
