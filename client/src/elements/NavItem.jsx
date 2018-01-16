import React from 'react';
import PropTypes from 'prop-types';

export default class NavItem extends React.Component {
  render() {
    return <li className="nav-item"><button className="nav-button" onClick={this.props.onClick}>{this.props.children}</button></li>;
  }
}

NavItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
