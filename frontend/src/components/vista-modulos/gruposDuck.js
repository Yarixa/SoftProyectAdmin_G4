
// *** Constants ***
const initialState = {
    grupos: []
}

// *** Types ***
const AGREGAR_GRUPO = 'ADD_GRUPO';
const ELIMINAR_GRUPO = 'ELIMINAR_GRUPO';
const ACTUALIZAR_GRUPO = 'ACTUALIZAR_GRUPO';

// *** Reducer ***
export default function cursosReducer(state = initialState, action){
    switch(action.type){
        case AGREGAR_GRUPO: return {
            ...state,
            grupos: state.grupos.concat(action.payload)
        };
        case  ELIMINAR_GRUPO: return {
            ...state,
            grupos: state.grupos.filter(grupo => grupo.id !== action.payload)
        };
        case ACTUALIZAR_GRUPO: return {
            ...state,
            grupos: state.grupos.map(grupo => grupo.id===action.payload.id?action.payload:grupo)
        };
        default:
            return state;
    }
}

// *** Actions ***
export const agregarGrupo = (nuevoGrupo) => async (dispatch, getState) => {
    dispatch({
        payload: nuevoGrupo,
        type: AGREGAR_GRUPO,
    });
}

export const eliminarGrupo = (idGrupo) => async (dispatch, getState) => {
    dispatch({
        payload: idGrupo,
        type:  ELIMINAR_GRUPO,
    });
}

export const editarGrupo = (nuevoGrupo) => async (dispatch, getState) => {
    dispatch({
        payload: nuevoGrupo,
        type: ACTUALIZAR_GRUPO,
    });
}