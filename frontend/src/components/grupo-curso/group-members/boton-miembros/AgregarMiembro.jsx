import React from 'react';

// Material Estilos
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, InputLabel, Select, Input, MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import { agregarIntegrante, editarIntegrante } from '../../groupMemberDucks';
import SelectMember from '../../select-member/SelectMember';


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
        maxWidth: 450
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function AgregarGrupo(props) {

    const {member} = props;
    const {esEditar} = props;
    const {idGroup} = props;
    const {idCurso} = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [role, setRole] = React.useState('Alumno');
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleAccept = () => {
        if (esEditar){
            console.log("rol: ", role)
            const data = {
                member: member,
                type: role,
                team_id: member.team_id,
                course_id: member.course_id
            }
            dispatch(editarIntegrante(data));
            setOpen(false);
        }
        else{
            const integrante = {
                email: email,
                course_id: idCurso,
                team_id: idGroup
            }
            console.log(integrante)
            dispatch(agregarIntegrante(integrante));
            setOpen(false);
        }
    }

    return (
        <div>
        <Button color = 'primary' variant = 'contained' onClick = {handleOpen}>
            {esEditar?<EditIcon />: "Agregar Miembro"}
        </Button>
        <Dialog disableBackdropClick disableEscapeKeyDown open = {open}>
            <DialogTitle>{esEditar?"Editando Miembro":"Agrega Miembro"}</DialogTitle>
            <DialogContent>
                <SelectMember type = "1"/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleAccept} color="primary">
                    {esEditar?"Guardar Cambios":"Agregar Miembro"}
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    )
}