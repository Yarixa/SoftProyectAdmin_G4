import axios from 'axios'

// Constantes
const dataInicial = {
    users : [],
    first_name: '',
    last_name: '',
    email: '',
    password: ''
}

// Tipos
const GET_USERS = 'GET_USERS'
const CREATE_USER = 'CREATE_USER'

// Reducer
export default function userReducer(state = dataInicial, action){
    switch(action.type){
        case GET_USERS:
            return {...state, users: action.payload}
        case CREATE_USER:
            return {...state, users: [...state.users, action.payload]}
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

export const createUser = user => async dispatch => {
    const data = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password
    }
    const resp = await axios.post('http://localhost:5000/users/create', data)
    dispatch({
        type: CREATE_USER,
        payload: resp.data
    })
}
