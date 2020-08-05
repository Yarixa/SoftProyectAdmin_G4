import axios from 'axios';

// Constantes
const dataInicial = {
    members: []
}

const apiURL = process.env.REACT_APP_API_URL;

// Tipos
const FETCH_MEMBERS = 'FETCH_MEMBERS';
const ADD_MEMBER = 'ADD_MEMBER';
const ENABLE_MEMBER = 'ENABLE_MEMBER';
const DISABLE_MEMBER = 'DISABLE_MEMBER';

// Reducers
export default function courseMembersReducers(state = dataInicial, action){
    switch(action.type){
        case FETCH_MEMBERS:
            return {...state, members: action.payload}
        case ADD_MEMBER:
            return {...state, members: action.payload}
        case ENABLE_MEMBER:
            return {...state, members: state.members.map(member => member.user_email === action.payload.user_email ? action.payload: member)}
        case DISABLE_MEMBER:
            return {...state, members: state.members.map(member => member.user_email === action.payload.user_email ? action.payload: member)}
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
    console.log(data2)
    const resp2 = await axios.post('http://' + apiURL + ':5000/memberlist/create', data2);
    console.log(resp2)
    const allUsers = await axios.get('http://' + apiURL + ':5000/memberlist/readByCourse', {params: {course_id: data2.course_id}});

    dispatch({
        type: ADD_MEMBER,
        payload: allUsers.data
    })
}

export const enableMember = (member) => async dispatch => {
    const data = {
        email: member.email,
        course_id: member.course_id
    }
    const resp = await axios.put('http://' + apiURL + ':5000/memberlist/enable/' + data.email + '/' + data.course_id);
    const readUser = await axios.get('http://' + apiURL + ':5000/memberlist/readByUser', {params: {email: data.email}});
    dispatch({
        type: ENABLE_MEMBER,
        payload: readUser.data
    })
}

export const disableMember = (member) => async dispatch => {
    const data = {
        email: member.email,
        course_id: member.course_id
    }
    const resp = await axios.put('http://' + apiURL + ':5000/memberlist/disable/' + data.email + '/' + data.course_id);
    const readUser = await axios.get('http://' + apiURL + ':5000/memberlist/readByUser', {params: {email: data.email}});
    dispatch({
        type: DISABLE_MEMBER,
        payload: readUser.data
    }) 
}

export const editMember = (member) => async dispatch => {

}