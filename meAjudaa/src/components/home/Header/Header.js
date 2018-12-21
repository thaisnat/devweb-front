import React, { Component } from 'react';

import { Menu, Container, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import Login from '../Login';
import { Api } from '../../../services/Api';

import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    let location = "";
    if (props.location.pathname === "/") {
      location = "home";
    } else if (props.location.pathname === "/posts") {
      location = "posts";
    } else if (props.location.pathname === "/search") {
      location = "search";
    }

    this.state = { activeItem: location };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  };

  logout = () => {
    Api.delete('/api/auth')
      .then(response => {
        if (response.status === 200) {
          localStorage.clear();
          window.location.replace('/');
        }
      });
  };

  handleLogin = loggedUser => {
    const { login } = this.props;
    login(loggedUser === 'Login successful!');
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Menu className='headerMenu' pointing secondary  >
        <Container>

          {this.props.userLogged && <div className='userLoggedNavbar'>
            <Menu.Item name='home' color='white' active={activeItem === 'home'} onClick={this.handleItemClick}
              style={{ paddingBottom: 20 + 'px' }} as={Link} to={'/'} >
              <Icon name='home' /> Me Ajudaa !!
            </Menu.Item>

            <Menu.Item name='posts' color='white' active={activeItem === 'posts'} onClick={this.handleItemClick}
              style={{ paddingBottom: 20 + 'px' }} as={Link} to={'/posts'}>
              <Icon name='posts' /> Posts
            </Menu.Item>

            <Menu.Item name='search' color='white' active={activeItem === 'search'} onClick={this.handleItemClick}
              style={{ paddingBottom: 20 + 'px' }} as={Link} to={'/search'}>
              <Icon name='search' /> Search
            </Menu.Item>
          </div>}

          {this.props.userLogged &&
            <Menu.Item name='sign-in' color='pink' position='right'
              style={{ paddingBottom: 20 + 'px' }} onClick={this.logout}> Sair </Menu.Item>}

          {!this.props.userLogged && <div className='userNotLoggedNavbar'>
            <Login onLogged={this.handleLogin} />
          </div>}

        </Container>

      </Menu>
    );
  }
}

export default withRouter(Header);


