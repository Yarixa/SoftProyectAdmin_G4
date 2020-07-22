import axios from "axios";

// Constantes
const dataInicial = {
    members: []
}

const apiURL = process.env.REACT_APP_API_URL;

// Tipos
const SELECT_MEMBER = "SELECT_MEMBER";
const UNSELECT_MEMBER = "UNSELECT_MEMBER";

// Reducers
export default function selectMemberReducers(state = dataInicial, action){
    switch(action.type){
        case SELECT_MEMBER:
            return {...state, members: state.members.concat(action.payload)}
        case UNSELECT_MEMBER:
            return {...state, members: state.members.filter(member => member.email != action.payload.embail)}
        default:
            return state
    }
}

// Acciones
export const selectIntegrante = (integrante) => dispatch => {
    dispatch({
        type: SELECT_MEMBER,
        payload: integrante
    })
}

export const unselectIntegrante = (integrante) => dispatch => {
    dispatch({
        type: UNSELECT_MEMBER,
        payload: integrante
    })
}

export const getMembers = () => dispatch => {
    //BACK
    dispatch({})
}