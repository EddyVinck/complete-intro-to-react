import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { func, string } from 'prop-types';

class Landing extends Component {
  componentDidMount() {
    this.searchInput.focus();
    const val = this.searchInput.value;
    this.searchInput.value = '';
    this.searchInput.value = val;
  }
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
        />
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

Landing.defaultProps = {
  handleSearchTermChange: function noop() {},
  searchTerm: '',
};

Landing.propTypes = {
  handleSearchTermChange: func,
  searchTerm: string,
};

export default Landing;
