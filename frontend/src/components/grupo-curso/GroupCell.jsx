import React from 'react';
import AgregarGrupo from './boton-grupos/AgregarGrupo';
import { useDispatch } from 'react-redux';
import { mostrarGrupos, disableTeam, enableTeam, fetchGrupos } from './groupDucks';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Material | Estilos
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton } from '@material-ui/core';
import { Switch } from '@material-ui/core';

export default function GroupCell(props) {
    const dispatch = useDispatch();
    const {group} = props;
    const {idCurso} = props;

    const handleActive = e =>{
        if (group.active){
            dispatch(disableTeam(group.id))
        }
        else{
            dispatch(enableTeam(group.id))
        }
        dispatch(fetchGrupos(idCurso))
    }

    return (
        <Table.Row>
            <Table.Cell>{group.name}</Table.Cell>
            <Table.Cell textAlign = 'center'>{group.boss}</Table.Cell>
            <Table.Cell textAlign = 'center'>{group.members}</Table.Cell>
            <Table.Cell textAlign = 'center'><IconButton color = 'primary'><AgregarGrupo esEditar = {true} group = {group} idCurso = {idCurso}/></IconButton></Table.Cell>
            <Table.Cell textAlign = 'center'>
                <Switch 
                    key = {group.id + "s"}
                    checked = {group.active?true:false}
                    onClick = {handleActive}
                    name = "disable"
                />
            </Table.Cell>
            <Table.Cell textAlign = 'center'><IconButton onClick={()=>dispatch(mostrarGrupos(group))}><ArrowForwardIosIcon /></IconButton></Table.Cell>
        </Table.Row>
    )
}