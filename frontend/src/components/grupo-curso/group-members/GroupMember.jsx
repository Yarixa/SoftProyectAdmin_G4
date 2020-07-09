import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MemberCell from './MemberCell';
import AgregarMiembro from './boton-miembros/AgregarMiembro';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Material | Estilos
import { IconButton } from '@material-ui/core';
import { fetchIntegrantes } from '../groupMemberDucks';

export default function GroupMember(props) {
    const dispatch = useDispatch();
    const { groupID } = props;

    useEffect(()=>{
        dispatch(fetchIntegrantes());
        // hacer aquí el fetching de los integrantes
    },[dispatch]);
    const MemberList = useSelector(store => store.members.members);

    return (
        <div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Apellido</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Rol</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Acciones</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        MemberList.map((member) => <MemberCell key = {member.id} member = {member}/>)
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan = '4' textAlign = 'right'>
                            <AgregarMiembro />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
