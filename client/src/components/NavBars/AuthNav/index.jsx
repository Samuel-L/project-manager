import React from 'react';
import { Link } from 'react-router-dom';

export default class NotAuthNav extends React.Component {
  render() {
    return (
      <div className="auth-nav">
        <h1 className="username-display">Username</h1>
        <ul className="nav-links">
          <li className="link link-selected">
            <Link to="/">Overview</Link>
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
