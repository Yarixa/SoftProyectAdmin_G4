import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Icon, Divider, Container, Button } from 'semantic-ui-react';
import {TablaCursos} from './Components/Cursos';
import BotonCrear from './Components/BotonCrear';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header as="h2" icon textAlign="center">
          <Icon name="book" circular/>
          <Header.Content>Cursos</Header.Content>
        </Header>
        <Divider />
        <Container textAlign="center">
        <TablaCursos/>
        <BotonCrear/>
        </Container>
      </div>
    );
  }
}

export default App;
