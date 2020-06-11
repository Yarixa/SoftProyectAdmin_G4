import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import { useDispatch } from 'react-redux';
import {agregarModulo, editarModulo} from "../../modulosDuck";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
    formItem: {
        marginRight: '12px',
        marginBottom: '12px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
        maxWidth: 330
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function FormularioModulo(props) {
    const classes = useStyles();

    const { moduloParaEditar } = props;
    const { esModoEditar } = props;

    const [open, setOpen] = React.useState(false);
    const [nombreModulo, setNombreModulo] = React.useState(esModoEditar?moduloParaEditar.nombre:'');
    const [profesor, setProfesor] = React.useState(esModoEditar?moduloParaEditar.profesor:'');
    const [anio, setAnio] = React.useState(esModoEditar?moduloParaEditar.anio:'');
    const [semestre, setSemestre] = React.useState(esModoEditar?moduloParaEditar.semestre:" ");

    //borrar!! variable solo para uso preliminar... o debería venir de la api
    var idAux = esModoEditar?moduloParaEditar.id:nombreModulo;

    const dispatch = useDispatch();


    const handleChange = (event) => {
        setSemestre(Number(event.target.value) || " ");
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        if(!esModoEditar){
            setNombreModulo('');
            setSemestre(" ");
            setAnio('');
            setProfesor('');
        }
        setOpen(false);
    };

    const handleAccept = () => {
        const nuevoModulo = {
            id : idAux,
            nombre : nombreModulo,
            profesor : profesor,
            semestre : semestre,
            anio : anio,
            anioSemestre : anio + "-" + semestre
        }
        
        if(!( simpleValidator(nuevoModulo.nombre) && simpleValidator(nuevoModulo.profesor) &&
        simpleValidator(nuevoModulo.semestre) && simpleValidator(nuevoModulo.anio) )){

            if(esModoEditar) {
                dispatch(editarModulo(nuevoModulo));
            }
            else   {
                dispatch(agregarModulo(nuevoModulo));
                setNombreModulo('');
                setSemestre(" ");
                setAnio('');
                setProfesor('');
            }
            setOpen(false);

        }
        
    };
    //Funcion para validar datos
    const simpleValidator = (text) => {
        //console.log(isNum)
        if(text===anio){
            var isNum = /^\d+$/.test(text) //valida que solamente hayan numeros
            if(!isNum){ return true }
        }
        else{//valida que hayan solo letras y espacios / valida que el string no tenga sólo espacios
            if(/[^a-zA-Z\s]/.test(text) || !text.replace(/\s/g, '').length){return true}
        }
    };

    return (
        <div>
            <Button variant="contained" color = "primary" onClick={handleClickOpen}>
                { esModoEditar?<EditIcon />:"Agregar módulo" }
            </Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>{ esModoEditar?"Editar Módulo" : "Crear Módulo" }</DialogTitle>
                <DialogContent>
                    <div className={classes.container}>
                        <form className={classes.formControl}>
                            <TextField
                                className={classes.formItem}
                                id="NombreModulo"
                                fullWidth={true}
                                label="Nombre Modulo"
                                defaultValue={esModoEditar?nombreModulo:''}
                                onChange={(e) => setNombreModulo(e.target.value)}
                                error={simpleValidator(nombreModulo)}
                                helperText={simpleValidator(nombreModulo) ? 'Por favor, rellene el campo' : ' '}
                            />
                            <TextField
                                className={classes.formItem}
                                id="Profesor"
                                label="Profesor"
                                onChange={(e) => setProfesor(e.target.value)}
                                defaultValue={esModoEditar?profesor:''}
                                error={simpleValidator(profesor)}
                                helperText={simpleValidator(profesor) ? 'Por favor, rellene el campo' : ' '}
                            />
                            <TextField
                                className={classes.formItem}
                                id="Anio"
                                label="Año"
                                onChange={(e) => setAnio(e.target.value)}
                                defaultValue={esModoEditar?anio:''}
                                error={simpleValidator(anio)} //se validan que sea integer, y que no esté vacío
                                helperText={ simpleValidator(anio) ? 'Rellene el campo con los datos solicitados' : ' '}
                            />
                            <InputLabel
                                className={classes.formItem}
                                id="selecionar-semestre"> Semestre </InputLabel>
                            <Select
                                labelId="selecionar-semestre"
                                id="dropwdown-list"
                                value={semestre}
                                defaultValue={esModoEditar?semestre:" "}
                                onChange={handleChange}
                                input={<Input />}
                                error={semestre===' '}
                                helperText={ semestre===' ' ? 'Seleccione un semestre' : ' '}
                            >
                                <MenuItem value={" "}>
                                    <em>Ninguno</em>
                                </MenuItem>
                                <MenuItem value={"1"}>Primero</MenuItem>
                                <MenuItem value={"2"}>Segundo</MenuItem>
                            </Select>
                        </form>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleAccept} color="primary">
                        {esModoEditar?"Guardar":"Agregar"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}