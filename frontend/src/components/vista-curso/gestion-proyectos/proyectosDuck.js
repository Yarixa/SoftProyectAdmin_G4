import axios from 'axios';

// *** Constants ***
const initialState = {
    listadoProyectos: [],
}

const apiURL = process.env.REACT_APP_API_URL;

// *** Types ***
const AGREGAR_PROYECTO = 'AGREGAR_PROYECTO';
const ELIMINAR_PROYECTO = 'ELIMINAR_PROYECTO';
const ACTUALIZAR_PROYECTO = 'ACTUALIZAR_PROYECTO';
const FETCH_PROYECTOS_OK = 'FETCH_PROYECTOS_OK';

// *** Reducer ***
export default function proyectosReducer(state = initialState, action){
    switch(action.type){
        case AGREGAR_PROYECTO: return {
            ...state,
            listadoProyectos: state.listadoProyectos.concat(action.payload)
        };
        case ELIMINAR_PROYECTO: return {
            ...state,
            listadoProyectos: state.listadoProyectos.filter(proyecto => proyecto.id !== action.payload)
        };
        case ACTUALIZAR_PROYECTO: return {
            ...state,
            listadoProyectos: state.listadoProyectos.map(proyecto => proyecto.id===action.payload.id?action.payload:proyecto)
        };
        case FETCH_PROYECTOS_OK: return {
            ...state,
            listadoProyectos: action.payload
        };
        default:
            return state;
    }
}

// *** Actions ***
export const agregarProyecto = (nuevoProyecto) => async (dispatch, getState) => {
    try{
        await axios.post('http://' + apiURL + ':5000/projects/create', nuevoProyecto).then(response => {
            console.log("recibiendo desde postProyecto: ");
            console.log(response);
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: {
                    ...nuevoProyecto,
                    id : response.data.id
                },
            });
        })
    }catch (error){
        console.log("ERROR! " + error);
    }

}

export const eliminarProyecto = (idProyecto) => async (dispatch, getState) => {
    try{
        await axios.put('http://' + apiURL + ':5000/projects/deshabilitar/' + idProyecto).then(response => {
            console.log("recibiendo desde eliminarProyecto: " + response.data.status);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: idProyecto,
            });
        })
    }catch (error){
        console.log("ERROR! " + error);
    }
}

export const editarProyecto = (nuevoProyecto) => async (dispatch, getState) => {
    try{
        await axios.put('http://' + apiURL + ':5000/projects/update/'+nuevoProyecto.id, nuevoProyecto).then(response => {
            console.log("recibiendo desde editarModulo: " + response.data.status);
            dispatch({
                type: ACTUALIZAR_PROYECTO,
                payload: nuevoProyecto,
            });
        })
    }catch (error){
        console.log("ERROR! " + error);
    }
}

export const fetchProyectos = () => async (dispatch, getState) => {
    try{
        await axios.get('http://' + apiURL + ':5000/projects/readAll').then(response => {
            dispatch({
                type: FETCH_PROYECTOS_OK,
                payload: response.data.projects,
            });
        });
    }catch(error){
        console.log(error);
    }
}