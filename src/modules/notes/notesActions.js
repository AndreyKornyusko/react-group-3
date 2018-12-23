import shortid from 'shortid';
import types from './noteActionTypes';

const addNote = text => ({
  type: types.ADD,
  payload: { id: shortid.generate(), text, completed: false },
});

const deleteNote = id => ({
  type: types.DELETE,
  payload: id,
});

const toggleNote = id => ({
  type: types.TOGGLE_COMPLETED,
  payload: id,
});

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});

export default { addNote, deleteNote, toggleNote, changeFilter };
