import React from 'react';
import { useDispatch } from 'react-redux';
import { addMember, editMember } from '../membersDucks';

// Material Estilos
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';

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
    const {member} = props;

    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleAccept = () => {
        const newMember = {
            
        }
        if (esEditar){
            dispatch(editMember(newMember));
        }
        else{
            dispatch(addMember(newMember));
        }
        setOpen(false);
    }

    return (
        <div>
            <Button 
                color = 'primary'
                variant = 'contained'
                onClick = {handleClickOpen}
            >
                {esEditar?<EditIcon />: "Agregar Alumno"}
            </Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open = {open}>
                <DialogTitle>Agregar un alumno al curso</DialogTitle>
                <DialogContent>
                    <div className = {classes.container}>
                        <form className = {classes.formControl}>
                            <TextField
                                className = {classes.formItem}
                                id = "memberName"
                                fullWidth = {true}
                                label = "Nombre"
                                defaultValue = ""
                            />
                        </form>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleAccept} color="primary">
                        {esEditar?"Guardar":"Agregar"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}