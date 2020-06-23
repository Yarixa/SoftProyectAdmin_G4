import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import { useDispatch } from 'react-redux';
import { agregarModulo, editarModulo } from "../../modulosDuck";
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
    const [departamento, setDepartamento] = React.useState(esModoEditar?moduloParaEditar.degree:'');

    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        if(!esModoEditar){
            setNombreModulo('');
            setDepartamento('');
        }
        setOpen(false);
    };

    const handleAccept = () => {

        if(esModoEditar) {
            const nuevoModulo = {
                id : moduloParaEditar.id,
                nombre : nombreModulo,
                degree : departamento,
            }
            dispatch(editarModulo(nuevoModulo));
        }
        else   {
            const nuevoModulo = {
                nombre : nombreModulo,
                degree : departamento,
            }
            dispatch(agregarModulo(nuevoModulo));
            setNombreModulo('');
            setDepartamento('');
        }
        setOpen(false);
        
    };
    //Funcion para validar datos
    const simpleValidator = (text) => {
        //console.log(buttonAcceptCheck)
        // if(text===anio){
        //     var isNum = /^\d+$/.test(text) //valida que solamente hayan numeros
        //     if(!isNum){ return true }
        // }
        // else if (text===semestre){
        //     if(semestre===' '){
        //         return true
        //     }
        // }
        // else{//valida que hayan solo letras y espacios / valida que el string no tenga sólo espacios
            if(/[^a-zA-Z\s]/.test(text) || !text.replace(/\s/g, '').length){
                return true
            }
            else{
                return false
            }
        //}
    };

    const buttonAcceptCheck = () =>{
        if( !simpleValidator(nombreModulo) && !simpleValidator(departamento)){
        //!simpleValidator(semestre) && !simpleValidator(anio)){    
            return false
        }
        else{
            return true
        }
    }


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
                                id="Departeamento"
                                label="Departamento"
                                onChange={(e) => setDepartamento(e.target.value)}
                                defaultValue={esModoEditar?departamento:''}
                            />
                        </form>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleAccept} color="primary" disabled={buttonAcceptCheck()} >
                        {esModoEditar?"Guardar":"Agregar"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}