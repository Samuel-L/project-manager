import React from 'react';

import Input from '../elements/Input';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.inputHandler = this.inputHandler.bind(this);
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
