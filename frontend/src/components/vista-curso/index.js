import React from 'react';

export default function Curso(props) {
    const { idCurso } = props;

    return (
    <h1>{"Este es el id del curso actual: " + idCurso}</h1>
    );
}