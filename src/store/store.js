import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootModule from '../modules/rootModule';

const enhancer = composeWithDevTools();

const store = createStore(rootModule, enhancer);

export default store;
