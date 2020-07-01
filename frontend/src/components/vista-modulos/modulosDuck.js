import axios from 'axios';

// *** Constants ***
const initialState = {
    listadoModulos: [],
    moduloSeleccionado: {}
}

const apiURL = process.env.REACT_APP_API_URL;

// *** Types ***
const AGREGAR_MODULO = 'ADD_MODULO';
const ELIMINAR_MODULO = 'ELIMINAR_MODULO';
const ACTUALIZAR_MODULO = 'ACTUALIZAR_MODULO';
const MOSTRAR_INSTANCIAS = 'MOSTRAR_INSTANCIAS';
const FETCH_MODULOS_OK = 'FETCH_MODULOS_OK';

// *** Reducer ***
export default function modulosReducer(state = initialState, action){
    switch(action.type){
        case AGREGAR_MODULO: return {
            ...state,
            listadoModulos: state.listadoModulos.concat(action.payload)
        };
        case ELIMINAR_MODULO: return {
            ...state,
            listadoModulos: state.listadoModulos.filter(modulo => modulo.id !== action.payload)
        };
        case ACTUALIZAR_MODULO: return {
            ...state,
            listadoModulos: state.listadoModulos.map(modulo => modulo.id===action.payload.id?action.payload:modulo)
        };
        case MOSTRAR_INSTANCIAS: return {
            ...state,
            moduloSeleccionado: action.payload
        };
        case FETCH_MODULOS_OK: return {
            ...state,
            listadoModulos: action.payload
        };
        default:
            return state;
    }
}

// *** Actions ***
export const agregarModulo = (nuevoModulo) => async (dispatch, getState) => {
    try{
        await axios.post('http://' + apiURL + ':5000/modulos/create', nuevoModulo).then(response => {
            console.log("recibiendo desde postModulo: " + response.data.id);
            dispatch({
                type: AGREGAR_MODULO,
                payload: {
                    ...nuevoModulo,
                    id : response.data.id
                },
            });
        })
    }catch (error){
        console.log("ERROR! " + error);
    }

}

export const eliminarModulo = (idModulo) => async (dispatch, getState) => {
    try{
        await axios.put('http://' + apiURL + ':5000/modulos/deshabilitar/' + idModulo).then(response => {
            console.log("recibiendo desde eliminarModulo: " + response.data.status);
            dispatch({
                type: ELIMINAR_MODULO,
                payload: idModulo,
            });
        })
    }catch (error){
        console.log("ERROR! " + error);
    }
}

export const editarModulo = (nuevoModulo) => async (dispatch, getState) => {
    try{
        await axios.put('http://' + apiURL + ':5000/modulos/update/'+nuevoModulo.id, nuevoModulo).then(response => {
            console.log("recibiendo desde editarModulo: " + response.data.status);
            dispatch({
                type: ACTUALIZAR_MODULO,
                payload: nuevoModulo,
            });
        })
    }catch (error){
        console.log("ERROR! " + error);
    }
}

export const mostrarInstancias = (modulo) => async (dispatch, getState) => {
    dispatch({
        type: MOSTRAR_INSTANCIAS,
        payload: modulo,
    });
}

export const fetchModulos = () => async (dispatch, getState) => {
    try{
        await axios.get('http://' + apiURL + ':5000/modulos/readAll').then(response => {
            dispatch({
                type: FETCH_MODULOS_OK,
                payload: response.data.modulos,
            });
        });
    }catch(error){
        console.log(error);
    }
}