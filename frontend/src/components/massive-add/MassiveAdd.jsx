import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Button from '@material-ui/core/Button';
import { uploadFile, loadFile, vinculate } from './massiveAddDucks';

export default function MassiveAdd (props) {
    
    const {esVincular} = props;
    const {idCurso} = props;
    const {carga} = props;
    const dispatch = useDispatch();
    const [fileName, setFileName] = React.useState('');

    const handleFile = e => {
        if (esVincular){
            setFileName(e.target.files[0].name)
            /* Subir Archivo */
            dispatch(uploadFile(e.target.files[0]));
            props.action(true);
        }
        else{
            setFileName(e.target.files[0].name)
            dispatch(uploadFile(e.target.files[0]));
            props.action(true);
        }
    }

    const handleLoad = e => {
        if (esVincular){
            /* Vincular Usuarios */
            const file = {
                name: fileName,
                idCurso: idCurso
            }
            dispatch(vinculate(file));
            setFileName('');
            props.action(false);
        }
        else{
            /* Registrar Usuarios */
            dispatch(loadFile(fileName));
            setFileName('');
            props.action(false);
        }
    }
    if (carga){
        return (
            <Button
                variant="contained"
                component="label"
                color="secondary"
                onClick={handleLoad}
            >Ejecutar Carga</Button>
        )
    }
    else{
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
            />
            </Button>
        )
    } 
}