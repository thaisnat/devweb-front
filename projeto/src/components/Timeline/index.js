import React, { Component } from 'react';
import NewPost from '../Posts/NewPost';
import ListPost from '../Posts/ListPost';
import logo from '../../dv.gif';

class Timeline extends Component {
  render() {
    return (
      <div className="App-timeline">
        <img src={logo} alt="loading..." className="App-logo" />
        <NewPost />
        <ListPost />
      </div>
    );
  }
}

export default Timeline;