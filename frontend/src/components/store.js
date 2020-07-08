import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import appBarReducer from "./navigation/appBarDuck";
import modulosReducer from "./vista-modulos/modulosDuck";
import userReducer from './gestion-usuarios/userDucks'
import cursosReducer from "./vista-modulos/cursosDuck";
import loginReducer from "./login/loginDuck";
import groupReducers from './grupo-curso/groupDucks';
import memberReducers from './grupo-curso/groupMemberDucks';
import courseMembersReducers from './vista-curso/integrantes/membersDucks';

const rootReducer = combineReducers({
    appBar : appBarReducer,
    modulos : modulosReducer,
    cursos : cursosReducer,
    login : loginReducer,
    users : userReducer,
    groups : groupReducers,
    members : memberReducers,
    courseMembers : courseMembersReducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // para la extensión redux_devtools de chrome

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}