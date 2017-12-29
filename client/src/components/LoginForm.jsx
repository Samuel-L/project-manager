import React from 'react';

import Input from '../elements/Input.jsx';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

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
    }
  }

  render() {
    return 	<form className='modal-form'>
  						<Input type='text' name='username' placeholder='Username'
                inputHandler={this.inputHandler}/><br/>
  						<Input type='password' name='password' placeholder='Password'
                inputHandler={this.inputHandler}/><br/>

              <Input type='submit' value="Sign in" customClasses='sign-button'/>
            </form>
  }
}
