import axios from 'axios'

const dataInicial ={
    documentDesign =[]
}

const apiURL = process.env.REACT_APP_API_URL;

const GET_DOCUMENT = 'GET_DOCUMENT'
const CREATE_DOCUMENT = 'CREATE_DOCUMENT'
const DISABLE_DOCUMENT = 'DISABLE_DOCUMENT'
const ENABLE_DOCUMENT = 'ENABLE_DOCUMENT'
const UPDATE_DOCUMENT = 'UPDATE_DOCUMENT'

export default function documentReducers(state = dataInicial, action){
    switch (action.type){
        default:
            return state
    }
}

