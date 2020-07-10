import axios from 'axios';

// Constantes
const dataInicial = {
    members: []
}

const apiURL = process.env.REACT_APP_API_URL;

// Tipos
const FETCH_MEMBERS = 'FETCH_MEMBERS';
const ADD_MEMBER = 'ADD_MEMBER';

// Reducers
export default function courseMembersReducers(state = dataInicial, action){
    switch(action.type){
        case FETCH_MEMBERS:
            return {...state, members: action.payload}
        case ADD_MEMBER:
            return {...state, members: action.payload}
        default:
            return state
    }
}

// Acciones
export const fetchMembers = (idCurso) => async dispatch => {
    const data = {
        course_id: idCurso
    }
    try {
        const resp = await axios.get('http://' + apiURL + ':5000/memberlist/readByCourse', {params: {course_id: data.course_id}});
        dispatch({
            type: FETCH_MEMBERS,
            payload: resp.data
        })
    } catch (Erro) {
        console.log(Error);
    }
}

export const addMember = (member) => async dispatch => {
    const data = {
        first_name: member.first_name,
        last_name: member.last_name,
        email: member.email
    }
    //Enviar a Registrar
    const resp1 = await axios.post('http://' + apiURL + ':5000/users/create', data)
    const newUser = await axios.get('http://' + apiURL + ':5000/users/readuser/' + data.email)
    //Enviar a Vincular
    const data2 = {
        email: member.email,
        user_email: member.email,
        course_id: member.idCurso,
        team_id: member.idTeam,
        type: newUser.data.role
    }
    const resp2 = await axios.post('http://' + apiURL + ':5000/memberlist/create', data2);
    const allUsers = await axios.get('http://' + apiURL + ':5000/memberlist/readByCourse', {params: {course_id: data2.course_id}});

    dispatch({
        type: ADD_MEMBER,
        payload: allUsers.data
    })
}

export const enableMember = (member) => async dispatch => {
    
}

export const disableMember = (member) => async dispatch => {
    
}

export const editMember = (member) => async dispatch => {
    
}