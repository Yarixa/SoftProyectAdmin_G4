import axios from 'axios'

// Constantes
const dataInicial = {
    name : ''
}

const apiURL = process.env.REACT_APP_API_URL;

// Tipos
const FILE_UPLOAD = 'FILE_UPLOAD';
const FILE_LOAD = 'FILE_LOAD';
const VINCULATE = 'VINCULATE';

// Reducers
export default function massiveAddReducer (state = dataInicial, action){
    switch(action.type){
        case FILE_UPLOAD:
            return {...state, name : action.name}
        default:
            return state
    }
}

// Acciones
export const uploadFile = (file) => async dispatch => {

    let formData = new FormData();

    formData.append('file', file.file)
    console.log(file.name + "Ducks")
    const resp = await axios.post('http://' + apiURL + ':5000/users/massivecreate/'+file.name, formData);
    console.log(resp)
    dispatch({
        type: FILE_LOAD,
        name: file.name
    })
}

export const vinculate = file => async dispatch => {
    const data = {
        name: file.name,
        idCurso: file.idCurso
    }
    const resp = await axios.post('http://' + apiURL + ':5000/memberlist/massivecreate/' + data.name + '/' + data.idCurso);
    dispatch({
        type: VINCULATE,
        payload: resp.data
    })
}