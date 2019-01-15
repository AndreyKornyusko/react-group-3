import { combineReducers } from 'redux';
import { actionTypes } from '../actions';

function ids(state = [], { type, payload }) {
    switch (type) {
        case actionTypes.ADD_TO_CART:
            return state.includes(payload.id) ? state : [...state, payload.id];

        case actionTypes.REMOVE_FROM_CART:
            return state.filter(id => id !== payload.id);

        default:
            return state;
    }
}

function amount(state = {}, { type, payload }) {
    switch (type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                [payload.id]: state[payload.id] ? state[payload.id] + 1 : 1,
            };

        case actionTypes.REMOVE_FROM_CART: {
            const { [payload.id]: _, ...newState } = state;

            return newState;
        }

        default:
            return state;
    }
}

export default combineReducers({
    ids,
    amount,
});
