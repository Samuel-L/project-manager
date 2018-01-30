import React from 'react';
import { Link, Route } from 'react-router-dom';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="nav-bar">
          <span className="username-display">Username</span>
          <ul className="nav-links">
            <li className="link">
              <Link to="/">Overview</Link>
            </li>
            <li className="link">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="link">
              <Link to="/reports">Reports</Link>
            </li>
            <li className="link">
              <Link to="/calendar">Calendar</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Route exact path="/" />
        </div>
      </div>
    );
  }
}
