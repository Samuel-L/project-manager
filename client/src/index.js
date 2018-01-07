/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { loggedIn } from './utils/auth.js';

import Homepage from './layouts/Homepage.jsx';
import Dashboard from './layouts/Dashboard.jsx';
import './styles/main.scss';

import store from './store';

ReactDOM.render(<Provider store={store}>
  { loggedIn() ? <Dashboard /> : <Homepage /> }
</Provider>, document.getElementById('root'));
