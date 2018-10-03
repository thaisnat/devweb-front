import React, { Component } from 'react';
const React = require('react');
const ReactDomServer = require('react-dom/server');

class Code extends Component {
    constructor() {
        super();
        this.state = {
            bold: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            bold: !this.state.bold
        });
    }

    render() {
        return (
            <code onClick={this.handleClick}>
                {this.state.bold ? this.props.plus : ""} {this.props.children}
            </code>
        );
    }
}

class Title extends React.Component {
  render() {
    return <div>Bem Vindo ao Sistema de Monitoria Online !! </div>;
  }
}

ReactDOMServer.renderToString(<Title />);

export default Code;