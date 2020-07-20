import axios from 'axios'

const dataInicial = {
    documents: []
}

const apiURL = process.env.REACT_APP_API_URL;

const GET_DOCUMENT = 'GET_DOCUMENT'
const CREATE_DOCUMENT = 'CREATE_DOCUMENT'
const DISABLE_DOCUMENT = 'DISABLE_DOCUMENT'
const ENABLE_DOCUMENT = 'ENABLE_DOCUMENT'
const UPDATE_DOCUMENT = 'UPDATE_DOCUMENT'

export default function documentReducers(state = dataInicial, action){
    switch (action.type){
        case CREATE_DOCUMENT: return {
            ...state,
            documents: state.documents.concat(action.payload)
        };
        case DISABLE_DOCUMENT: return {
            ...state,
            documents: state.documents.filter(documento => documento.id !== action.payload)
        };
        case UPDATE_DOCUMENT: return {
            ...state,
            documents: state.documents.map(documento => documento.id===action.payload.id?action.payload:documento)
        };
        case GET_DOCUMENT: return {
            ...state,
            documents: action.payload
        };
        default:
            return state
    }
}
export const getDocumentEsp =(idDocumento)=>async(dispatch,getState)=>{
    try{
        const resp = await axios.get('http://'+apiURL+':5000/documents/get/'+idDocumento)
        dispatch({
            type : GET_DOCUMENT,
            payload : resp.data
        }) 
    }catch(error){
        console.log(error)
    }
}


export const getDocument = ()=> async dispatch =>{
    console.log(apiURL)
    try{
        const resp = await axios.get('http://'+apiURL+':5000/documents/readAll')
        dispatch({
            type : GET_DOCUMENT,
            payload : resp.data
        })

    }catch(error){
        console.log(error)
    }
}

export const createDocument = (documento) => async (dispatch, getState)=>{
    try{
        await axios.post('http://'+apiURL+':5000/documents/add', documento).then(response=>{
            console.log("recibiendo desde postDocument");
            console.log(response.data);
            dispatch({
                type : CREATE_DOCUMENT,
                payload : {
                    ...documento,
                    id:response.data.id
                },
            });
        })
    }catch(error){
        console.log("Error! "+error);
    }
}

export const editarDocumento = (documento)=> async(dispatch, getState)=>{
    try{
        await axios.putt('http://'+apiURL+':5000/documents/update/'+documento.id, documento).then(response=>{
            console.log("recibiendo desde editarDocumento"+ response.data.status);

            dispatch({
                type :UPDATE_DOCUMENT,
                payload : documento,
            });
        })
    }catch(error){
        console.log("Error! "+error);
    }
}

export const eliminarDocumento=(idDocumento)=>async(dispatch, getState)=>{
    try{
        await axios.putt('http://'+apiURL+':5000/documents/delete/'+idDocumento).then(response=>{
            console.log("recibiendo desde eliminarDocumento"+ response.data.status);

            dispatch({
                type :DISABLE_DOCUMENT,
                payload : idDocumento,
            });
        })
    }catch(error){
        console.log("Error! "+ error);
    }
}

