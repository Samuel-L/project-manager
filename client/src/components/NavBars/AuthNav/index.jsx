import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import LogoutButton from '../../LogoutButton/index';

const Nav = withRouter(props => <NotAuthNav {...props} />);

class NotAuthNav extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    this.pathname = this.props.location.pathname;

    return (
      <div className="auth-nav">
        <h1 className="username-display">Username</h1>
        <ul className="nav-links">
          <li
            className={this.pathname === '/' ? 'link link-selected' : 'link'}
          >
            <Link to="/">Overview</Link>
          </li>
          <li
            className={this.pathname === '/projects' ? 'link link-selected' : 'link'}
          >
            <Link to="/projects">Projects</Link>
          </li>
          <li
            className={this.pathname === '/reports' ? 'link link-selected' : 'link'}
          >
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
