import React, { Component } from 'react';
import { Button, Form, Segment, Header, Icon, Modal } from 'semantic-ui-react'

class Agregar extends Component {
  render() {
  return (
    <Modal trigger={<Button color= "green" animated="fade">
      <Button.Content visible>
        Crear curso
      </Button.Content>
      <Button.Content hidden>
        <Icon name= "add circle" />
      </Button.Content>
    </Button>} closeIcon>
        <Header icon='archive' content='Crear nuevo curso' />
        <Modal.Content>
            <Segment color = 'blue'>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Nombre curso' placeholder='nombre curso' />
              <Form.Input fluid label='Semestre' placeholder='Semestre' />
              <Form.Input fluid label='Profesor' placeholder='Profesor' />
            </Form.Group>
          </Form>
          </Segment>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red'>
            <Icon name='Cancelar' /> Cancelar
          </Button>
          <Button color='green'>
            <Icon name='Crear' /> Crear
          </Button>
        </Modal.Actions>
      </Modal>

 )
 }
}
export default Agregar;
