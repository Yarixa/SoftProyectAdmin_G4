import React from 'react';

// Material Estilos
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, InputLabel, Select, Input, MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import { agregarIntegrante, editarIntegrante } from '../../groupMemberDucks';


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
                <div className = {classes.container}>
                    <form className = {classes.formControl}>
                        {esEditar?<div><TextField
                            className = {classes.formItem}
                            id = "first_name"
                            fullWidth = {false}
                            label = "Nombre"
                            value = {member.first_name}
                        />
                        <TextField
                            className = {classes.formItem}
                            id = "last_name"
                            fullWidth = {false}
                            label = "Apellido"
                            value = {member.last_name}
                        />
                        <InputLabel className = {classes.formItem} id = 'Rol'>Seleccionar Rol</InputLabel>
                        <Select
                            labelID = 'Rol'
                            id = 'dropdown-rolelist'
                            value = {role}
                            defaultValue = {member.type}
                            onChange = {(e) => setRole(e.target.value)}
                            input = {<Input />}
                            error = {role === 'Alumno'}
                            helperText = {role === 'Alumno' ? 'Ingresar un rol distinto de Alumno' : ''}
                        >
                            <MenuItem value = "Alumno"><em>Alumno</em></MenuItem>
                            <MenuItem value = "Jefe"><em>Jefe</em></MenuItem>
                            <MenuItem value = "Analista"><em>Analista</em></MenuItem>
                            <MenuItem value = "Diseñador"><em>Diseñador</em></MenuItem>
                            <MenuItem value = "Desarrollador"><em>Desarrollador</em></MenuItem>
                            <MenuItem value = "Tester"><em>Tester</em></MenuItem>
                        </Select>
                        </div>
                        :<TextField
                        className = {classes.formItem}
                        id = "email"
                        fullWidth = {true}
                        label = "Correo Electronico"
                        defaultValue = ""
                        onChange = {(e) => setEmail(e.target.value)}
                        />}
                    </form>
                </div>
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