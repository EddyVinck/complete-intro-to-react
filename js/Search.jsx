import React, { Component } from 'react';
import { arrayOf } from 'prop-types';
import Show from './types';

import ShowCard from './ShowCard';
import Header from './Header';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
    // this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <Header
          showSearch
          searchTerm={this.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toLowerCase()
                  .indexOf(this.state.searchTerm.toLowerCase()) > -1
            )
            .map(show => <ShowCard key={show.imdbID} show={show} />)}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  shows: arrayOf(Show).isRequired,
};

export default Search;
