import React, { Component } from 'react';
import { func, shape } from 'prop-types';
import Spinner from './Spinner';

class AsyncRoute extends Component {
  state = {
    loaded: false,
  };
  componentDidMount() {
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }
  component = null;
  render() {
    if (this.state.loaded) {
      // We are passing the props to the props property
      return <this.component {...this.props.props} />;
    }
    return <Spinner />;
  }
}

AsyncRoute.propTypes = {
  loadingPromise: shape({
    then: func,
  }).isRequired,
  props: shape().isRequired,
};

export default AsyncRoute;
