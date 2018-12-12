import React, { Component } from 'react';
import './user.css';

class user extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="User">
        <img style={{ borderRadius: 30 + '%' }} src={this.props.photo} />
      </div>
    );
  }
}

export default user;