// Constantes
const dataInicial = {
    groups: []
}

// Tipos
const ADD_GROUP = 'ADD_GROUP';
const EDIT_GROUP = 'EDIT_GROUP';
const GET_GROUP = 'GET_GROUP';

// Reducers
export default function groupReducers(state = dataInicial, action){
    switch(action.type){
        case ADD_GROUP:
            return {...state, groups: state.groups.concat(action.payload)}
        case EDIT_GROUP:
            return {}
        case GET_GROUP:
            return {...state, groups: state.groups}
        default:
            return state
    }
}

// Acciones
export const agregarGrupo = (grupo) => async dispatch => {
    // RUTA BACK
    dispatch({
        type: ADD_GROUP,
        payload: grupo
    })
}

export const editarGrupo = (grupo) => async dispatch => {
    // RUTA BACK
    dispatch({
        type: EDIT_GROUP
    })
}

export const getGrupos = () => async dispatch => {
    // RUTA BACK
    dispatch({
        type: GET_GROUP
    })
}