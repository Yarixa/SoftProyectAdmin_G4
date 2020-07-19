
// *** Constants ***
const initialState = {
    modulos: []
}

// *** Types ***
const AGREGAR_MODULO = 'ADD_MODULO';
const ELIMINAR_MODULO = 'ELIMINAR_MODULO';
const ACTUALIZAR_MODULO = 'ACTUALIZAR_MODULO';

// *** Reducer ***
export default function modulosReducer(state = initialState, action){
    switch(action.type){
        case AGREGAR_MODULO: return {
            ...state,
            modulos: state.modulos.concat(action.payload)
        };
        case ELIMINAR_MODULO: return {
            ...state,
            modulos: state.modulos.filter(modulo => modulo.id !== action.payload)
        };
        case ACTUALIZAR_MODULO: return {
            ...state,
            modulos: state.modulos.map(modulo => modulo.id===action.payload.id?action.payload:modulo)
        };
        default:
            return state;
    }
}

// *** Actions ***
export const agregarModulo = (nuevoModulo) => async (dispatch, getState) => {
    dispatch({
        payload: nuevoModulo,
        type: AGREGAR_MODULO,
    });
}

export const eliminarModulo = (idModulo) => async (dispatch, getState) => {
    dispatch({
        payload: idModulo,
        type: ELIMINAR_MODULO,
    });
}

export const editarModulo = (nuevoModulo) => async (dispatch, getState) => {
    dispatch({
        payload: nuevoModulo,
        type: ACTUALIZAR_MODULO,
    });
}