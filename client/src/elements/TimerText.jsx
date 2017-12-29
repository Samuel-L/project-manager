import React from 'react';
import PropTypes from 'prop-types';

export default class TimerText extends React.Component {
  render() {
    return <h1 className="timer-text">{this.props.children}</h1>;
  }
}

TimerText.propTypes = {
  children: PropTypes.string.isRequired,
};
