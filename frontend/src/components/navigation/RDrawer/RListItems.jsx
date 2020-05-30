import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
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
import PeopleIcon from '@material-ui/icons/People';
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

                <ListItem button component={Link} to="/" onClick={() => dispatch(updateTitleAction('Dashboard'))}>
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
                        <ListItem button className={classes.nested} component={Link} to="/modulos" onClick={() => dispatch(updateTitleAction('Módulos'))}>
                            <ListItemText primary={buildLabel("Todos los módulos")} />
                        </ListItem>

                        <ListItem button className={classes.nested} component={Link} to="/modulos/nuevo-modulo" onClick={() => dispatch(updateTitleAction('Nuevo Módulo'))}>
                            <ListItemText primary={buildLabel("Agregar módulo")} />
                        </ListItem>

                </List>
            </Collapse>

                <ListItem button component={Link} to="/modulosApi" onClick={() => dispatch(updateTitleAction('Cursos'))}>
                    <ListItemIcon>
                        <PeopleIcon style={{ color: '#FFFFFF' }}/>
                    </ListItemIcon>
                    <ListItemText primary={buildLabel('Cursos')} />
                </ListItem>

            <ListItem button component={Link} to="/proyectos" onClick={() => dispatch(updateTitleAction('Proyectos'))}>
                    <ListItemIcon>
                        <WorkIcon style={{ color: '#FFFFFF' }}/>
                    </ListItemIcon>
                    <ListItemText primary={buildLabel('Proyectos')} />
                </ListItem>
        </div>
        );
}
