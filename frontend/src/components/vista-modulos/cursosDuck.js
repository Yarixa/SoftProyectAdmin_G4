import axios from 'axios';
import {Table} from "semantic-ui-react";
import React from "react";
// *** Constants ***
const initialState = {
    cursos: []
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

// *** Types ***
export const agregarCurso = (nuevoCurso) => async (dispatch, getState) => {
    try{
        await axios.post('http://3.23.231.36:5000/courses/create', nuevoCurso).then(response => {
            console.log("recibiendo desde postCurso: " + response.data.id);
            const nuevo = {
                id : response.data.id,
                nombre : nuevoCurso.nombre,
                profesor : nuevoCurso.profesor,
                semestre : nuevoCurso.semestre,
                anio : nuevoCurso.anio,
                anioSemestre : nuevoCurso.anioSemestre
            }
            dispatch({
                type: AGREGAR_CURSO,
                payload: {
                    ...nuevo
                },
            });
        })
    }catch (error){
        console.log("ERROR! " + error);
    }


}

export const eliminarCurso = (idCurso) => async (dispatch, getState) => {
    try{
        await axios.put('http://3.23.231.36:5000/courses/deshabilitar/' + idCurso).then(response => {
            console.log("recibiendo desde eliminarCurso: " + response.data.status);
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
            dispatch({
                type: FETCH_CURSOS_OK,
                payload: response.data,
            });
        });
    }catch(error){
        console.log(error);
    }
}