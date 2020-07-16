import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from "../components/login/Login";
import RAppBar from "../components/navigation/RAppBar/RAppBar";
import RDrawer from "../components/navigation/RDrawer/RDrawer";
import RouterFacade from "./RouterFacade";

export default function AppRouter() {
    const ss = sessionStorage.getItem('logged');
    useEffect(()=>{
        console.log("---> session storage: " + ss)
        console.log("---> type: " + typeof ss)
    }, [ss]);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>            
                <Route
                    path="/home/:section/:arg?"
                    render={renderProps => {
                        if(sessionStorage.getItem('logged')==='false'){
                            console.log("redirecting to login from AppRouter")
                            return (<Redirect to={'/'}/>)
                        }
                        return (
                            <div>
                                <RAppBar />
                                <MainBox>
                                    <RouterFacade route={renderProps.match.params.section} arg={renderProps.match.params.arg}/>
                                </MainBox>
                                <RDrawer />
                            </div>
                        )
                    }}
                />  
                <Redirect to={'/home/error'} />
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