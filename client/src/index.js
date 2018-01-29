/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Homepage from './scenes/homepage/index';
import Dashboard from './scenes/Dashboard/index';
import { loggedIn } from './scenes/homepage/Login/auth';

import store from './store';

import './reset.scss';

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    { !loggedIn() ? <Homepage /> : <Dashboard /> }
  </BrowserRouter>
</Provider>, document.getElementById('root'));
