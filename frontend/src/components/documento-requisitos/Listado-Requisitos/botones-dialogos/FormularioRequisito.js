import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import { useDispatch } from 'react-redux';
import {agregarRequisito, editarRequisito} from "../../requisitosDuck";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

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

export default function FormularioRequisito(props) {
    const classes = useStyles();

    const { requisitoParaEditar } = props;
    const { esModoEditar } = props;

    const [open, setOpen] = React.useState(false);
    const [rU, setRU] = React.useState(esModoEditar?requisitoParaEditar.rU:'');
    const [nombre, setNombre] = React.useState(esModoEditar?requisitoParaEditar.nombre:'');
    const [description, setDescription] = React.useState(esModoEditar?requisitoParaEditar.description:'');
    const [fuente, setFuente] = React.useState(esModoEditar?requisitoParaEditar.fuente:'');
    const [estabilidad, setEstabilidad] = React.useState(esModoEditar?requisitoParaEditar.estabilidad:" ");
    const [tipo, setTipo] = React.useState(esModoEditar?requisitoParaEditar.tipo:'');

    //borrar!! variable solo para uso preliminar... o debería venir de la api
    var idAux = esModoEditar?requisitoParaEditar.id:nombre;

    const dispatch = useDispatch();


    const handleChange = (event) => {
        setEstabilidad( String(event.target.value) || " ");
    };
    const handleChange1 = (event) => {
        setTipo(String(event.target.value) || " ");
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        if(!esModoEditar){
            setRU('');
            setNombre('');
            setDescription(" ");
            setFuente('');
            setEstabilidad('');
            setTipo('');
        }
        setOpen(false);
    };

    const handleAccept = () => {
        const nuevoRequisito = {
            id : idAux,
            rU : rU,
            nombre : nombre,
            description : description,
            fuente : fuente,
            estabilidad : estabilidad,
            tipo : tipo
        }

        if(esModoEditar) {
            dispatch(editarRequisito(nuevoRequisito));
        }
        else   {
            dispatch(agregarRequisito(nuevoRequisito));
            setRU('');
            setNombre('');
            setDescription(" ");
            setFuente('');
            setEstabilidad('');
            setTipo('');
        }

        setOpen(false);
    };

    return (
        <div>
            <IconButton aria-label="mas" variant="contained" color = "primary" onClick={handleClickOpen}>

                { esModoEditar?<EditIcon />: <AddIcon /> }
            </IconButton>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>{ esModoEditar?"Editar Requisito" : "Crear Requisito" }</DialogTitle>
                <DialogContent>
                    <div className={classes.container}>
                        <form className={classes.formControl}>
                            <TextField
                                className={classes.formItem}
                                id="RU"
                                fullWidth={true}
                                label="RU"
                                onChange={(e) => setRU(e.target.value)}
                                defaultValue={esModoEditar?rU:''}
                            />
                            <TextField
                                className={classes.formItem}
                                id="NombreRequisito"
                                fullWidth={true}
                                label="Nombre Requisito"
                                onChange={(e) => setNombre(e.target.value)}
                                defaultValue={esModoEditar?nombre:''}
                            />
                            <TextField
                                className={classes.formItem}
                                id="Descripción"
                                label="Descripción"
                                onChange={(e) => setDescription(e.target.value)}
                                defaultValue={esModoEditar?description:''}
                            />
                            <TextField
                                className={classes.formItem}
                                id="Fuente"
                                label="Fuente"
                                onChange={(e) => setFuente(e.target.value)}
                                defaultValue={esModoEditar?fuente:''}
                            />
                            <InputLabel
                                className={classes.formItem}
                                id="selecionar-estabilidad"> Estabilidad </InputLabel>
                            <Select
                                labelId="selecionar-estabilidad"
                                id="dropwdown-list"
                                value={estabilidad}
                                defaultValue={esModoEditar?estabilidad:" "}
                                onChange={handleChange}
                                input={<Input />}
                            >
                                <MenuItem value={" "}>
                                    <em>Ninguno</em>
                                </MenuItem>
                                <MenuItem value={"Transable"}>Transable</MenuItem>
                                <MenuItem value={"Intransable"}>Intransable</MenuItem>
                            </Select>
                            <InputLabel
                                className={classes.formItem}
                                id="selecionar-tipo"> Tipo </InputLabel>
                            <Select
                                labelId="selecionar-tipo"
                                id="dropwdown-list"
                                value={tipo}
                                defaultValue={esModoEditar?tipo:" "}
                                onChange={handleChange1}
                                input={<Input />}
                            >
                                <MenuItem value={" "}>
                                    <em>Ninguno</em>
                                </MenuItem>
                                <MenuItem value={"Funcional"}>Funcional</MenuItem>
                                <MenuItem value={"Restricción"}>Restricción</MenuItem>
                                <MenuItem value={"Calidad"}>Calidad</MenuItem>
                            </Select>
                        </form>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleAccept} color="primary">
                        {esModoEditar?"Guardar":"Agregar"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}