import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const middleware = [thunk];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(state => state, enhancer);

export default store;
