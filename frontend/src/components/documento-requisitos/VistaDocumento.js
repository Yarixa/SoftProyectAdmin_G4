import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Proposito from "./Proposito";
import Alcance from "./Alcance";
import Contexto from "./Contexto";
import DescripGeneral from "./DescripGeneral";
import Restricciones from "./Restricciones";
import Requisitos from "./Requisitos";
import SupYDep from "./SupYDep";
import Referencias from "./Referencias";
import Usuarios from "./Usuarios";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="whith">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Proposito" {...a11yProps(0)} />
                    <Tab label="Alcance" {...a11yProps(1)} />
                    <Tab label="Contexto" {...a11yProps(2)} />
                    <Tab label="Referencias" {...a11yProps(3)} />
                    <Tab label="Descripción General" {...a11yProps(4)} />
                    <Tab label="Suposiciones y Dependencias" {...a11yProps(5)} />
                    <Tab label="Restricciones Generales" {...a11yProps(6)} />
                    <Tab label="Usuarios" {...a11yProps(7)} />
                    <Tab label="Requisitos" {...a11yProps(8)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Proposito/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Alcance/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Contexto/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Referencias/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <DescripGeneral/>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <SupYDep/>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <Restricciones/>
            </TabPanel>
            <TabPanel value={value} index={7}>
                <Usuarios/>
            </TabPanel>
            <TabPanel value={value} index={8}>
                <Requisitos/>
            </TabPanel>
        </div>
    );
}