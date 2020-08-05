import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Button from '@material-ui/core/Button';
import { uploadFile, loadFile, vinculate } from './massiveAddDucks';

export default function MassiveAdd (props) {
    
    const {esVincular} = props;
    const {idCurso} = props;
    const {carga} = props;
    const dispatch = useDispatch();

    const handleFile = e => {
        if (e.target.files[0] != null){
            const file = {
                file: e.target.files[0],
                name: e.target.files[0].name
            }
            if (esVincular){
                /* Subir Archivo */
                dispatch(uploadFile(e.target.files[0]));
                props.action(true);
            }
            else{
                dispatch(uploadFile(file));
                props.action(true);
            }
        }
    }

    return (
        <Button
            variant="contained"
            component="label"
        >
        Cargar Archivo
        <input
            type="file"
            autoFocus = {false}
            style={{display: "none"}}
            accept = ".xlsx"
            onChange = {handleFile}
            onClick = {(event) => {event.target.value = null}}
        />
        </Button>
    )
}