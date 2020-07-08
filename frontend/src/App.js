import React, { Component } from 'react';
import {Provider} from 'react-redux';

import './App.css';
import generateStore from "./components/store";
import AppRouter from './app-router/AppRouter';

class App extends Component {

    render(){

        const store = generateStore();

        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );
    }
}

export default App;
