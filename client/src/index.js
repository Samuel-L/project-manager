/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './scenes/homepage/index';

import store from './store';

import './reset.scss';

/*ReactDOM.render(<Provider store={store}>
  { loggedIn() ? <Dashboard /> : <Homepage /> }
</Provider>, document.getElementById('root'));*/
ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <Navigation />
  </BrowserRouter>
</Provider>, document.getElementById('root'));
