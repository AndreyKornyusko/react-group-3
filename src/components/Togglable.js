import { Component } from 'react';

export default class Togglable extends Component {
  state = { on: false };

  toggle = () => this.setState(prevState => ({ on: !prevState.on }));

  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle
    });
  }
}

// App.js
{
  /* <Togglable>
{({ on, toggle }) => (
  <div>
    <button onClick={toggle}>Toggle</button>
    {on && <TestComponent title="Title" text="Text" />}
  </div>
)}
</Togglable> */
}
