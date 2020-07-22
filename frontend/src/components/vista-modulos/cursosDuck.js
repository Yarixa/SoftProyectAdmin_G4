
// *** Constants ***
const initialState = {
    cursos: []
}

// *** Types ***
const AGREGAR_CURSO = 'ADD_CURSO';
const ELIMINAR_CURSO = 'ELIMINAR_CURSO';
const ACTUALIZAR_CURSO = 'ACTUALIZAR_CURSO';

// *** Reducer ***
export default function cursosReducer(state = initialState, action){
    switch(action.type){
        case AGREGAR_CURSO: return {
            ...state,
            cursos: state.cursos.concat(action.payload)
        };
        case  ELIMINAR_CURSO: return {
            ...state,
            cursos: state.cursos.filter(curso => curso.id !== action.payload)
        };
        case ACTUALIZAR_CURSO: return {
            ...state,
            cursos: state.cursos.map(curso => curso.id===action.payload.id?action.payload:curso)
        };
        default:
            return state;
    }
}

// *** Actions ***
export const agregarCurso = (nuevoCurso) => async (dispatch, getState) => {
    dispatch({
        payload: nuevoCurso,
        type: AGREGAR_CURSO,
    });
}

export const eliminarCurso = (idCurso) => async (dispatch, getState) => {
    dispatch({
        payload: idCurso,
        type:  ELIMINAR_CURSO,
    });
}

export const editarCurso = (nuevoCurso) => async (dispatch, getState) => {
    dispatch({
        payload: nuevoCurso,
        type: ACTUALIZAR_CURSO,
    });
}
