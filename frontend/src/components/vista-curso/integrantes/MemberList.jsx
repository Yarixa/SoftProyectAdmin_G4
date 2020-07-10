import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMembers } from './membersDucks';
import MemberListCell from './MemberListCell';
import AddMember from './boton-acciones/AddMember';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function CurseGroup(props) {
    const {idCurso} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMembers(idCurso));
    }, [dispatch])

    const memberList = useSelector(store => store.courseMembers.members);

    return(
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Apellido</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Tipo</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Grupo</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Rol</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Correo</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Acciones</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        memberList.map((member) => <MemberListCell key = {member.id} member = {member}/>)
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan = '7' textAlign = 'right'>
                            <AddMember idCurso = {idCurso}/>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
