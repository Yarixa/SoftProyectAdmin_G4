import axios from "axios";

// Constantes
const dataInicial = {
    members: []
}

const apiURL = process.env.REACT_APP_API_URL;

// Tipos
const ADD_MEMBER = 'ADD_MEMBER';
const EDIT_MEMBER = 'EDIT_MEMBER';
const GET_MEMBER = 'GET_MEMBER';
const FETCH_MEMBER = 'FETCH_MEMBER';
const SHOW_MEMBERS = 'SHOW_MEMBERS';

// Reducers
export default function memberReducers(state = dataInicial, action){
    switch(action.type){
        case ADD_MEMBER:
            return {...state, members: state.members.concat(action.payload)}
        case EDIT_MEMBER:
            return {...state, members: state.members.map(member => member.id === action.payload.id ? action.payload: member)}
        case GET_MEMBER:
            return {...state}
        case SHOW_MEMBERS: 
            return {...state}
        case FETCH_MEMBER: 
            return {...state, members: action.payload}
        default:
            return state
    }
}

// Acciones
export const agregarIntegrante = (integrante) => async dispatch => {
    const data = {
        email: integrante.email,
        course_id: integrante.course_id,
        team_id: integrante.team_id
    }
    const resp = await axios.put('http://' + apiURL + ':5000/memberlist/updateTeam/' + data.email + '/' + data.course_id, data); 
    console.log(resp)
    dispatch({
        type: ADD_MEMBER,
        payload: resp.data
    })
}

export const editarIntegrante = (data) => async dispatch => {
    // RUTA BACK
    const member = {
        active: data.member.active,
        course_id: data.member.course_id,
        disponible: data.member.disponible,
        user_email: data.member.email,
        first_name: data.member.first_name,
        id: data.member.id,
        last_name: data.member.last_name,
        team_id: data.member.team_id,
        type: data.type
    }
    console.log(member)
    const resp = await axios.put('http://' + apiURL + ':5000/memberlist/updateRole/' + member.user_email + '/' + data.course_id + '/' + data.team_id, data); 
    console.log(resp)
    dispatch({
        type: EDIT_MEMBER,
        payload: member
    })
}

export const mostrarIntegrante = (integrante) => async (dispatch, getState) => {
    dispatch({
        type: SHOW_MEMBERS,
        payload: integrante,
    });
}

export const fetchIntegrantes = (idTeam) => async (dispatch, getState) => {
    try{
        //Conectar
        const resp = await axios.get('http://' + apiURL + ':5000/memberlist/readByTeam', {params: {team_id: idTeam}})
        dispatch({
            type: FETCH_MEMBER,
            payload: resp.data
        })
    }catch(error){
        console.log(error);
    }
}