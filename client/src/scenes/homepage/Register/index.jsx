/*
 * This file (Register) is used in the entry point for the homepage scene.
 *
 * Register gets loaded when clicking on the 'Register' link in the
 * navigation bar.
 *
 * The route to this is '/register' and does not require you to be
 * logged in.
*/

import React from 'react';

import './layout.scss';
import './styles.scss';

export default class Register extends React.Component {
  render() {
    return (
      <div className="register-container">
        <h1>SIGN UP</h1>
        <form className="registration-form">
          <label className="input-label" htmlFor="username">Username</label>
          <input id="username" name="username" type="text" />

          <label className="input-label" htmlFor="email">Email</label>
          <input id="email" name="email" type="text" />

          <label className="input-label" htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />

          <label className="input-label" htmlFor="password-control">Confirm password</label>
          <input id="password-control" name="password-control" type="password" />

          <input name="submit" type="submit" value="SIGN UP" />
        </form>
      </div>
    );
  }
}
