import React, { useEffect } from 'react';

import { Table } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchCursosPorIdModulo} from '../cursosDuck';

import ListaCursos from './ListaCursos';
import FormularioCurso from "./botones-dialogos/FormularioCurso";


export default function TablaCursos(props){
    const { idModulo } = props;
    const { nombreModulo } = props;

    const listadoCursos  = useSelector(store => store.cursos.listadoCursos);

    const dispatch = useDispatch();

    useEffect(()=>{
        // hacer aquí el fetching de los cursos
        console.log("Fechign para este id: " + idModulo);
        dispatch(fetchCursosPorIdModulo(idModulo));
        
    }, [idModulo, dispatch]);

    if(idModulo==null)
        return null;

    return (
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Semestre</Table.HeaderCell>
                        <Table.HeaderCell>Profesor(es)</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        listadoCursos.map((curso) => <ListaCursos key={curso.id} curso={curso} nombreModulo = {nombreModulo} idModulo={idModulo}/>)
                    }
                </Table.Body>
            </Table>
            <FormularioCurso esModoEditar={false} cursoParaEditar={{}} nombreModulo={nombreModulo} idModulo={idModulo} />
        </div>
    )

}
