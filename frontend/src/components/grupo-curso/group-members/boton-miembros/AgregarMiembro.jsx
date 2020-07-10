import React from 'react';

// Material Estilos
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { agregarIntegrante } from '../../groupMemberDucks';


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

    const {idGroup} = props;
    const {idCurso} = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleAccept = () => {
        const integrante = {
            email: email,
            course_id: idCurso,
            team_id: idGroup
        }
        console.log(integrante)
        dispatch(agregarIntegrante(integrante));
        setOpen(false);
    }

    return (
        <div>
        <Button color = 'primary' variant = 'contained' onClick = {handleOpen}>
            Agregar Miembro
        </Button>
        <Dialog disableBackdropClick disableEscapeKeyDown open = {open}>
            <DialogTitle>Agrega Grupo</DialogTitle>
            <DialogContent>
                <div className = {classes.container}>
                    <form className = {classes.formControl}>
                        <TextField
                            className = {classes.formItem}
                            id = "email"
                            fullWidth = {true}
                            label = "Correo Electronico"
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
                    Agregar
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    )
}