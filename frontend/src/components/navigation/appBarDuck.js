
// *** Constants ***
const initialState = {
    title : 'Dashboard'
};

// *** Types ***
const UPDATE_TITLE = 'UPDATE_TITLE';

// *** Reducer ***
export default function appBarReducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_TITLE:  return {...state, title : action.payload};
        default:            return state;
    }
}

// *** Actions ***
export const updateTitleAction = (newTitle) => async (dispatch, getState) => {
    dispatch({
        type: UPDATE_TITLE,
        payload: newTitle
    });
}
