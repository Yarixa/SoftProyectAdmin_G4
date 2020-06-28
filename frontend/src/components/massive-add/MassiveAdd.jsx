import React from 'react';
import {useDispatch} from 'react-redux'

import Button from '@material-ui/core/Button';
import { uploadFile, loadFile } from './massiveAddDucks';

export default function MassiveAdd () {

    //const fileName = useSelector(store => store.massive.name);
    const dispatch = useDispatch();

    const handleFile = e => {
        console.log(e.target.files[0].name)
        dispatch(uploadFile(e.target.files[0]))
        dispatch(loadFile(e.target.files[0].name))
    }

    return (
        <Button
        variant="contained"
        component="label"
        >
        Cargar XLXS
        <input
            type="file"
            style={{ display: "none" }}
            accept = ".xlsx"
            onChange = {handleFile}
        />
        </Button>
    )
}