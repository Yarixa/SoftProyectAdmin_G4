import React, {Component} from 'react';

import { Table, Segment, Loader, Image, Dimmer } from 'semantic-ui-react';

import ListaCursos from './ListaCursos';

import cursos from './api/cursos';

class TablaCursos extends Component {
  constructor(){
      super();

      this.state = {
        cursos: null
      };
  }

  componentDidMount(){
    setTimeout(() => {this.getCursos();},1000);

  }

  getCursos(){
    this.setState({cursos: cursos});
  }

  render() {
    const { cursos } = this.state;
    if(cursos == null){
      return(
        <Segment>
          <Dimmer active inverted>
            <Loader >
            </Loader>
          </Dimmer>
        </Segment>
      )
    }
    return (
      <Table fixed>
      <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Nombre curso</Table.HeaderCell>
      <Table.HeaderCell>Semestre</Table.HeaderCell>
      <Table.HeaderCell>Profesor(es)</Table.HeaderCell>
      <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
      </Table.Header>

      <Table.Body>
      {
        cursos.map(curso => <ListaCursos key={curso.id} curso={curso}/>)
      }
      </Table.Body>
      </Table>
    );
  }
}

export default TablaCursos;
