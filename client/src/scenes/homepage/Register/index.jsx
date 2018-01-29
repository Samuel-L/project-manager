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
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { registerUser, resetRegistrationState } from './actions';

import ErrorMsg from '../../shared/ErrorMsg/index';

import './layout.scss';
import './styles.scss';

// eslint-disable-next-line arrow-body-style
@connect((store) => {
  return {
    userRegistered: store.registration.registered,
    registrationError: store.registration.error,
  };
})
export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordControl: '',
      passwordValidated: false,
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(resetRegistrationState());
  }

  inputHandler(e) {
    switch (e.target.name) {
      case 'username':
        this.setState({ username: e.target.value });
        break;
      case 'email':
        this.setState({ email: e.target.value });
        break;
      case 'password':
        this.setState({ password: e.target.value });
        break;
      case 'password-control':
        this.setState({ passwordControl: e.target.value }, this.validatePassword);
        break;
      // no default
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password, email } = this.state;
    if (this.state.passwordValidated) {
      this.props.dispatch(resetRegistrationState());
      this.props.dispatch(registerUser(username, password, email));
    }
  }

  validatePassword() {
    if (this.state.password === this.state.passwordControl && this.state.password !== '' && this.state.passwordControl !== '') {
      this.setState({ passwordValidated: true });
    } else if (this.state.password !== this.state.passwordControl && this.state.password !== '' && this.state.passwordControl !== '') {
      this.setState({ passwordValidated: false });
    }
  }

  render() {
    return (
      <div className="register-container">
        { this.props.userRegistered ? <h1 className="success">Registration successful!</h1> : <h1>SIGN UP</h1> }
        { this.props.registrationError ? <ErrorMsg error={this.props.registrationError} /> : null }
        { !this.props.userRegistered
          ?
            <form className="registration-form" onSubmit={this.handleSubmit}>
              <label className="input-label" htmlFor="username">Username</label>
              <input id="username" name="username" type="text" onChange={this.inputHandler} value={this.state.username} />

              <label className="input-label" htmlFor="email">Email</label>
              <input id="email" name="email" type="text" onChange={this.inputHandler} value={this.state.email} />

              <label className="input-label" htmlFor="password">Password</label>
              <input id="password" name="password" type="password" onChange={this.inputHandler} value={this.state.password} />

              <label className="input-label" htmlFor="password-control">Confirm password</label>
              <input id="password-control" name="password-control" type="password" onChange={this.inputHandler} value={this.state.passwordControl} />

              <input name="submit" type="submit" value="SIGN UP" />
            </form>
          :
            null
        }
      </div>
    );
  }
}

Register.propTypes = {
  userRegistered: PropTypes.bool,
  registrationError: PropTypes.string,
  dispatch: PropTypes.func, // eslint-disable-line react/require-default-props
};

Register.defaultProps = {
  userRegistered: false,
  registrationError: '',
};
