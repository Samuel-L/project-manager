import React from 'react';
import PropTypes from 'prop-types';

export default class TimerType extends React.Component {
  render() {
    return (
      <div
        className={this.props.isActive ? 'timer-type timer-type-active' : 'timer-type'}
        onClick={this.props.clickAction}
      >
        {this.props.children}
      </div>);
  }
}

TimerType.propTypes = {
  isActive: PropTypes.bool.isRequired,
  clickAction: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
