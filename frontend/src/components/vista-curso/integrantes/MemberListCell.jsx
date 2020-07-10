import React from 'react';
import {useDispatch} from 'react-redux'

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Material | Estilos
import { Switch } from '@material-ui/core'
import { disableMember, enableMember, fetchMembers} from './membersDucks';

export default function GroupCell(props) {
    const {member} = props;

    const dispatch = useDispatch();

    const handleActive = e => {
        if (e.currentTarget.attributes['disponible'].value === "1"){
            dispatch(disableMember({email: e.currentTarget.attributes['email'].value, course_id: member.course_id}))
        }
        else{
            dispatch(enableMember({email: e.currentTarget.attributes['email'].value, course_id: member.course_id}))
        }
        dispatch(fetchMembers(member.course_id))
    }

    return (
        <Table.Row>
            <Table.Cell>{member.first_name}</Table.Cell>
            <Table.Cell textAlign = 'center'>{member.last_name}</Table.Cell>
            <Table.Cell textAlign = 'center'>{member.type}</Table.Cell>
             <Table.Cell textAlign = 'center'>{member.user_email}</Table.Cell>
             <Table.Cell textAlign = 'center'>
                <Switch 
                    key = {member.id + "s"}
                    checked = {member.active}
                    onClick = {handleActive}
                    name = "disable" 
                    email = {member.user_email}
                    disponible = {member.active.toString()}
                />
             </Table.Cell>
        </Table.Row>
    )
}