import React from 'react';
import { logout } from '../utils/auth';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  }

  click(e) { // eslint-disable-line class-methods-use-this
    e.preventDefault();
    logout();
    window.location.reload();
  }
  render() {
    return <button onClick={this.click}>LOGOUT</button>;
  }
}
