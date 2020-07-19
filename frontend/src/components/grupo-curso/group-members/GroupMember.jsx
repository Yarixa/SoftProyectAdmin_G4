import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MemberCell from './MemberCell';
import AgregarMiembro from './boton-miembros/AgregarMiembro';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Material | Estilos
import { fetchIntegrantes } from '../groupMemberDucks';

export default function GroupMember(props) {
    const dispatch = useDispatch();
    const {groupID} = props;
    const {idCurso} = props;

    useEffect(()=>{
        console.log("member",groupID);
        dispatch(fetchIntegrantes(groupID));
        // hacer aquí el fetching de los integrantes
    },[groupID, dispatch]);
    
    const GroupMemberList = useSelector(store => store.members.members);

    return (
        <div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Apellido</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Rol</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Editar</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Eliminar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        GroupMemberList.map((member) => <MemberCell key = {member.id} member = {member}/>)
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan = '5' textAlign = 'right'>
                            <AgregarMiembro idGroup = {groupID} idCurso = {idCurso} esEditar = {false}/>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
