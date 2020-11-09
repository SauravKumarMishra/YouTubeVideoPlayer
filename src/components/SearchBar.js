import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { text: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.text);
  };

  onInputChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <label htmlFor='search'>Search Videos:</label>
          <input
            type='text'
            id='search'
            value={this.state.text}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}
