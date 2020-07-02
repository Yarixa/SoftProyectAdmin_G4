    import axios from 'axios'

// Constantes
const dataInicial = {
    users : [],
    first_name: '',
    last_name: '',
    email: ''
}

const apiURL = process.env.REACT_APP_API_URL;

// Tipos
const GET_USERS = 'GET_USERS'
const CREATE_USER = 'CREATE_USER'
const DISABLE_USER = 'DISABLE_USER'
const ENABLE_USER = 'ENABLE_USER'
const UPDATE_USER = 'UPDATE_USER'


// Reducer
export default function userReducer(state = dataInicial, action){
    switch(action.type){
        case GET_USERS:
            return {...state, users: action.payload}
        case CREATE_USER:
            return {...state, users: state.users.concat(action.nuevo)}
        case DISABLE_USER:
            return {...state, users: state.users.map(user => user.email === action.readUser.email ? action.readUser: user)}
        case ENABLE_USER:
            return {...state, users: state.users.map(user => user.email === action.readUser.email ? action.readUser: user)}
        case UPDATE_USER:
            return {...state, users: state.users.map(user => user.email === action.readUser.email ? action.readUser: user)}
        default:
            return state
    }
}

// Acciones
export const getUsers = () => async dispatch => {
    console.log(apiURL)
    try{
        const resp = await axios.get('http://' + apiURL + ':5000/users/readall')
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
        email: user.email
    }
    const resp = await axios.post('http://' + apiURL + ':5000/users/create', data)
    const newUser = await axios.get('http://' + apiURL + ':5000/users/readuser/' + data.email)
    dispatch({
        type: CREATE_USER,
        payload: resp.data,
        nuevo: newUser.data
    })
}

export const disableUser = user => async dispatch => {
    const data = {
        email: user.email
    }
    const resp = await axios.put('http://' + apiURL + ':5000/users/disable/' + data.email)
    const readUser = await axios.get('http://' + apiURL + ':5000/users/readuser/' + data.email)
    dispatch({
        type: DISABLE_USER,
        payload: resp,
        readUser: readUser.data
    })
}

export const enableUser = user => async dispatch => {
    const data = {
        email: user.email
    }
    const resp = await axios.put('http://' + apiURL + ':5000/users/enable/' + data.email)
    const readUser = await axios.get('http://' + apiURL + ':5000/users/readuser/' + data.email)
    dispatch({
        type: ENABLE_USER,
        payload: resp,
        readUser: readUser.data
    })
}

export const updateUser = user => async dispatch => {
    const data = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
    }
    const resp = await axios.put('http://' + apiURL + ':5000/users/updateuser/' + data.email, data)
    const readUser = await axios.get('http://' + apiURL + ':5000/users/readuser/' + data.email)
    dispatch({
        type: UPDATE_USER,
        payload: resp,
        readUser: readUser.data
    })
}
