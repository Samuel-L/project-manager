import { applyMiddleware, createStore, compose } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducer from './reducers';

const middleware = applyMiddleware(promise(), thunk);
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
export default createStore(reducer, composeEnhancers(middleware));
