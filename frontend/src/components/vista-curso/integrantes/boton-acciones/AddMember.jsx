import React from 'react';
import { useDispatch } from 'react-redux';
import { addMember, editMember } from '../membersDucks';

// Material Estilos
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    formItem: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 400,
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
    const {idCurso} = props;

    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [first_name, setFirstName] = React.useState('');
    const [last_name, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleAccept = () => {
        console.log(idCurso)
        const newMember = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            idCurso: idCurso,
            idTeam: "1"
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
                                id = "memberFirstName"
                                label = "Nombre"
                                defaultValue = ""
                                onChange = {(e) => setFirstName(e.target.value)}
                            />
                            <TextField
                                className = {classes.formItem}
                                id = "memberLastName"
                                label = "Apellido"
                                defaultValue = ""
                                onChange = {(e) => setLastName(e.target.value)}
                            />
                            <TextField
                                className = {classes.formItem}
                                id = "memberEmail"
                                fullWidth
                                label = "Correo Electrónico"
                                style = {{ margin: 8}}
                                defaultValue = ""
                                onChange = {(e) => setEmail(e.target.value)}
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