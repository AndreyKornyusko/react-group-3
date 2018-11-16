import React, { Component } from 'react';

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0
  };

  state = {
    value: this.props.initialValue
  };

  handleIncrement = evt => {
    this.setState((prevState, props) => ({
      value: prevState.value + props.step
    }));
  };

  handleDecrment = evt => {
    this.setState((prevState, props) => ({
      value: prevState.value - props.step
    }));
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;

    return (
      <div>
        <span>{value}</span>
        <button onClick={this.handleIncrement}>Increment by {step}</button>
        <button onClick={this.handleDecrment}>Decrement by {step}</button>
      </div>
    );
  }
}
