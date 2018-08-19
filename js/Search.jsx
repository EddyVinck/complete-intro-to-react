import React, { Component } from 'react';
import { arrayOf, func, string } from 'prop-types';
import Show from './types';

import ShowCard from './ShowCard';
import Header from './Header';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }
  render() {
    return (
      <div className="search">
        <Header
          key="searchHeader"
          showSearch
          searchTerm={this.props.searchTerm}
          handleSearchTermChange={this.props.handleSearchTermChange}
        />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toLowerCase()
                  .indexOf(this.props.searchTerm.toLowerCase()) > -1
            )
            .map(show => <ShowCard key={show.imdbID} show={show} />)}
        </div>
      </div>
    );
  }
}

Search.defaultProps = {
  handleSearchTermChange: function noop() {},
  searchTerm: '',
};

Search.propTypes = {
  shows: arrayOf(Show).isRequired,
  handleSearchTermChange: func,
  searchTerm: string,
};

export default Search;
