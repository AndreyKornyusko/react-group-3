import React, { Component } from 'react';
import SignInForm from '../components/SignInForm/SignInForm';

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
          Please enter your credentials
        </h1>
        <SignInForm />
      </div>
    );
  }
}
