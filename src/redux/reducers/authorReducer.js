import { combineReducers } from 'redux';
import { actionTypes } from '../actions';

function ids(state = [], { type, payload }) {
    switch (type) {
        case actionTypes.FETCH_POSTS:
            return payload.ids.authors;

        default:
            return state;
    }
}

function selectedId(state = null, { type, payload }) {
    switch (type) {
        case actionTypes.SELECT_AUTHOR:
            return payload;

        default:
            return state;
    }
}

export default combineReducers({
    ids,
    selectedId,
});
