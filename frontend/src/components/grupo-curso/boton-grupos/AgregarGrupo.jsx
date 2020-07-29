import React from 'react';
import { useDispatch } from 'react-redux';

// Material Estilos
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@material-ui/core';
import { editarGrupo, agregarGrupo } from '../groupDucks';
import EditIcon from '@material-ui/icons/Edit';

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

export default function AgregarGrupo(props) {

    const {esEditar} = props;
    const {group} = props;
    const {idCurso} = props;

    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [nombreGrupo, setNombre] = React.useState(esEditar?group.name:"");

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleAccept = () => {
        if (esEditar){
            const nuevoGrupo = {
                id: group.id,
                name: nombreGrupo,
                idCurso: idCurso
            }
            dispatch(editarGrupo(nuevoGrupo));
        }
        else{
            const nuevoGrupo = {
                name: nombreGrupo,
                idCurso: idCurso
            }
            dispatch(agregarGrupo(nuevoGrupo));
            setNombre("");
        }
        setOpen(false);
    }
    //Funcion para activar/desactivar botón de confirmar
    const buttonAcceptCheck = () => {
        //Discrimina que el campo no esté vacío || que no contenga solo espacios vacíos
        if(nombreGrupo==='' || !nombreGrupo.replace(/\s/g, '').length){
            return true
        }
    }

    return (
        <div>
            <Button color = 'primary' variant = 'contained' onClick = {handleClickOpen}>
                {esEditar?<EditIcon />: "Agregar Grupo"}
            </Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open = {open}>
                <DialogTitle>Agrega Grupo</DialogTitle>
                <DialogContent>
                    <div className = {classes.container}>
                        <form className = {classes.formControl}>
                            <TextField
                                className = {classes.formItem}
                                id = "GroupName"
                                fullWidth = {true}
                                label = "Nombre de Grupo"
                                defaultValue = {esEditar?group.name:""}
                                onChange = {(e) => setNombre(e.target.value)}
                            />
                        </form>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleAccept} color="primary" disabled={buttonAcceptCheck()}>
                        {esEditar?"Guardar":"Agregar"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}