import React, { Component } from 'react';

const GENDERS = {
  male: 'male',
  female: 'female'
};

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreedToTerms: false,
  gender: null,
  age: ''
};

export default class SignupForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    // console.log('e.target.name: ', e.target.name);
    // console.log('e.target.value: ', e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAgreeChange = ({ target }) => {
    const { checked } = target;

    this.setState({
      agreedToTerms: checked
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreedToTerms, gender, age } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="login"
          value={login}
          onChange={this.handleChange}
          placeholder="Login"
        />
        <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <br />
        <label>
          Agree to terms
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={this.handleAgreeChange}
          />
        </label>
        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === GENDERS.male}
              name="gender"
              value={GENDERS.male}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === GENDERS.female}
              name="gender"
              value={GENDERS.female}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
        <hr />
        <button disabled={!agreedToTerms}>Signup as {login}</button>
      </form>
    );
  }
}
