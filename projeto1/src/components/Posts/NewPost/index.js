import React, { Component } from "react";
import PropTypes from "prop-types";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = event => {
    this.setState({
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
       <label className="new-post_label" htmlFor="text">
        New post
       </label>
       <input
         id="text"
         className="new-post_text"
         name="text"
         onChange={this.handleChange}
         value={text}
      />
      <input
      className="new-post_submit"
      type="submit"
      value="Enviar"
      />
      </form>
    );
  }
}

NewPost.PropTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default NewPost;