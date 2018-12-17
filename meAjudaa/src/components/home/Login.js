import React, { Component } from 'react';

import { Menu, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router';

import NewUser from '../User/NewUser';
import { Api } from '../../services/Api';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { username: '', password: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const user = {
      username: this.state.username.trim(),
      password: this.state.password,
    };

    Api.post('/api/auth', user)
      .then(response => {
        if (response.status === 200) {
          const { onLogged } = this.props;
          onLogged(response.data.msg);
        }
      }).catch(error => {
        console.log('Error creating user.Please try again. ');
        console.log(error);
      });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Menu.Item position='center'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input placeholder='Username' name='username' size='mini'
              onChange={this.handleInputChange} value={this.state.username} />
            <Form.Input placeholder='Senha' type='password' name='password' size='mini'
              onChange={this.handleInputChange} value={this.state.password} />
            <Form.Button content='Log in' type='submit' color='pink' size='mini' />
          </Form.Group>
        </Form>
        <NewUser />
      </Menu.Item>
    );
  }
}

export default withRouter(Login);