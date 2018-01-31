/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import NotAuthNav from './components/NavBars/NotAuthNav/index';

import Register from './views/Register/index';
import Login from './views/Login/index';
import Home from './views/Home/index';

import store from './store';

import './styles/main.scss';

class NotAuthenticated extends React.Component {
  render() {
    return (
      <div className="not-auth-container">
        <NotAuthNav />
        <div className="content">
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <NotAuthenticated />
  </BrowserRouter>
</Provider>, document.getElementById('root'));
