import React from 'react';
import {Link, useParams} from "react-router-dom";
import MemberCell from './MemberCell';
import AgregarMiembro from './boton-miembros/AgregarMiembro';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Material | Estilos
import { IconButton } from '@material-ui/core';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

export default function GroupMember(props) {
    
    let {groupID} = useParams();
    const MemberList = [
        {
            id: "1",
            firstName: "Francisco Javier",
            lastName: "Alvarez Aspee",
            groupRole: "Programador"
        },
        {
            id: "2",
            firstName: "Yarixa",
            lastName: "Galvez",
            groupRole: "Programador"
        },
        {
            id: "3",
            firstName: "Matias",
            lastName: "Escobar",
            groupRole: "Jefe de Proyecto"
        },
    ];

    return (
        <div>
            <IconButton component= {Link} to="/grupo" >
                <KeyboardReturnIcon/> Regresar
            </IconButton>
            <h1 align = 'center'>Miembros de {groupID}</h1>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Apellido</Table.HeaderCell>
                        <Table.HeaderCell textAling = 'center'>Rol</Table.HeaderCell>
                        <Table.HeaderCell textAling = 'center'>Acciones</Table.HeaderCell>
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
