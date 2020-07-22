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
import {agregarCurso, editarCurso} from "../../cursosDuck";
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

export default function FormularioCurso(props) {
    const classes = useStyles();

    const { cursoParaEditar } = props;
    const { esModoEditar } = props;
    const { nombreModulo } = props; 
    const { idModulo } = props;

    const [open, setOpen] = React.useState(false);
    const [profesor, setProfesor] = React.useState(esModoEditar?cursoParaEditar.profesor:"");
    const [anio, setAnio] = React.useState(esModoEditar?cursoParaEditar.anio:"");
    const [semestre, setSemestre] = React.useState(esModoEditar?cursoParaEditar.semestre:"");

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setSemestre(Number(event.target.value) || " ");
    };

    const handleClickOpen = () => {
        console.log("this shit: " + nombreModulo);
        setOpen(true);
    };

    const handleClose = () => {
        if(!esModoEditar){
            setSemestre("");
            setAnio('');
            setProfesor('');
        }
        setOpen(false);
    };

    const handleAccept = () => {
        if(esModoEditar) {
            const nuevoCurso = {
                id : cursoParaEditar.id,
                subject_id : idModulo,
                profesor : profesor,
                semestre : semestre,
                anio : anio,
                anioSemestre : anio + "-" + semestre
            }
            dispatch(editarCurso(nuevoCurso));
        }else{
            const nuevoCurso = {
                subject_id : idModulo,
                profesor : profesor,
                semestre : semestre,
                anio : anio,
                anioSemestre : anio + "-" + semestre
            }

            dispatch(agregarCurso(nuevoCurso));

            setSemestre(" ");
            setAnio('');
            setProfesor('');
        }

        setOpen(false);
    };
    //Funcion para validar datos  (true si encuentra error, false si no encuentra error)
    const simpleValidator = (text) => {

        //en caso de que no se haya escrito nada, no se valida
        if(text!==''&&text!==undefined){ 
            console.log("texto ingresado: "+text)
            if(text===anio){ //si la variable a validar es anio...
                var isNum = /^\d+$/.test(text) //valida que solamente hayan numeros
                if(!isNum){ 
                    return true 
                }
            }
            else if(text===semestre){ //Por defecto, si no se selecciona algún semestre, el valor de la variable es un espacio
                if(semestre===' '){
                    return true
                }
            }
            //valida que hayan solo letras y espacios / valida que el string no tenga sólo espacios
            else if(/[^a-zA-Z\s]/.test(text) || !text.replace(/\s/g, '').length){
                return true
            }
            else{
                return false
            }
        }
        else{
            return false
        }
        //console.log(buttonAcceptCheck)
    };

    //Funcion para habilitar/deshabilitar boton de aceptar formulario
    //Se vuelve a validar cada valor y además descrimina si se ha escrito algo en los campos del formulario
    const buttonAcceptCheck = () =>{
        if(!simpleValidator(profesor) &&
        !simpleValidator(semestre) && !simpleValidator(anio) &&
        (profesor && semestre && anio)!==''){    
            return false
        }
        else{
            return true
        }
    }

    return (
        <div>
            <Button variant="contained" color = "primary" onClick={handleClickOpen}>
                { esModoEditar?<EditIcon />:"Agregar Curso" }
            </Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>{ esModoEditar?"Editar Curso" : "Crear Curso" }</DialogTitle>
                <DialogContent>
                    <div className={classes.container}>
                        <form className={classes.formControl}>
                            <TextField
                                className={classes.formItem}
                                id="nombre-modulo"
                                fullWidth={true}
                                label="Modulo"
                                defaultValue={nombreModulo}
                                InputProps={{
                                    readOnly: true,
                                  }}
                            />
                            <TextField
                                className={classes.formItem}
                                id="Profesor"
                                label="Profesor"
                                onChange={(e) => setProfesor(e.target.value)}
                                defaultValue={esModoEditar?profesor:''}
                                error={simpleValidator(profesor)}
                                helperText={simpleValidator(profesor) ? 'Por favor, rellene el campo con los datos solicitados' : ' '}
                            />
                            <TextField
                                className={classes.formItem}
                                id="Anio"
                                label="Año"
                                onChange={(e) => setAnio(e.target.value)}
                                defaultValue={esModoEditar?anio:''}
                                error={simpleValidator(anio)}
                                helperText={ simpleValidator(anio) ? 'Por favor, ingrese sólo numeros' : ' '}
                            />
                            <InputLabel
                                className={classes.formItem}
                                id="selecionar-semestre"> Semestre </InputLabel>
                            <Select
                                labelId="selecionar-semestre"
                                id="dropwdown-list"
                                //value={semestre}
                                defaultValue={esModoEditar?semestre:" "}
                                onChange={handleChange}
                                input={<Input />}
                                error={semestre===' '}
                                helperText={semestre===' ' ? 'Por favor, seleccione un semestre' : ' '}
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
                    <Button onClick={handleAccept} color="primary" disabled={buttonAcceptCheck()}>
                        {esModoEditar?"Guardar":"Agregar"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
