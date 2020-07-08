import axios from 'axios';

// Constantes
const dataInicial = {
    members: [
        {
            id: '1',
            first_name: 'Francisco Javier',
            last_name: 'Álvarez Aspée',
            role: 'Alumno',
            group: 'Crudders',
            group_role: 'Programador',
            email: 'falvarez16@alumnos.utalca.cl' 
        }
    ]
}

const apiURL = process.env.REACT_APP_API_URL;

// Tipos
const FETCH_MEMBERS = 'FETCH_MEMBERS';

// Reducers
export default function courseMembersReducers(state = dataInicial, action){
    switch(action.type){
        case FETCH_MEMBERS:
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
        const resp = await axios.get('http://' + apiURL + ':5000/memberlist/readByCourse', data);
        dispatch({
            type: FETCH_MEMBERS,
            payload: resp.data
        })
    } catch (Erro) {
        console.log(Error);
    }
}

export const addMember = (member) => async dispatch => {

}

export const editMember = (member) => async dispatch => {
    
}