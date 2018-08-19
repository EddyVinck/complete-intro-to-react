import React from 'react';
import { Link } from 'react-router-dom';
import { bool, string, func } from 'prop-types';

const Header = props => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        key="searchShow"
        onChange={props.handleSearchTermChange}
        value={props.searchTerm}
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
};

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
