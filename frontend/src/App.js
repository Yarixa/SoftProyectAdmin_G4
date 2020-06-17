import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import './App.css';
import  TablaModulos  from './components/vista-modulos/listado-modulos/TablaModulos';
import DashboardPofesor from "./components/dashboard/DashboardPofesor";
import DashboardAdministrador from "./components/dashboard/DashboardAdministrador";
import VistaCursoAlumno from "./components/vista-modulos/visualizacion-curso/VistaCursoAlumno";
import VistaCursoAdministrador from "./components/vista-modulos/visualizacion-curso/VistaCursoAdministrador";
import VistaCursoProfesor from './components/vista-modulos/visualizacion-curso/VistaCursoProfesor';
import Users from './components/gestion-usuarios/Users';
import generateStore from "./components/store";
// *** Components ***
import RAppBar from "./components/navigation/RAppBar/RAppBar.jsx";
import RDrawer from "./components/navigation/RDrawer/RDrawer.jsx";
import DashboardAdminisrador from "./components/dashboard/DashboardAdministrador";
import DashboardAlumno from "./components/dashboard/DashboardAlumno";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: 'Dashboard'
        }
    }

    render(){
        const store = generateStore();
        return (
            <Provider store={store}>
                <Router>
                    <RAppBar/>
                    <Switch>
                        <Route exact path="/">
                            <MainBox>
                                <DashboardAlumno></DashboardAlumno>
                            </MainBox>
                        </Route>
                        <Route exact path="/modulos">
                            <MainBox>
                                <TablaModulos />
                            </MainBox>
                        </Route>
                        <Route exact path="/modulos/nuevo-modulo">
                            <MainBox>
                                <h1>Nuevo Modulo</h1>
                            </MainBox>
                            {/*<NuevoModulo />*/}
                        </Route>
                        <Route path="/modulosApi">
                            <MainBox>
                                <h1>Cursos</h1>
                            </MainBox>
                            {/*<Cursos />*/}
                        </Route>
                        <Route path="/Proyectos">
                            <MainBox>
                                <Users />
                            {/*<Poyectos />*/}
                            </MainBox>
                        </Route>
                    </Switch>
                    <RDrawer/>
                </Router>
            </Provider>
        );
    }
}

class MainBox extends Component{
    render(){
        return(
            <div className="main-box">
                {this.props.children}
            </div>
        );
    }
}

export default App;
