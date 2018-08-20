import React, { Component } from 'react';
// import { shape, string } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Show from './types';

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class ShowCard extends Component {
  shouldComponentUpdate(/* nextProps */) {
    // return this.props.rating !== nextProps.rating
    // Once this component has rendered for the first time, never update it
    return false;
  }
  render() {
    return (
      <Wrapper to={`/details/${this.props.show.imdbID}`}>
        <Image
          src={`/public/img/posters/${this.props.show.poster}`}
          alt={`${this.props.show.title} Show Poster`}
        />
        <div>
          <h3>{this.props.show.title}</h3>
          <h4>({this.props.show.year})</h4>
          <p>{this.props.show.description}</p>
        </div>
      </Wrapper>
    );
  }
}

ShowCard.propTypes = {
  show: Show.isRequired,
};

export default ShowCard;
