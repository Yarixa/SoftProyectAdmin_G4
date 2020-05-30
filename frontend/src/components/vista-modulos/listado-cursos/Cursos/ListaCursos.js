import React, {Component} from 'react';
import { Table, Header, Icon, Divider, Container, Button } from 'semantic-ui-react';
import EliminarCurso from './eliminarcurso';
import EditarCurso from './editarcurso';
class ListaCursos extends Component {
  constructor(props){
    super(props);

  }
  render() {
    const{ curso } = this.props;
    return (
      <Table.Row>
      <Table.Cell>{curso.nombre}</Table.Cell>
      <Table.Cell>{curso.semestre}</Table.Cell>
      <Table.Cell>{curso.profesor}</Table.Cell>
      <Table.Cell>
      <Container>
        <EditarCurso/>
        <EliminarCurso/>
      </Container>


      </Table.Cell>
      </Table.Row>

    );
  }
}

export default ListaCursos;
