import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';

import RListItems from './RListItems.jsx';
import logo from './AppLogo.png';
import { useEffect } from 'react';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-block',
        float: 'left',
        justifyContent: 'space-between',
        height: '100vh',
    },
    bottomBox: {
        height: "10%",
        width: drawerWidth - 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F2A36',
        ...theme.mixins.toolbar,
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    drawerPaper: {
        whiteSpace: 'nowrap',
        width: drawerWidth,
        justifyContent: 'space-between',
        backgroundColor: "#19212A",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'inline-block',
        overflow: 'auto',
        flexDirection: 'column',
        float: 'left',
        width: '241px',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function RDrawer() {
    const classes = useStyles();
    const [open] = React.useState(true);

    const nombreUsuarioActual = sessionStorage.getItem('nombre_completo');
    const rolUsuarioActual = sessionStorage.getItem('role');

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className="mainContent">
                    <div className={classes.toolbarIcon}>
                        <img src={logo} alt="SoftProjectHUB" />
                    </div>
                    <Divider />
                    <List>
                        <RListItems></RListItems>
                    </List>
                </div>
                <div className="bottomContent">
                    <div className={classes.bottomBox}>
                        <Grid
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="center"
                        >
                            <Grid item>
                                <AccountCircleIcon style={{ color: '#FFFFFF', fontSize: '50px'}} />
                            </Grid>
                            <Grid item>
                                <Grid 
                                container
                                direction = "column"
                                justify = "space-evenly"
                                >
                                    <Grid item>
                                        <Typography gutterBottom variant="subtitle1" style={{color: '#FFFFFF'}}>
                                            {nombreUsuarioActual}
                                        </Typography>
                                        <Grid item>
                                            <Typography gutterBottom variant="subtitle2" style={{color: '#FFFFFF'}}>
                                                {rolUsuarioActual}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}