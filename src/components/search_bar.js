import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  onInputChange = term => {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  };

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          onChange={event => this.onInputChange(event.target.value)}
        />
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default SearchBar;
