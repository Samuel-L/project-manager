import React from 'react';
import { Route } from 'react-router-dom';

import Overview from '../views/Overview';
import Projects from '../views/Projects';

import AuthNav from '../components/NavBars/AuthNav/index';

const Authenticated = () => (
  <div className="auth-container">
    <AuthNav />
    <div className="content">
      <Route exact path="/" component={Overview} />
      <Route exact path="/projects" component={Projects} />
    </div>
  </div>
);

export default Authenticated;
