import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Button from '@material-ui/core/Button';
import { uploadFile, loadFile } from './massiveAddDucks';
import { getUsers } from '../gestion-usuarios/userDucks';

export default function MassiveAdd (props) {
    
    const {esVincular} = props;
    const {idCurso} = props;
    const {carga} = props;
    const dispatch = useDispatch();
    const [fileName, setFileName] = React.useState('');

    const handleFile = e => {
        if (esVincular){

        }
        else{
            setFileName(e.target.files[0].name)
            dispatch(uploadFile(e.target.files[0]));
            props.action(true);
        }
    }

    const handleLoad = e => {
        if (esVincular){

        }
        else{
            dispatch(loadFile(fileName));
            setFileName('');
            dispatch(getUsers());
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
            >Subir Archivo</Button>
        )
    }
    return (
        <Button
            variant="contained"
            component="label"
        >
        Cargar Archivo
        <input
            type="file"
            style={{ display: "none" }}
            accept = ".xlsx"
            onChange = {handleFile}
        />
        </Button>
    )
}