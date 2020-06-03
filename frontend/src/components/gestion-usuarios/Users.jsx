import React, { useEffect } from 'react'

// Hook React Redux
import {useDispatch, useSelector} from 'react-redux'
import {getUsers, createUser, disableUser, enableUser} from './userDucks'

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

// Material Dialog
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { TextField, makeStyles, DialogActions, Switch } from '@material-ui/core'
import EditIcon from "@material-ui/icons/Edit";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    },
    TextField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    }
}))

const Users = () => {

    const usersList = useSelector(store => store.users.users)
    const user = useSelector(store => store.users)

    const [open, setOpen] = React.useState(false);

    const dispatch = useDispatch()
    // Carga inicial de usuarios en sistema
    useEffect(() => {
        dispatch(getUsers())
    },[dispatch])

    const classes = useStyles()


    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    // Obteniendo datos de formulario
    const userName = e => {
        user.first_name = e.target.value
    }

    const userLastName = e => {
        user.last_name = e.target.value
    }

    const userEmail = e => {
        user.email = e.target.value
    }

    const handleSubmit = () => {
        // Validar Datos
        dispatch(createUser(user))
        setOpen(false)
    }

    // Deshabilitar Usuario
    const handleDisable = e => {
        if (e.currentTarget.attributes['disponible'].value === "true"){
            dispatch(disableUser({email: e.currentTarget.attributes['email'].value}))
        }
        else{
            dispatch(enableUser({email: e.currentTarget.attributes['email'].value}))
        }
    }

    return (
        <div>
            <h1 align= 'center'>Lista de Usuarios</h1>
            <Table fixed size = 'large'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Apellido</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Rol</Table.HeaderCell>
                        <Table.HeaderCell>Registrado</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Editar</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Activo</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        usersList.map(item => (
                            <Table.Row key = {item.id + "t"}>
                                <Table.Cell key = {item.first_name}>{item.first_name}</Table.Cell>
                                <Table.Cell key = {item.last_name}>{item.last_name}</Table.Cell>
                                <Table.Cell key = {item.email}>{item.email}</Table.Cell>
                                <Table.Cell key = {item.role}>{item.role}</Table.Cell>
                                <Table.Cell key = {item.created}>{item.created}</Table.Cell>
                                <Table.Cell textAlign = 'center'>
                                    <Button key = {item.id} variant="contained" color="primary">
                                        <EditIcon />
                                    </Button>
                                </Table.Cell>
                                <Table.Cell textAlign = 'center'>
                                    <Switch 
                                        key = {item.id + "s"}
                                        checked = {item.disponible}
                                        onClick = {handleDisable}
                                        name="disable" 
                                        email = {item.email}
                                        disponible = {item.disponible.toString()}
                                    />
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan = '7'>
                            <Button
                                variant="contained"
                                onClick={handleClickOpen}
                                color="primary"
                            >
                                Agregar Usuario
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
            <form className = {classes.root} noValidate autoComplete = "off">
                <Dialog open = {open} onClose = {handleClose} aria-labelledby = "form-dialog-title">
                    <DialogTitle id = "form-dialog-title">Agregar Usuario</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Formulario de registro de usuarios, complete con la información solicitada.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            id = "first_name"
                            label = "Nombres"
                            type = "nombre"
                            className = {classes.TextField}
                            onChange = {userName}
                        />
                        <TextField
                            autoFocus
                            id = "last_name"
                            label = "Apellidos"
                            type = "apellido"
                            className = {classes.TextField}
                            onChange = {userLastName}
                        />
                        <TextField
                            autoFocus
                            id = "email"
                            label = "E-mail"
                            type = "email"
                            fullWidth
                            style = {{ margin: 8}}
                            onChange = {userEmail}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick = {handleClose}>
                            Cancelar
                        </Button>
                        <Button onClick = {handleSubmit} color = "primary">
                            Agregar
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        </div>
    )
}

export default Users
