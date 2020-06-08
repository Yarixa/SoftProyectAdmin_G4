import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import './App.css';
import  Modulos  from './components/vista-modulos/Modulos';
import Users from './components/gestion-usuarios/Users';
import generateStore from "./components/store";
import Login from "./components/login/Login";

// *** Components ***
import RAppBar from "./components/navigation/RAppBar/RAppBar.jsx";
import RDrawer from "./components/navigation/RDrawer/RDrawer.jsx";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: ''
        }
    }

    render(){
        const store = generateStore();
        return (
            <Provider store={store}>
                <Router>
                    {/*<Route exact path="/login">*/}
                    {/*    <Login />*/}
                    {/*</Route>*/}
                    <RAppBar/>
                    <Switch>
                        <Route path="/dashboard">
                            <MainBox>
                                <h1>Dashboard</h1>
                                {/*<Dashboard />*/}
                            </MainBox>
                        </Route>
                        <Route path="/modulos">
                            <MainBox>
                                <Modulos />
                                {/*<TablaModulos />*/}
                            </MainBox>
                        </Route>
                        <Route path="/modulos/nuevo-modulo">
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
