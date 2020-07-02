// Constantes
const dataInicial = {
    groups: [{
        id: "1",
        name: "Crudders",
        members: "6",
        boss: "Matías Escobar"
    },
    {
        id: "2",
        name: "AC/DC",
        members: "6",
        boss: "Rolando Granada"
    },
    {
        id: "3",
        name: "OMLUL",
        members: "6",
        boss: "Roberto Ramones"
    },
    {
        id: "4",
        name: "Traxer",
        members: "6",
        boss: "Baby Boss"
    }],
    selectedGroup: {}
}

const apiURL = process.env.REACT_APP_API_URL;

// Tipos
const ADD_GROUP = 'ADD_GROUP';
const EDIT_GROUP = 'EDIT_GROUP';
const GET_GROUP = 'GET_GROUP';
const FETCH_GROUP = 'FETCH_GROUP';
const SHOW_GROUPS = 'SHOW_GROUPS';

// Reducers
export default function groupReducers(state = dataInicial, action){
    switch(action.type){
        case ADD_GROUP:
            return {...state, groups: state.groups.concat(action.payload)}
        case EDIT_GROUP:
            return {}
        case GET_GROUP:
            return {...state, groups: state.groups}
        case SHOW_GROUPS: return {
            ...state,
            selectedGroup: action.payload
        };
        case FETCH_GROUP: return {
            ...state,
            groups: action.payload
        };
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
        type: EDIT_GROUP,
        payload: grupo
    })
}

export const mostrarGrupos = (grupo) => async (dispatch, getState) => {
    dispatch({
        type: SHOW_GROUPS,
        payload: grupo,
    });
}

export const fetchGrupos = () => async (dispatch, getState) => {
    try{
        //Conectar
        dispatch({
            type: FETCH_GROUP,
            payload: dataInicial.groups
        })
    }catch(error){
        console.log(error);
    }
}