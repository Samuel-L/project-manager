import React from 'react';
import { Link } from 'react-router-dom';

export default class NotAuthNav extends React.Component {
  render() {
    return (
      <div className="not-auth-nav">
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
    );
  }
}
