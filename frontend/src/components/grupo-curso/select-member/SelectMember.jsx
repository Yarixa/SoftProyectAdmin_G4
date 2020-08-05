import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Material-ui
import Checkbox from '@material-ui/core/Checkbox';

// Reducers
import { getTeamMembers, getCourseMembers, getProfesors } from '../selectMemberDucks';

export default function SelectMember(props){

    const {type} = props // 1: TeamMembers 2: CourseMember 3: Profesors
    const dispatch = useDispatch();

    useEffect(() => {
        switch (type){
            case "1":
                return (dispatch(getTeamMembers()))
            case "2":
                return (dispatch(getCourseMembers()))
            case "3":
                return (dispatch(getProfesors()))
            default:
                //NOTHING
        }
    }, [dispatch])

    const list = useSelector(store => store.selectMembers.members);

    return(
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Apellido</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Correo</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Seleccionar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        list.map(member => (
                            <Table.Row key = {member.id + "r"}>
                                <Table.Cell key = {member.id + "n"}>{member.first_name}</Table.Cell>
                                <Table.Cell key = {member.id + "a"} textAlign="center">{member.last_name}</Table.Cell>
                                <Table.Cell key = {member.id + "c"} textAlign="center">{member.email}</Table.Cell>
                                <Table.Cell key = {member.id + "s"} textAlign="center"><Checkbox color="primary"/></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}