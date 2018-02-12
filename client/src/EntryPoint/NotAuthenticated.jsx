import React from 'react';

import { Route } from 'react-router-dom';

import Register from '../views/Register';
import Login from '../views/Login';
import Home from '../views/Home';

import NotAuthNav from '../components/NavBars/NotAuthNav/index';

const NotAuthenticated = () => (
  <div className="not-auth-container">
    <NotAuthNav />
    <div className="content">
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </div>
  </div>
);

export default NotAuthenticated;
