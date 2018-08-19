import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const FourOhFour = () => <h1>404 rip</h1>;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              component={props => (
                <Landing
                  searchTerm={this.state.searchTerm}
                  handleSearchTermChange={this.handleSearchTermChange}
                  {...props}
                />
              )}
            />
            <Route
              path="/search"
              component={props => (
                <Search
                  shows={preload.shows}
                  {...props}
                  searchTerm={this.state.searchTerm}
                  handleSearchTermChange={this.handleSearchTermChange}
                />
              )}
            />
            <Route
              path="/details/:id"
              component={data => (
                <Details
                  show={preload.shows.find(show => data.match.params.id === show.imdbID)}
                  // Pass all the regular data into Details as well, because Details is a route and it would miss out on match, location and history
                  {...data}
                />
              )}
            />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
