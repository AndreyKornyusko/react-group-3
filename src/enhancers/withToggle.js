import React, { Component } from 'react';

const withToggle = WrappedComponent => {
  return class WithToggle extends Component {
    state = { on: false };

    toggle = () => this.setState(prevState => ({ on: !prevState.on }));

    render() {
      const { on } = this.state;

      return (
        <div>
          <button onClick={this.toggle}>{on ? 'Hide' : 'Show'}</button>
          {on && <WrappedComponent {...this.props} />}
        </div>
      );
    }
  };
};

export default withToggle;
