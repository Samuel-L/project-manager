/*
 * This is the entry point for the homepage scene.
 *
 * Down below is the navigation bar. In the div with the class 'content'
 * is where the rest of the page will be loaded.
 *
*/

import React from 'react';
import { Link, Route } from 'react-router-dom';

import Register from './Register/index';
import Login from './Login/index';
import Home from './Home/index';

import './layout.scss';
import './styles.scss';

export default class HomepageEntry extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="nav-bar">
          <h1 className="site-title">SiteTitle</h1>
          <ul className="nav-links">
            <li className="link">
              <Link to="/register">Register</Link>
            </li>
            <li className="link">
              <Link to="/login">Login</Link>
            </li>
            <li className="link">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Route path="/register" component={Home} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Register} />
        </div>
      </div>
    );
  }
}
