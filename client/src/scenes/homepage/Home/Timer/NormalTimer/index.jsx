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
      alert: true,
      alertTime: 5,
    };

    this.alertSound = new Audio('./alert.mp3'); // eslint-disable-line no-undef

    this.tick = this.tick.bind(this);
    this.run = this.run.bind(this);
    this.stop = this.stop.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
    this.alertHandler = this.alertHandler.bind(this);
    this.settingHandler = this.settingHandler.bind(this);
  }

  tick() {
    this.setState({ ms: this.state.ms + 1000 });

    const timeInMinutes = Math.round(this.state.ms / 1000) / 60;
    if ((timeInMinutes % this.state.alertTime) === 0 ) { this.alertSound.play(); }
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

  alertHandler() {
    if (this.state.alert) {
      this.setState({ alert: false });
    } else {
      this.setState({ alert: true });
    }
  }

  settingHandler(e) {
    if (e.target.name === "alert-time") {
      this.setState({ alertTime: e.target.value });
    }
  }

  render() {
    return (
      <div className="timer-container">
        <h2 className="clock">{convertTime(this.state.ms)}</h2>
        <h2 className="status">{this.state.status}</h2>

        <div className="timer-buttons">
          <div className="action-buttons">
            { this.state.status === 'Stopped'
              ?
                <button className="action-button" onClick={this.run}>Run</button>
              :
                <button className="action-button" onClick={this.resume}>Resume</button>
            }
            <button className="action-button" onClick={this.stop}>Stop</button>
            <button className="action-button" onClick={this.pause}>Pause</button>
          </div>
        </div>

        <div className="settings">
          <form>
            <fieldset disabled={this.state.status !== "Stopped"}>
              <div className="setting">
                <span className="settings-description">Alert</span>
                <label className="radio-label" htmlFor="radio-no">No
                  <input
                    id="radio-no"
                    type="radio"
                    name="alert"
                    checked={!this.state.alert}
                    onChange={this.alertHandler}
                  />
                </label>
                <label className="radio-label" htmlFor="radio-yes">Yes
                  <input
                    id="radio-yes"
                    type="radio"
                    name="alert"
                    checked={this.state.alert}
                    onChange={this.alertHandler}
                  />
                </label>
                { this.state.alert
                  ?
                    <div className="setting">
                      <label className="setting-description" htmlFor="alert-time">Every (minutes)
                        <input
                          id="alert-time"
                          type="number"
                          name="alert-time"
                          value={this.state.alertTime}
                          onChange={this.settingHandler}
                        />
                      </label>
                    </div>
                  :
                    null
                }
              </div>
            </fieldset>
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
