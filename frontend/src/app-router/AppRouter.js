import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from "../components/login/Login";
import RAppBar from "../components/navigation/RAppBar/RAppBar";
import RDrawer from "../components/navigation/RDrawer/RDrawer";
import RouterFacade from "./RouterFacade";

export default function AppRouter() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/home">
                    <RAppBar />
                    <Route
                        path="/home/:section/:arg?"
                        render={renderProps => {
                            return (
                                <MainBox>
                                    <RouterFacade route={renderProps.match.params.section} arg={renderProps.match.params.arg}/>
                                </MainBox>
                            )
                        }}
                    />
                    <RDrawer />
                </Route>
            </Switch>
        </Router>
    )
}

class MainBox extends Component {
    render() {
        return (
            <div className="main-box">
                {this.props.children}
            </div>
        );
    }
}