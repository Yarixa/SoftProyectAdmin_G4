import axios from 'axios'

// Constantes
const dataInicial = {
    array : []
}

const GET_USERS = 'GET_USERS'
const REGISTER_USER = 'REGISTER_USER'

// Reducer
export default function userReducer(state = dataInicial, action){
    switch(action.type){
        case GET_USERS:
            return {...state, array: action.payload}
        case REGISTER_USER:
        default:
            return state
    }
}

// Acciones
export const getUsers = () => async (dispatch, getState) => {
    try{
        const resp = await axios.get('http://localhost:5000/users/readall')
        dispatch({
            type: GET_USERS,
            payload: resp.data
        })
    } catch (error){
        console.log(error)
    }
}

export const registerUser = (user) => async (dispatch, getState) => {
    try{
        axios.post('http://localhost:5000/users/register', {user})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        dispatch({
            type: REGISTER_USER
        })
    } catch (error){
        console.log(error)
    }
}
