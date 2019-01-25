import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { SignIn, SignUp } from '../../pages';
import Header from '../Header/Header';
import * as operations from '../../redux/operations';

class App extends Component {
  componentDidMount() {
    this.props.refreshCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  null,
  { refreshCurrentUser: operations.refreshCurrentUser }
)(App);
