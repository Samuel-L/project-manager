import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { checkLoginStatus } from '../actions/login';

import Authenticated from './Authenticated';
import NotAuthenticated from './NotAuthenticated';

import '../styles/main.scss';

class EntryPoint extends Component {
  componentDidMount() {
    this.props.checkLoginStatus();
  }

  render() {
    const loggedIn = this.props.login;
    return (
      loggedIn ?
        <BrowserRouter>
          <Authenticated />
        </BrowserRouter>
        :
        <BrowserRouter>
          <NotAuthenticated />
        </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  checkLoginStatus: () => dispatch(checkLoginStatus()),
});

EntryPoint.propTypes = {
  checkLoginStatus: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryPoint);
