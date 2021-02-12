import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import SearchPage from './Components/Search/Search.js';
import HomePage from './Components/Home/Home.js';
import Header from './Components/Header/Header.js';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/search"
              exact
              render={(routerProps) => <SearchPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

// export default App;
