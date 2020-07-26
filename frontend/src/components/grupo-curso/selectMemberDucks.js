import axios from "axios";

// Constantes
const dataInicial = {
    members: [],
    seleccionados: []
}

const apiURL = process.env.REACT_APP_API_URL;

// Tipos
const SELECT_MEMBER = "SELECT_MEMBER";
const UNSELECT_MEMBER = "UNSELECT_MEMBER";
const FETCH_LIST = "FETCH_LIST";

// Reducers
export default function selectMemberReducers(state = dataInicial, action){
    switch(action.type){
        case SELECT_MEMBER:
            return {...state, seleccionados: state.seleccionados.concat(action.payload)}
        case UNSELECT_MEMBER:
            return {...state, seleccionados: state.seleccionados.filter(member => member.email != action.payload.embail)}
        case FETCH_LIST:
            return {...state, members: action.payload}
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

export const getTeamMembers = () => dispatch => {
    //BACK
    console.log("A")
    const list = [{
        id: "1",
        first_name: "Francisco Javier",
        last_name: "Alvarez Aspee",
        email: "falvarez16@alumnos.utalca.cl"
    }]
    //Agregar parámetro de selección
    const aux_list = list.map(member => ({...member, selected: false}))
    dispatch({
        type: FETCH_LIST,
        payload: aux_list
    })
}

export const getCourseMembers = () => dispatch => {
    console.log("B")
    //BACK
    //Agregar parámetro de selección
    dispatch({
        type: FETCH_LIST
    })
}

export const getProfesors = () => dispatch => {
    console.log("C")
    //BACK
    //Agregar parámetro de selección
    dispatch({
        type: FETCH_LIST
    })
}