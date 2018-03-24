/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';

import EntryPoint from './EntryPoint/index';

ReactDOM.render(<Provider store={store}>
  <EntryPoint />
</Provider>, document.getElementById('root'));
