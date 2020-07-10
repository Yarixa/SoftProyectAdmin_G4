import React, { useEffect } from 'react';

import { Table } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';


import FilaTabla from './FilaTabla';
import FormularioProyecto from "./botones-dialogos/FormularioProyecto";
import {fetchProyectos} from "./proyectosDuck";

export default function TablaProyectos(props){
    const { idCurso } = props; 
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log("fetching proyectos !!");
        dispatch(fetchProyectos());
    }, [dispatch])

    const listadoProyectos = useSelector(store => store.proyectos.listadoProyectos);

    return (
        <div>
            <Table striped selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre proyecto</Table.HeaderCell>
                        <Table.HeaderCell>Descripción</Table.HeaderCell>
                        <Table.HeaderCell>Acciones</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        listadoProyectos.map((proyecto) => <FilaTabla key={ proyecto.id } proyecto={ proyecto }/>)
                    }
                </Table.Body>
            </Table>
            <FormularioProyecto idCurso = { idCurso } esModoEditar={ false } proyectoParaEditar={{}} />
        </div>
    )

}
