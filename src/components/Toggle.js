import React, { Component } from 'react';

export default class Toggle extends Component {
  state = { on: false };

  toggle = () => {
    this.setState(prevState => ({ on: !prevState.on }));
  };

  render() {
    const { on } = this.state;
    const { children } = this.props;

    return (
      <div>
        <button onClick={this.toggle}>{on ? 'Hide' : 'Show'}</button>
        {on && children}
      </div>
    );
  }
}
