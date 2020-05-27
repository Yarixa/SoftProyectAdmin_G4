import React from 'react'

// Hook React Redux
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../redux/userDucks'

// Semantic Table | Estilos
import {Table, Button, Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

// Material Dialog
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { TextField, makeStyles, DialogActions } from '@material-ui/core'

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

    const dispatch = useDispatch()

    const classes = useStyles()

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const users = useSelector(store => store.users.array)
    console.log(users)

    return (
        <div>
            <h1 align= 'center'>Lista de Usuarios</h1>
            <Table fixed size = 'large'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Apellido</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Registrado</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Acciones</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        users.map(item => (
                            <Table.Row>
                                <Table.Cell key = {item.first_name}>{item.first_name}</Table.Cell>
                                <Table.Cell key = {item.last_name}>{item.last_name}</Table.Cell>
                                <Table.Cell key = {item.email}>{item.email}</Table.Cell>
                                <Table.Cell key = {item.created}>{item.created}</Table.Cell>
                                <Table.Cell textAlign = 'center'>
                                    <Button animated>
                                        <Button.Content hidden>Editar</Button.Content>
                                        <Button.Content visible>
                                            <Icon name = 'edit'/>
                                        </Button.Content>
                                    </Button>
                                    <Button animated color = 'red'>
                                        <Button.Content hidden>Eliminar</Button.Content>
                                        <Button.Content visible>
                                            <Icon name = 'user delete'/>
                                        </Button.Content>
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan = '5'>
                            <Button
                                onClick = {() => dispatch(getUsers())}
                                floated = 'right'
                                icon
                                positive
                                labelPosition = 'left'
                                size = 'small'
                            >
                                <Icon name = 'eye' /> Mostrar Usuarios
                            </Button>
                            <Button
                                onClick = {handleClickOpen}
                                floated = 'right'
                                icon
                                labelPosition = 'left'
                                primary
                                size = 'small'
                            >
                                <Icon name = 'user'/> Agregar Usuario
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
            <form className = {classes.root} noValidate autoComplete = "off">
                <div>
                <Dialog open = {open} onClose = {handleClose} aria-labelledby = "form-dialog-title">
                    <DialogTitle id = "form-dialog-title">Agregar Usuario</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Formulario de registro de usuarios, complete con la información solicitada.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            id = "name"
                            label = "Nombres"
                            type = "nombre"
                            className = {classes.TextField}
                            variant = "outlined"
                        />
                        <TextField
                            autoFocus
                            id = "last_name"
                            label = "Apellidos"
                            type = "apellido"
                            className = {classes.TextField}
                            variant = "outlined"
                        />
                        <TextField
                            autoFocus
                            id = "email"
                            label = "E-mail"
                            type = "email"
                            variant = "outlined"
                            fullWidth
                            style = {{ margin: 8}}
                        />
                        <TextField
                            autoFocus
                            id = "password"
                            label = "Contraseña"
                            type = "password"
                            variant = "outlined"
                            className = {classes.TextField}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick = {handleClose}>
                            Cancelar
                        </Button>
                        <Button onClick = {handleClose} color = "primary">
                            Agregar
                        </Button>
                    </DialogActions>
                </Dialog>
                </div>
            </form>
        </div>
    )
}

export default Users
