import axios from 'axios'
import { getUsers } from '../gestion-usuarios/userDucks';
import { fetchMembers } from '../vista-curso/integrantes/membersDucks';

// Constantes
const dataInicial = {
    name : ''
}

const apiURL = process.env.REACT_APP_API_URL;

// Tipos
const REGISTER = 'REGISTER';
const VINCULATE = 'VINCULATE';

// Reducers
export default function massiveAddReducer (state = dataInicial, action){
    switch(action.type){
        case REGISTER:
            return {...state, name : action.name}
        case VINCULATE:
            return {...state, name : action.name}
        default:
            return state
    }
}

// Acciones
export const uploadFile = (file) => async dispatch => {

    let formData = new FormData();
    formData.append('file', file.file);

    const resp = await axios.post('http://' + apiURL + ':5000/users/massivecreate/'+file.name, formData);
    dispatch(getUsers());
    dispatch({
        type: REGISTER,
        name: file.name
    })
}

export const vinculate = (file) => async dispatch => {

    let formData = new FormData();
    formData.append('file', file.file);
    console.log(file.name + " ~ " + file.course_id)
    /* Llamar Ruta */
    /* Llamar Fetching */
    dispatch(fetchMembers(file.course_id))    
    dispatch({
        type: VINCULATE,
        payload: file.name
    })
}