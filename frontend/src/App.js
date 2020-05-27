import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

// *** Components ***
import RAppBar from "./components/common/RAppBar/RAppBar.jsx";
import RDrawer from "./components/common/RDrawer/RDrawer.jsx";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: 'Dashboard'
        }
    }

    render(){
        return (
            <div>
                <Router>
                    <RAppBar/>
                    <Switch>
                        <Route exact path="/">
                            <Container>
                                <h1>Dashboard</h1>
                                {/*<Dashboard />*/}
                            </Container>
                        </Route>
                        <Route exact path="/modulos">
                            <Container>
                                <h1>Modulos</h1>
                            {/*<Modulos />*/}
                            </Container>
                        </Route>
                        <Route exact path="/modulos/nuevo-modulo">
                            <Container>
                                <h1>Nuevo Modulo</h1>
                            </Container>
                            {/*<NuevoModulo />*/}
                        </Route>
                        <Route path="/cursos">
                            <Container>
                                <h1>Cursos</h1>
                            </Container>
                            {/*<Cursos />*/}
                        </Route>
                        <Route path="/Proyectos">
                            <Container>
                                <h1>Proyectos</h1>
                            {/*<Poyectos />*/}
                            </Container>
                        </Route>
                    </Switch>
                    <RDrawer/>
                </Router>
            </div>
        );
    }
}

class Container extends Component{
    render(){
        return(
            <div className="container">
                {this.props.children}
            </div>
        )
            ;
    }
}

export default App;
