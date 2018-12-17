import React, { Component } from 'react';

import { Container, Loader } from 'semantic-ui-react'

import Header from './Header/Header';
import Timeline from './Timeline/Timeline';
import { Api } from '../../services/Api';
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { user: null, isUserLoaded: false };
    this.getLoggedUser = this.getLoggedUser.bind(this);
  }

  getLoggedUser() {
    Api.get('/api/auth')
      .then(response => {
        if (response.status === 200) {
          if (response.data.status) {
            this.setState({ user: response.data.user, isUserLoaded: true });
          }
        }
      });
  }

  render() {
    if (this.props.userLogged && this.state.user == null) {
      this.getLoggedUser();
    }

    if (this.state.isUserLoaded) {
      return (
        <div>
          <Header user={this.state.user} />
          <Container>
            <Timeline user={this.state.user} />
          </Container>
        </div>
      );
    } else {
      return (
        <div className='loading'>
          <Loader active>Loading ...</Loader>
        </div>
      );
    }
  }
}

export default Home;