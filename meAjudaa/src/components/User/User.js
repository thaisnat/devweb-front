import React, { Component } from 'react';
import './user.css';

class user extends Component {
  render() {
    return (
      <div className="User">
        <img alt={true} style={{ borderRadius: 30 + '%' }} src={this.props.photo} />
      </div>
    );
  }
}

export default user;