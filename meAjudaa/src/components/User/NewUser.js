import React, { Component } from 'react';

import { Modal, Button, Form } from 'semantic-ui-react';

import { Api } from '../../services/Api';
import './newUser.scss';

class newUser extends Component {
  constructor(props) {
    this.state = { open: false, username: '', password: '', email: '', image: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false, username: '', password: '', email: '', image: '' });

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
      username: this.state.username.trim(),
      password: this.state.password,
      email: this.state.email,
      image: this.state.image.trim()
    };

    Api.post('/api/user', user)
      .then(response => {
        this.close();
      }).catch(error => {
        console.log('Error creating user.Please try again. ');
        console.log(error);
      });
  }

  render() {
    const { open } = this.state;

    const username = this.state.username.trim().length;
    return (
      <div>
        <Button size='mini' onClick={this.show}>Sign up</Button>

        <Modal size='tiny' dimmer='blurring' open={open} onClose={this.close}>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>

              <Form.Input required label='Username' placeholder='Enter a username' value={this.state.username}
                name='username' onChange={this.handleInputChange} maxLength='15' />
              <label className={(username < 15) ? 'characterLabel' : 'characterLabelComplete'}>{username + '/15'}</label>

              <Form.Input required label='Password' type='password' placeholder='Enter a password' value={this.state.password}
                name='password' onChange={this.handleInputChange} />

              <Form.Input required label='Email' type='email' placeholder='Enter a email' value={this.state.email}
                name='email' onChange={this.handleInputChange} />

              <Form.Input required label='Photo'
                placeholder='Enter a profile photo' value={this.state.image}
                name='image' onChange={this.handleInputChange} />

              <Modal.Actions>
                <Button className='saveNewUser' inverted type='submit' color='pink' floated='right'
                  icon='checkmark' labelPosition='right' content='Salvar' />
                <Button floated='right' onClick={this.close}>Cancel</Button>
              </Modal.Actions>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
export default newUser;