import React, { Component } from 'react';
import { func, string } from 'prop-types';

class Landing extends Component {
  componentDidMount() {
    this.searchInput.focus();
    const val = this.searchInput.value;
    this.searchInput.value = '';
    this.searchInput.value = val;
  }
  handleSearchSubmit = event => {
    if (event.keyCode === 13) {
      this.props.history.push('/search');
    }
  };
  handleBrowseAll = event => {
    event.preventDefault();
    this.props.resetSearchTerm();
    this.props.history.push('/search');
  };
  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <input
          ref={input => {
            this.searchInput = input;
          }}
          type="text"
          placeholder="search"
          value={this.props.searchTerm}
          onChange={this.props.handleSearchTermChange}
          onKeyDown={this.handleSearchSubmit}
        />
        <div style={{ 'margin-top': '10px' }}>or</div>
        <a href="/search" onClick={this.handleBrowseAll}>Browse All</a>
      </div>
    );
  }
}

Landing.defaultProps = {
  handleSearchTermChange: function noop() {},
  resetSearchTerm: function noop() {},
  searchTerm: '',
};

Landing.propTypes = {
  handleSearchTermChange: func,
  resetSearchTerm: func,
  searchTerm: string,
  history: func.isRequired,
};

export default Landing;
