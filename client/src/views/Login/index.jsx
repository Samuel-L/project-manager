import React from 'react';
import { connect } from 'react-redux';

import loginUser from '../../actions/login';

// eslint-disable-next-line arrow-body-style
@connect((store) => {
  return {
    loggedIn: store.login.loggedIn,
  };
})
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputHandler(e) {
    switch (e.target.name) {
      case 'username':
        this.setState({ username: e.target.value });
        break;
      case 'password':
        this.setState({ password: e.target.value });
      // no default
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.dispatch(loginUser(username, password)); // eslint-disable-line react/prop-types
  }

  render() {
    return (
      <div className="login-container">
        <h1>SIGN IN</h1>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div>
            <label className="input-label" htmlFor="username">Username</label>
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.inputHandler} />
          </div>
          <div>
            <label className="input-label" htmlFor="password">Password</label>
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.inputHandler} />
          </div>
          <input name="submit" type="submit" value="SIGN IN" />
        </form>
      </div>
    );
  }
}
