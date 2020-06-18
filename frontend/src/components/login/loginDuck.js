import axios from 'axios';

// *** Constants ***
const initialState = {
    user : '',
    password : '',
    error : false,
    errorMessage : ''
}

// *** Types ***
const AUTENTICAR_USUARIO = 'AUTENTICAR_USUARIO';

// *** Reducer ***
export default function loginReducer(state = initialState, action){
    switch(action.type){
        case AUTENTICAR_USUARIO: return {
            ...state,
            user: action.payload.user,
            password: action.payload.password
        };
        default:
            return state;
    }
}

// *** Actions ***
export const autenticarUsuario = (loginData) => async (dispatch, getState) => {
    var data = {};
    try{
        await axios.post('http://3.23.231.36:5000/users/login', loginData).then(response => {
            console.log("recibiendo desde postModulo: " + response.data);
            if(response.status === 200){
                sessionStorage.setItem('logged', true);
                sessionStorage.setItem('usuarioActual', loginData);
            }else{
                data = {
                    ...loginData,
                    error : true,
                    errorMessage : 'login error !!' // debería capturar el mensaje desde response
                }
            }
        })
    }catch (error){
        data = {
            ...loginData,
            error : true,
            errorMessage : 'login error !!' // debería capturar el mensaje desde response
        }
        console.log("ERROR! " + error);
    }finally{
        dispatch({
            type: AUTENTICAR_USUARIO,
            payload: data,
        });
    }
}
