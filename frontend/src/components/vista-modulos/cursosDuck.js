import axios from 'axios';

// *** Constants ***
const initialState = {
    listadoCursos: []
}

// *** Types ***
const AGREGAR_CURSO = 'ADD_CURSO';
const ELIMINAR_CURSO = 'ELIMINAR_CURSO';
const ACTUALIZAR_CURSO = 'ACTUALIZAR_CURSO';
const FETCH_CURSOS_OK = 'FETCH_CURSOS_OK';

// *** Reducer ***
export default function cursosReducer(state = initialState, action){
    switch(action.type){
        case AGREGAR_CURSO: return {
            ...state,
            listadoCursos: state.listadoCursos.concat(action.payload)
        };
        case  ELIMINAR_CURSO: return {
            ...state,
            listadoCursos: state.listadoCursos.filter(curso => curso.id !== action.payload)
        };
        case ACTUALIZAR_CURSO: return {
            ...state,
            listadoCursos: state.listadoCursos.map(curso => curso.id===action.payload.id?action.payload:curso)
        };
        case FETCH_CURSOS_OK: return {
            ...state, 
            listadoCursos: action.payload.filter(curso=>curso.disponible===true),
        };
        default:
            return state;
    }
}

// *** Actions ***
export const agregarCurso = (nuevoCurso) => async (dispatch, getState) => {
    try{
        await axios.post('http://3.23.231.36:5000/courses/create', nuevoCurso).then(response => {
            console.log("recibiendo desde postCurso: ");
            console.log(response.data);
            dispatch({
                type: AGREGAR_CURSO,
                payload: {
                    ...nuevoCurso,
                    id : response.data.id,
                },
            });
        })
    }catch (error){
        console.log("ERROR! " + error);
    }
}

export const eliminarCurso = (idCurso) => async (dispatch, getState) => {
    try{
        await axios.post('http://3.23.231.36:5000/courses/deshabilitar/' + idCurso).then(response => {
            console.log("recibiendo desde eliminarCurso: ");
            console.log(response.data);
            dispatch({
                type:  ELIMINAR_CURSO,
                payload: idCurso,
            });
        })
    }catch (error){
        console.log("ERROR! " + error);
    }
}

export const editarCurso = (nuevoCurso) => async (dispatch, getState) => {
    try {
        await axios.put('http://3.23.231.36:5000/courses/update/' + nuevoCurso.id, nuevoCurso).then(response => {
            console.log("recibiendo desde editarCurso: " + response.data.status);
            dispatch({
                type: ACTUALIZAR_CURSO,
                payload: nuevoCurso,
            });
        })
    } catch (error) {
        console.log("ERROR! " + error);
    }
}

export const fetchCursos = () => async (dispatch, getState) => {
    try{
        await axios.get('http://3.23.231.36:5000/courses/readAll').then(response => {
            console.log('recibiendo desde fetch cursos:');
            console.log(response.data);
            dispatch({
                type: FETCH_CURSOS_OK,
                payload: response.data,
            });
        });
    }catch(error){
        console.log(error);
    }
}

export const fetchCursosPorIdModulo = (idModulo) => async (dispatch, getState) => {
    try{
        await axios.get('http://3.23.231.36:5000/courses/findAll/' + idModulo).then(response => {
            console.log('recibiendo desde fetch cursos por id de módulo:');
            console.log(response.data);
            dispatch({
                type: FETCH_CURSOS_OK,
                payload: response.data,
            });
        });
    }catch(error){
        console.log(error);
    }
}