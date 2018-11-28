import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class NewAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = event => {
    this.setState(
      {
        text: event.target.value
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    const { text } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="App-newAnswer" htmlFor="text">
          <MuiThemeProvider>
            <TextField
              label="New Answer"
              variant="outlined"
              id="text"
              className="App-text"
              name="text"
              onChange={this.handleChange}
              value={text}
            />
          </MuiThemeProvider>
        </div>
      </form>


    );
  }
}
NewAnswer.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default NewAnswer;