import React, { Component } from 'react';
import { func, string } from 'prop-types';
import { connect } from 'react-redux';
import getApiDetails from './asyncActionCreators';
import Show from './types';
import Header from './Header';
import Spinner from './Spinner';

class Details extends Component {
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getApiData();
    }
  }

  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let ratingComponent;
    if (this.props.rating) {
      ratingComponent = <h3>{this.props.rating}</h3>;
    } else {
      ratingComponent = <Spinner />;
    }
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  rating: string.isRequired,
  show: Show.isRequired,
  getApiData: func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID]
    ? state.apiData[ownProps.show.imdbID]
    : { rating: '' };
  return {
    rating: apiData.rating,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getApiData() {
    dispatch(getApiDetails(ownProps.show.imdbID));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
