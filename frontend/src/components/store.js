import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import appBarReducer from "./navigation/appBarDuck";
import modulosReducer from "./vista-modulos/modulosDuck";
import userReducer from './gestion-usuarios/userDucks'
import cursosReducer from "./vista-modulos/cursosDuck";
import loginReducer from "./login/loginDuck";

const rootReducer = combineReducers({
    appBar : appBarReducer,
    modulos : modulosReducer,
    cursos : cursosReducer,
    login : loginReducer,
    users : userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // para la extensión redux_devtools de chrome

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}