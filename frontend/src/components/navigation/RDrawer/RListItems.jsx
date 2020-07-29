import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";

import {useDispatch} from 'react-redux';
import {updateTitleAction} from '../appBarDuck';

// * Icons *
import BookIcon from '@material-ui/icons/Book';
import WorkIcon from '@material-ui/icons/Work';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PeopleIcon from '@material-ui/icons/People';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {ExpandLess, ExpandMore} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    root: {},
    nested: {
        paddingLeft: theme.spacing(10),
    },
}));

const buildLabel = (label)=>{
    return (
        <Typography style={{ color: '#FFFFFF' }}>{label}</Typography>
    );
}

export default function RListItems() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    const dispatch = useDispatch();

    return (
        <div className={classes.root}>

            <ListItem button component={Link} to="/home/dashboard" onClick={() => dispatch(updateTitleAction('Dashboard'))}>
                <ListItemIcon>
                    <DashboardIcon style={{ color: '#FFFFFF' }} />
                </ListItemIcon >
                <ListItemText primary={buildLabel('Dashboard')} />
            </ListItem>

            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <BookIcon style={{ color: '#FFFFFF' }}/>
                </ListItemIcon>
                <ListItemText primary={buildLabel('Módulos')} />
                {open ? <ExpandLess style={{ color: '#FFFFFF' }} /> : <ExpandMore style={{ color: '#FFFFFF' }}/>}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested} component={Link} to="/home/modulos" onClick={() => dispatch(updateTitleAction('Módulos'))}>
                        <ListItemText primary={buildLabel("Todos los módulos")} />
                    </ListItem>

                    <ListItem button className={classes.nested} component={Link} to="/home/modulos/nuevo-modulo" onClick={() => dispatch(updateTitleAction('Nuevo Módulo'))}>
                        <ListItemText primary={buildLabel("Agregar módulo")} />
                    </ListItem>

                </List>
            </Collapse>

            <ListItem button component={Link} to="/home/usuarios" onClick={() => dispatch(updateTitleAction('Usuarios'))}>
                <ListItemIcon>
                    <SupervisedUserCircleIcon style={{ color: '#FFFFFF' }}/>
                </ListItemIcon>
                <ListItemText primary={buildLabel('Usuarios')} />
            </ListItem>
        </div>
    );
}
