import React, {useEffect} from 'react';
import AgregarGrupo from './boton-grupos/AgregarGrupo';
import GroupCell from './GroupCell';
import { useSelector, useDispatch } from 'react-redux';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function CurseGroup(props) {
    const {idCurso} = props;
    const GroupList = useSelector(store => store.groups.groups)
    const dispatch = useDispatch();
    useEffect(() => {
        
    }, [dispatch])

    return(
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Jefe de Proyecto</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>N° Integrantes</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Editar</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Eliminar</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Gestion Integrantes</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        GroupList.map((group) => <GroupCell key = {group.id} group = {group} idCurso = {idCurso}/>)
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan = '6' textAlign = 'right'>
                            <AgregarGrupo esEditar = {false} idCurso = {idCurso}/>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
