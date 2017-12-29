import React from 'react';

import Input from '../elements/Input';

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordRetyped: '',
      passwordValidated: null,
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
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
      case 'password-retyped':
        this.setState({ passwordRetyped: e.target.value }, this.validatePassword);
        break;
      // no default
    }
  }

  validatePassword() {
    if (this.state.password === this.state.passwordRetyped && this.state.password !== '' &&
    this.state.passwordRetyped !== '') {
      this.setState({ passwordValidated: true });
    } else if (this.state.password !== this.state.passwordRetyped && this.state.password !== '' &&
      this.state.passwordRetyped !== '') {
      this.setState({ passwordValidated: false });
    }
  }

  render() {
    return (
      <form className="modal-form">
        <Input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="Username"
          inputHandler={this.inputHandler}
        /><br />
        <span>required</span>
        <Input
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Email"
          inputHandler={this.inputHandler}
        /><br />
        <span>not required, recommended in case of password loss</span>
        <Input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          inputHandler={this.inputHandler}
          validated={this.state.passwordValidated === true ? 'passw-validated' : 'passw-novalidated'}
        /><br />
        <span>required</span>
        <Input
          type="password"
          name="password-retyped"
          value={this.state.passwordRetyped}
          placeholder="Retype password"
          inputHandler={this.inputHandler}
          validated={this.state.passwordValidated === true ? 'passw-validated' : 'passw-novalidated'}
        /><br />
        <span>required</span>
        <Input type="submit" value="Sign up" customClasses="sign-button" />
      </form>
    );
  }
}
