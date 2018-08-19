import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bool, string, func } from 'prop-types';

class Header extends Component {
  componentDidMount() {
    this.searchInput.focus();
    const val = this.searchInput.value;
    this.searchInput.value = '';
    this.searchInput.value = val;
  }
  render() {
    let utilSpace;
    if (this.props.showSearch) {
      utilSpace = (
        <input
          ref={input => {
            this.searchInput = input;
          }}
          key="searchShow"
          onChange={this.props.handleSearchTermChange}
          value={this.props.searchTerm}
          type="text"
          placeholder="search"
        />
      );
    } else {
      utilSpace = <h2><Link to="/search">Back</Link></h2>;
    }
    return (
      <header>
        <h1><Link to="/">svideo</Link></h1>
        {utilSpace}
      </header>
    );
  }
}

Header.defaultProps = {
  showSearch: false,
  searchTerm: '',
  handleSearchTermChange: function noop() {},
};
Header.propTypes = {
  showSearch: bool,
  searchTerm: string,
  handleSearchTermChange: func,
};

export default Header;
