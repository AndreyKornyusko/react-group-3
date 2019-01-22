import React from 'react';
import { connect } from 'react-redux';
import UserProfile from '../UserProfile/UserProfile';
import AuthNav from '../AuthNav/AuthNav';
import classes from './Header.module.css';

import * as selectors from '../../redux/selectors';
import * as operations from '../../redux/operations';

const Header = ({ isAuthenticated, user, onSignOut }) => (
  <header className={classes.header}>
    {isAuthenticated ? (
      <UserProfile onSignOut={onSignOut} user={user} />
    ) : (
      <AuthNav />
    )}
  </header>
);

const mapState = state => ({
  isAuthenticated: selectors.isAuthenticated(state),
  user: selectors.getUser(state)
});

const mapDispatch = {
  onSignOut: operations.signOut
};

export default connect(
  mapState,
  mapDispatch
)(Header);
