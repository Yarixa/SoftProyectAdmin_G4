import axios from "axios";

// Constantes
const dataInicial = {
    members: [{
        id: "1",
        firstName: "Francisco Javier",
        lastName: "Alvarez Aspee",
        groupRole: "Programador",
        teamid: "1"
    },
    {
        id: "2",
        firstName: "Matías",
        lastName: "Escobar",
        groupRole: "Jefe de Proyecto",
        teamid: "1"
    },
    {
        id: "3",
        firstName: "Francisco Javier",
        lastName: "Alvarez Aspee",
        groupRole: "Programador",
        teamid: "1"
    }
    ]
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
            return {...state}
        case EDIT_MEMBER:
            return {}
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
    // RUTA BACK
    dispatch({
        type: ADD_MEMBER,
        payload: integrante
    })
}

export const editarIntegrante = (integrante) => async dispatch => {
    // RUTA BACK
    dispatch({
        type: EDIT_MEMBER,
        payload: integrante
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