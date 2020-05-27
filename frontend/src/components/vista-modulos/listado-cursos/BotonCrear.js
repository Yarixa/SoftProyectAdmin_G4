import React, {Component} from 'react';
import { Table, Header, Icon, Divider, Container, Button } from 'semantic-ui-react';

class BotonCrear extends Button {
  render() {
    return (
      <Button color= "green" animated="fade">
        <Button.Content visible>
          Crear curso
        </Button.Content>
        <Button.Content hidden>
          <Icon name= "add circle" />
        </Button.Content>
      </Button>
    )
  }
}
export default BotonCrear;
