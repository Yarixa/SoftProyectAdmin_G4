import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import EditIcon from "@material-ui/icons/Edit";

import { useDispatch } from 'react-redux';
import { agregarProyecto, editarProyecto } from "../proyectosDuck";

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

    const { proyectoParaEditar } = props;
    const { esModoEditar } = props;
    const { idCurso } = props;

    const [open, setOpen] = React.useState(false);
    const [nombreProyecto, setNombreProyecto] = React.useState(esModoEditar?proyectoParaEditar.nombre:'');
    const [descripcionProyecto, setDescripcionProyecto] = React.useState(esModoEditar?proyectoParaEditar.descripcion:'');

    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        if(!esModoEditar){
            setNombreProyecto('');
            setDescripcionProyecto('');
        }
        setOpen(false);
    };

    const handleAccept = () => {

        if(esModoEditar) {
            const nuevoProyecto = {
                id : proyectoParaEditar.id,
                course_id: proyectoParaEditar.courseId,
                nombre : nombreProyecto,
                descripcion : descripcionProyecto,
            }
            dispatch(editarProyecto(nuevoProyecto));
        }else{
            const nuevoProyecto = {
                nombre : nombreProyecto,
                course_id : idCurso,
                descripcion : descripcionProyecto,
            }
            dispatch(agregarProyecto(nuevoProyecto));
            setNombreProyecto('');
            setDescripcionProyecto('');
        }
        setOpen(false);
    };
    //Funcion para validar datos (true si encuentra error, false si no encuentra error)
    const simpleValidator = (text) => {
        //en caso de que no se haya escrito nada, no se valida
        if(text!==''){ 
            //valida que hayan solo letras y espacios / valida que el string no tenga sólo espacios
            if(/[^a-zA-Z\s]/.test(text) || !text.replace(/\s/g, '').length){
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
        if( (!simpleValidator(nombreProyecto) && !simpleValidator(descripcionProyecto)) && 
        (nombreProyecto && descripcionProyecto)!==''){
            return false
        }
        else{
            return true
        }
    }


    return (
        <div>
            <Button variant="contained" color = "primary" onClick={handleClickOpen}>
                { esModoEditar?<EditIcon />:"Agregar proyecto" }
            </Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>{ esModoEditar?"Editar Proyecto" : "Crear Proyecto" }</DialogTitle>
                <DialogContent>
                    <div className={classes.container}>
                        <form className={classes.formControl}>
                            <TextField
                                className={classes.formItem}
                                id="NombreProyecto"
                                fullWidth={true}
                                label="Nombre proyecto"
                                defaultValue={esModoEditar?nombreProyecto:''}
                                onChange={(e) => setNombreProyecto(e.target.value)}
                                error={simpleValidator(nombreProyecto)}
                                helperText={simpleValidator(nombreProyecto) ? 'Por favor, complete el campo con los datos solicitados' : ' '}
                            />
                            <TextField
                                className={classes.formItem}
                                id="Descripcion"
                                label="Descripción"
                                onChange={(e) => setDescripcionProyecto(e.target.value)}
                                defaultValue={esModoEditar?descripcionProyecto:''}
                                error={simpleValidator(descripcionProyecto)}
                                helperText={simpleValidator(descripcionProyecto) ? 'Por favor, complete el campo con los datos solicitados' : ' '}
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