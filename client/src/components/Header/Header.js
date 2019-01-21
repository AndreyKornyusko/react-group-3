import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import AuthNav from '../AuthNav/AuthNav';
import classes from './Header.module.css';

const Header = ({ isAuthenticated }) => (
  <header className={classes.header}>
    <AuthNav />
    <UserProfile />
  </header>
);

export default Header;
