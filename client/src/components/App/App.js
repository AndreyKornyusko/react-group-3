import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignIn, SignUp } from '../../pages';
import Header from '../Header/Header';

const App = () => (
  <div className="App">
    <Header />

    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  </div>
);

export default App;
