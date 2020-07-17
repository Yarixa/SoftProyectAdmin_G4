import axios from 'axios';
import jwt_decode from 'jwt-decode';

// *** Constants ***
const initialState = {
    user: '',
    password: '',
    error: false,
    errorMessage: ''
}

const apiURL = process.env.REACT_APP_API_URL;

// *** Types ***
const AUTENTICAR_USUARIO = 'AUTENTICAR_USUARIO';
const CERRAR_SESION = 'CERRAR_SESION';

// *** Reducer ***
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case AUTENTICAR_USUARIO: return {
            ...state,
            user: action.payload.user,
            password: action.payload.password,
            error: action.payload.error,
            errorMessage: action.payload.errorMessage
        };
        case CERRAR_SESION: return {
            ...state,
            user: '',
            password: '',
            error: false,
            errorMessage: ''
        };
        default:
            return state;
    }
}

// *** Actions ***
export const autenticarUsuario = (loginData, setLogged) => async (dispatch, getState) => {
    var data = {};
    try {
        await axios.post('http://' + apiURL + ':5000/users/login', loginData).then(response => {
            console.log("recibiendo desde postModulo: ");
            console.log(response.data);
            if (response.status === 200 && response.data !== "") {
                var decoded = jwt_decode(response.data);
                console.log("decoded token:");
                console.log(decoded);
                if(decoded.disponible === false){
                    setLogoutData();
                    setLogged(false);
                    data = {
                        ...loginData,
                        error: true,
                        errorMessage: 'usuario deshabilitado' // debería capturar el mensaje desde response
                    }
                }else{
                    setLoginData(decoded);
                    setLogged(true); 
                }
            } else {
                setLogoutData();
                setLogged(false);
                data = {
                    ...loginData,
                    error: true,
                    errorMessage: 'correo electrónico o contraseña incorrecta' // debería capturar el mensaje desde response
                }
            }
        })
    } catch (error) {
        setLogoutData();
        data = {
            ...loginData,
            error: true,
            errorMessage: 'correo o contraseña incorrecta' // debería capturar el mensaje desde response
        }
        console.log("ERROR! " + error);
    } finally {
        dispatch({
            type: AUTENTICAR_USUARIO,
            payload: data,
        });
    }
}

export const cerrarSesion = () => async (dispatch, getState) => {
    setLogoutData();
    dispatch({
        type: CERRAR_SESION,
        payload: {}
    });
}

const setLogoutData=()=>{
    sessionStorage.setItem('logged', false);
    sessionStorage.setItem('nombre_completo', '');
    sessionStorage.setItem('role', '');
    console.log("closing session!!");
}

const setLoginData=(userData)=>{
    sessionStorage.setItem('logged', true);
    sessionStorage.setItem('nombre_completo', userData.first_name + " " + userData.last_name);
    sessionStorage.setItem('role', userData.role);
}
