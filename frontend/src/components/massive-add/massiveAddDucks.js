import axios from 'axios'

// Constantes
const dataInicial = {
    name : ''
}

const apiURL = process.env.REACT_APP_API_URL;

// Tipos
const FILE_UPLOAD = 'FILE_UPLOAD';
const FILE_LOAD = 'FILE_LOAD';

// Reducers
export default function massiveAddReducer (state = dataInicial, action){
    switch(action.type){
        case FILE_UPLOAD:
            return {...state, name : action.name}
        case FILE_LOAD:
            return {...state, name : ''}
        default:
            return state
    }
}

// Acciones
export const uploadFile = file => async dispatch => {

    let formData = new FormData();

    formData.append('file', file)

    const resp = await axios.post('http://' + apiURL + ':5000/users/uploadfile', formData);
    console.log(resp.data.data.name)
    dispatch({
        type: FILE_UPLOAD,
        name: resp.data.data.name
    })
}

export const loadFile = file => async dispatch => {
    const data = {
        name : file
    }
    console.log(data.name)
    const resp = await axios.post('http://' + apiURL + ':5000/users/massivecreate/' + data.name);
    console.log(resp)
    dispatch({
        type: FILE_LOAD,
        payload: resp.data
    })
}