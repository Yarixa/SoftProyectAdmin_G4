
// *** Constants ***
const initialState = {
    requisitos: []
}

// *** Types ***
const AGREGAR_REQUISITO = 'ADD_REQUISITO';
const ELIMINAR_REQUISITO = 'ELIMINAR_REQUISITO';
const ACTUALIZAR_REQUISITO = 'ACTUALIZAR_REQUISITO';

// *** Reducer ***
export default function requisitosReducer(state = initialState, action){
    switch(action.type){
        case AGREGAR_REQUISITO: return {
            ...state,
            requisitos: state.requisitos.concat(action.payload)
        };
        case ELIMINAR_REQUISITO: return {
            ...state,
            requisitos: state.requisitos.filter(requisito => requisito.id !== action.payload)
        };
        case ACTUALIZAR_REQUISITO: return {
            ...state,
            requisitos: state.requisitos.map(requisito => requisito.id===action.payload.id?action.payload:requisito)
        };
        default:
            return state;
    }
}

// *** Actions ***
export const agregarRequisito = (nuevoRequisito) => async (dispatch, getState) => {
    dispatch({
        payload: nuevoRequisito,
        type: AGREGAR_REQUISITO,
    });
}

export const eliminarRequisito = (idRequisito) => async (dispatch, getState) => {
    dispatch({
        payload: idRequisito,
        type: ELIMINAR_REQUISITO,
    });
}

export const editarRequisito = (nuevoRequisito) => async (dispatch, getState) => {
    dispatch({
        payload: nuevoRequisito,
        type: ACTUALIZAR_REQUISITO,
    });
}