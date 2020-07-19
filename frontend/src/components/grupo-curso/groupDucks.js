import axios from 'axios';

// Constantes
const dataInicial = {
    groups: [],
    selectedGroup: {}
}

const apiURL = process.env.REACT_APP_API_URL;

// Tipos
const ADD_GROUP = 'ADD_GROUP';
const EDIT_GROUP = 'EDIT_GROUP';
const GET_GROUP = 'GET_GROUP';
const FETCH_GROUP = 'FETCH_GROUP';
const SHOW_GROUPS = 'SHOW_GROUPS';
const ENABLE_TEAM = 'ENABLE_TEAM';
const DISABLE_TEAM = 'DISABLE_TEAM';

// Reducers
export default function groupReducers(state = dataInicial, action){
    switch(action.type){
        case ADD_GROUP:
            return {...state, groups: state.groups.concat(action.payload)}
        case EDIT_GROUP:
            return {...state, groups: state.groups.map(grupo => grupo.id===action.payload.id?action.payload:grupo)}
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
        case ENABLE_TEAM:
            return {...state, groups: state.groups.map(grupo => grupo.id===action.payload.id?action.payload:grupo)}
        case DISABLE_TEAM:
            return {...state, groups: state.groups.map(grupo => grupo.id===action.payload.id?action.payload:grupo)}
        default:
            return state
    }
}

// Acciones
export const agregarGrupo = (grupo) => async dispatch => {
    const data = {
        name: grupo.name,
        project_id: '1'
    }
    const resp = await axios.post('http://' + apiURL + ':5000/memberlist/createTeam/' + grupo.idCurso, data);
    dispatch({
        type: ADD_GROUP,
        payload: resp.data.data[0]
    })
}

export const editarGrupo = (grupo) => async dispatch => {
    // RUTA BACK
    const resp = await axios.put('http://' + apiURL + ':5000/memberlist/updateTeamName/' + grupo.id, grupo);
    dispatch({
        type: EDIT_GROUP,
        payload: resp.data.team
    })
}

export const mostrarGrupos = (grupo) => async (dispatch, getState) => {
    dispatch({
        type: SHOW_GROUPS,
        payload: grupo,
    });
}

export const fetchGrupos = (idCurso) => async (dispatch, getState) => {
    try{
        const resp = await axios.get('http://' + apiURL + ':5000/memberlist/readTeamByCourse', {params: {course_id: idCurso}});
        dispatch({
            type: FETCH_GROUP,
            payload: resp.data
        })
    }catch(error){
        //console.log(error);
    }
}

export const enableTeam = (groupID) => async dispatch => {
    const resp = await axios.put('http://' + apiURL + ':5000/memberlist/enableTeam/' + groupID);
    dispatch({
        type: ENABLE_TEAM,
        payload: resp.data.team
    })
}

export const disableTeam = (groupID) =>async dispatch => {
    const resp = await axios.put('http://' + apiURL + ':5000/memberlist/disableTeam/' + groupID);
    dispatch({
        type: DISABLE_TEAM,
        payload: resp.data.team
    })
}