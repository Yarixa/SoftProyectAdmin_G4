import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import './App.css';
import  TablaModulos  from './components/vista-modulos/listado-modulos/TablaModulos'
import generateStore from "./components/store";

// *** Components ***
import RAppBar from "./components/navigation/RAppBar/RAppBar.jsx";
import RDrawer from "./components/navigation/RDrawer/RDrawer.jsx";


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
                                <h1>Dashboard</h1>
                                {/*<Dashboard />*/}
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
                                <h1>Proyectos</h1>
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
