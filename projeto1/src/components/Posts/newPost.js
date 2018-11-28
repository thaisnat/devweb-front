import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class NewPost extends Component {
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
        <div className="App-newPost" htmlFor="text">
          <MuiThemeProvider>
            Qual é a sua duvida ?
            <TextField
              label="New Post"
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
NewPost.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default NewPost;