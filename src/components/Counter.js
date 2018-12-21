import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterActions';

const Counter = ({ value, step, increment, decrement, reset }) => (
  <div style={{ textAlign: 'center', padding: 16 }}>
    <h1>{value}</h1>
    <br />
    <button onClick={() => increment(step)}>Increment</button>
    <button onClick={() => decrement(step)}>Decrement</button>
    <button onClick={reset}>Reset</button>
  </div>
);

const mapStateToProps = state => ({
  value: state.counterValue,
  step: state.step
});

// const mapDispatchToProps = dispatch => ({
//   increment: value => dispatch(counterActions.increment(value)),
//   decrement: value => dispatch(counterActions.decrement(value)),
//   reset: () => dispatch(counterActions.reset())
// });

const mapDispatchToProps = { increment, decrement, reset };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
