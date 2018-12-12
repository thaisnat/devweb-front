import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: ["oi", "ola", "iai"],
      procura: [],
      wordText: "",
      message: false
    };
    this.updateWordText = this.updateWordText.bind(this);
    this.createText = this.updateWordText.bind(this);
    this.filterText = this.filterText.bind(this);
  }

  componentDidMount() {
    this.setState({
      procura: this.state.initial,
    });
  }

  updateWordText = e => {
    this.setState({
      wordText: e.target.value
    });
  }

  createText = e => {
    e.preventDefault();
    this.setState({
      procura: [this.state.procura, this.state.wordText],
      wordText: "",
    });
  }

  filterText = e => {
    const updateList = this.initial.filter((post => {
      return post.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    }));
    this.setState({
      procura: updateList,
    });
    if (updateList === 0) {
      this.setState({
        message: true,
      });
    } else {
      this.setState({
        message: false,
      })
    }
  }

  render() {
    const post = this.updateWordText;
    return (
      <div className="App-search">
        {post}
        {this.state.message ? <li>No search results.</li> : ""}
      </div >
    );
  }

}

export default Search;