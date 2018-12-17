import React, { Component } from 'react';

import { Menu, Container, Image, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import logo from '../../../midia/meajuda.jpg';
import Login from '../Login';
import { Api } from '../../../services/Api';

import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    let location = "";
    if (props.location.pathname === "/") {
      location = "home";
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
          <Menu.Item>
            <Image src={logo} size='small' as={Link} to={'/'} />
          </Menu.Item>

          {this.props.userLogged && <div className='userLoggedNavbar'>
            <Menu.Item name='home' color='pink' active={activeItem === 'home'} onClick={this.handleItemClick}
              style={{ paddingBottom: 20 + 'px' }} as={Link} to={'/'} >
              <Icon name='home' /> Me ajudaaaaaa !!!
            </Menu.Item>

            <Menu.Item name='explore' color='pink' active={activeItem === 'explore'} onClick={this.handleItemClick}
              style={{ paddingBottom: 20 + 'px' }} as={Link} to={'/posts'}>
              <Icon name='post' /> Search
            </Menu.Item>
          </div>}

          {this.props.userLogged &&
            <Menu.Item name='sign-in' color='pink' position='right'
              style={{ paddingBottom: 20 + 'px' }} onClick={this.logout}> Exit </Menu.Item>}

          {!this.props.userLogged && <div className='userNotLoggedNavbar'>
            <Login onLogged={this.handleLogin} />
          </div>}

        </Container>

      </Menu>
    );
  }
}

export default withRouter(Header);


