/*
 * This is the component for the normal timer that can be seen on the homepage.
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { startTimer, endTimer, pauseTimer, resumeTimer } from '../actions';
import { convertTime } from '../utils';

import './styles.scss';

// eslint-disable-next-line arrow-body-style
@connect((store) => {
  return {
    startTime: store.timer.startTime,
    endTime: store.timer.endTime,
    pausedStartTime: store.timer.pausedStartTime,
    pausedTimeTotal: store.timer.pausedTimeTotal,
    running: store.timer.running,
  };
})
export default class NormalTimer extends React.Component {
  constructor() {
    super();

    this.state = {
      ms: 0,
      status: 'Stopped',
    };

    this.tick = this.tick.bind(this);
    this.run = this.run.bind(this);
    this.stop = this.stop.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
  }

  tick() {
    this.setState({ ms: this.state.ms + 1000 });
  }

  run() {
    if (!this.props.running) {
      this.props.dispatch(startTimer());
      this.timer = setInterval(this.tick, 1000);

      this.setState({ status: 'Work' });
    }
  }

  stop() {
    this.props.dispatch(endTimer());
    this.setState({
      ms: 0,
      status: 'Stopped',
    });
    clearInterval(this.timer);
  }

  pause() {
    if (this.props.running) {
      this.props.dispatch(pauseTimer());
      this.setState({ status: 'Paused' });
      clearInterval(this.timer);
    }
  }

  resume() {
    if (!this.props.running) {
      const { pausedStartTime, totalPausedTime } = this.props;
      this.props.dispatch(resumeTimer(pausedStartTime, totalPausedTime));

      this.timer = setInterval(this.tick, 1000);
    }
  }

  render() {
    return (
      <div className="timer-container">
        <h2 className="clock">{convertTime(this.state.ms)}</h2>
        <h2 className="status">{this.state.status}</h2>

        <div className="timer-buttons">
          <div className="action-buttons">
            { (this.props.running && this.props.startTime)
              ?
                <button className="action-button" onClick={this.resume}>Resume</button>
              :
                <button className="action-button" onClick={this.run}>Run</button>
            }
            <button className="action-button" onClick={this.stop}>Stop</button>
            <button className="action-button" onClick={this.pause}>Pause</button>
          </div>
        </div>

        <div className="settings">
          <form>
            <span className="alert-setting-text">Alert</span>
            <input type="radio" true name="alert" /> Yes
            <input type="radio" false name="alert" /> No
          </form>
        </div>
      </div>
    );
  }
}

NormalTimer.propTypes = {
  pausedStartTime: PropTypes.number.isRequired,
  totalPausedTime: PropTypes.number.isRequired,
  running: PropTypes.bool.isRequired,
  startTime: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};
