import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from '../components/home/Header/Header';
import Home from '../components/home/Home';
import Post from '../components/Posts/Post';
import ListPost from '../components/Posts/ListPost';

import { Api } from '../services/Api';

class Router extends Component {
  constructor(props) {
    super(props);

    this.state = { userLogged: false, checked: false };

    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    let statusUser = localStorage.getItem('userLogged');

    if (statusUser == null) {
      this.setState({ userLogged: false, checked: true });
    } else if (statusUser === 'true') {
      Api.get('/api/auth')
        .then(response => {
          if (response.status === 200) {
            if (response.data.status) {
              this.setState({ userLogged: true, checked: true });
            } else {
              this.setState({ userLogged: false, checked: true });
            }
          }
        });
    } else {
      this.setState({ userLogged: statusUser === 'false', checked: true });
    }
  }

  handleLogin = loggedUser => {
    this.setState({ userLogged: loggedUser });

    localStorage.setItem('userLogged', loggedUser);
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {this.state.checked && <Header userLogged={this.state.userLogged} login={this.handleLogin} />}

            <Switch>
              {this.state.checked && <Route exact path='/' render={() => (<Home userLogged={this.state.userLogged} />)} />}
              <Route exact path="/post/:postId" component={Post} />
              <Route exact path="/listpost/:listpostId" component={ListPost} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
