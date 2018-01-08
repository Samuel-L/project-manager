import React from 'react';

import SiteTitle from '../../elements/SiteTitle';
import NavItem from '../../elements/NavItem';

import Modal from './Modal';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationModalOpen: false,
      loginModalOpen: false,
    };

    this.registerModalHandler = this.registerModalHandler.bind(this);
    this.loginModalHandler = this.loginModalHandler.bind(this);
  }

  registerModalHandler() {
    if (!this.state.registrationModalOpen) {
      this.setState({ registrationModalOpen: true });
    } else {
      this.setState({ registrationModalOpen: false });
    }
  }

  loginModalHandler() {
    if (!this.state.loginModalOpen) {
      this.setState({ loginModalOpen: true });
    } else {
      this.setState({ loginModalOpen: false });
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <SiteTitle>SITE TITLE</SiteTitle>
        <ul className="nav-items">
          <NavItem onClick={this.loginModalHandler}>login</NavItem>
          <NavItem onClick={this.registerModalHandler}>register</NavItem>
        </ul>
        <Modal
          modalID="register-modal"
          isOpen={this.state.registrationModalOpen}
          modalHandler={this.registerModalHandler}
        >
          <div className="register-container">
            <h1>Register</h1>
            <RegistrationForm />
          </div>
        </Modal>
        <Modal
          modalID="login-modal"
          isOpen={this.state.loginModalOpen}
          modalHandler={this.loginModalHandler}
        >
          <div className="login-container">
            <h1>Login</h1>
            <LoginForm />
          </div>
        </Modal>
      </div>
    );
  }
}
