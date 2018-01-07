import React from 'react';

import { login, loggedIn } from '../utils/auth';
let auth = require('../utils/auth');

import Input from '../elements/Input';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
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
        break;
      // no default
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    console.log(username, password);
    auth.login(username, password, (loggedIn) => {
      if(auth.loggedIn) {
        window.location.reload();
        return true;
      }
    });
  }

  render() {
    return (
      <form className="modal-form" onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="Username"
          inputHandler={this.inputHandler}
        /><br />
        <Input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          inputHandler={this.inputHandler}
        /><br />
        <Input name="submit-button" type="submit" value="Sign in" customClasses="sign-button" />
      </form>
    );
  }
}
