import React from 'react';
import PropTypes from 'prop-types';

export default class TimerClock extends React.Component {
  render() {
    return (
      <div className="timer-clock">
        {this.props.status} {this.props.children}
      </div>
    );
  }
}

TimerClock.propTypes = {
  status: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
