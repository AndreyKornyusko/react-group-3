import React, { Component } from 'react';
import Form from '../common/Form/Form';
import Input from '../common/Input/Input';
import Label from '../common/Label/Label';
import Button from '../common/Button/Button';

const INITIAL_STATE = { login: '', email: '', password: '' };

export default class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label text="Login">
          <Input
            type="text"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </Label>

        <Label text="Email">
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="example@mail.com"
          />
        </Label>

        <Label text="Password">
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Sign up" type="submit" />
      </Form>
    );
  }
}
