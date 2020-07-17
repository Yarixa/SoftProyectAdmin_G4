import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMembers } from './membersDucks';
import MemberListCell from './MemberListCell';
import AddMember from './boton-acciones/AddMember';
import MassiveAdd from '../../massive-add/MassiveAdd';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


export default function CurseGroup(props) {
    
    const {idCurso} = props;
    const dispatch = useDispatch();
    const [carga, setCarga] = React.useState(false);

    useEffect(() => {
        dispatch(fetchMembers(idCurso));
    }, [carga, dispatch])

    const toggleCarga = (newValue) => {
        setCarga(newValue);
    }

    const courseMemberList = useSelector(store => store.courseMembers.members);

    return(
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Apellido</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Tipo</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Correo</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Acciones</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        courseMemberList.map((member) => <MemberListCell key = {member.id} member = {member}/>)
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan = '4' textAlign = 'right'>
                            <MassiveAdd idCurso = {idCurso} esVincular = {true} action = {toggleCarga} carga = {carga}/>
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            <AddMember idCurso = {idCurso}/>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
