import React, {Component} from 'react';
import { Table, Header, Icon, Divider, Container, Button } from 'semantic-ui-react';

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
        <Button animated = "fade">
          <Button.Content visible>
            <Icon name= "eye" />
          </Button.Content>
          <Button.Content hidden>
            <Icon name= "arrow circle right" />
          </Button.Content>
        </Button>
        <Button color= "blue" animated="fade">
          <Button.Content visible>
            <Icon name= "pencil" />
          </Button.Content>
          <Button.Content hidden>
            <Icon name= "arrow circle right" />
          </Button.Content>
        </Button>
        <Button color= "red" animated="fade">
          <Button.Content visible>
            <Icon name= "trash" />
          </Button.Content>
          <Button.Content hidden>
            <Icon name= "remove" />
          </Button.Content>
        </Button>
      </Table.Cell>
      </Table.Row>

    );
  }
}

export default ListaCursos;
