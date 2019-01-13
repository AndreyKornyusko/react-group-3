import { actionTypes } from '../actions';

export default function postReducer(state = [], { type, payload }) {
    switch (type) {
        case actionTypes.FETCH_POSTS:
            return payload.ids.posts;

        case actionTypes.DELETE_POST:
            return state.filter(id => id !== payload);

        default:
            return state;
    }
}
