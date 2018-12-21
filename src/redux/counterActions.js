import types from './actionTypes';

const increment = value => ({
  type: types.INCREMENT,
  payload: value
});

const decrement = value => ({
  type: types.DECREMENT,
  payload: value
});

const reset = () => ({
  type: types.RESET
});

const changeStep = step => ({
  type: types.CHANGE_STEP,
  payload: step
});

export { increment, decrement, reset, changeStep };
