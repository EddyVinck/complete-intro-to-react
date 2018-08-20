import React from 'react';
import { arrayOf, string } from 'prop-types';
import { connect } from 'react-redux';

import Show from './types';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = props => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(
          show =>
            `${show.title} ${show.description}`
              .toLowerCase()
              .indexOf(props.searchTerm.toLowerCase()) > -1
        )
        .map(show => <ShowCard key={show.imdbID} show={show} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

Search.defaultProps = {
  searchTerm: '',
};

Search.propTypes = {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: arrayOf(Show).isRequired,
};

export default connect(mapStateToProps)(Search);
