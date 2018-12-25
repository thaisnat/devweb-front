import React, { Component } from 'react';

import { Modal, Button, Form } from 'semantic-ui-react';

import Api from '../../services/Api';

import './newUser.scss';

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, username: '', email: '', password: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false, username: '', email: '', password: '' });

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    Api.post('/api/user', user)
      .then(response => {
        this.close();
      }).catch(error => {
        console.log('new user error: ');
        console.log(error);
      });
  }

  render() {
    const { open } = this.state;

    const username = this.state.username.length;

    return (
      <div>
        <Button size='mini' onClick={this.show}>Cadastrar-se</Button>

        <Modal size='tiny' dimmer='blurring' open={open} onClose={this.close}>
          <Modal.Header>Faça parte da comunidade</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>

              <Form.Input required label='Username' placeholder='Insira um username' value={this.state.username}
                name='username' onChange={this.handleInputChange} maxLength='15' />
              <label className={(username < 15) ? 'characterLabel' : 'characterLabelComplete'}>{username + '/15'}</label>

              <Form.Input required label='E-mail' type='email' placeholder='Insira um e-mail válido' value={this.state.email}
                name='email' onChange={this.handleInputChange} />

              <Form.Input required label='Password' type='password' placeholder='Insira uma senha forte' value={this.state.password}
                name='password' onChange={this.handleInputChange} />

              <Modal.Actions>
                <Button className='saveNewUser' inverted type='submit' color='pink' floated='right'
                  icon='checkmark' labelPosition='right' content='Salvar' />
                <Button floated='right' onClick={this.close}>Cancelar</Button>
              </Modal.Actions>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default NewUser;
