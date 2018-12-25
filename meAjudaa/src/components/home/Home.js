import React, { Component } from 'react';

import { Container, Loader } from 'semantic-ui-react'

import Timeline from './Timeline/Timeline';
import Api from '../../services/Api';
import Wait from './Wait';
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

    if (this.props.userLogged) {
      if (this.state.isUserLoaded) {
        return (
          <div>
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
    } else {
      return (
        <Wait />
      );
    }
  }
}

export default Home;