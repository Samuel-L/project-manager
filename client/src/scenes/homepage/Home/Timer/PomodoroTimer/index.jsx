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
export default class PomodoroTimer extends React.Component {
  constructor() {
    super();
    this.state = {
      ms: 0,
      workTime: 25,
      shortBreak: 10,
      longBreak: 30,
      repeatCycle: 2,
      stage: 0,
      cycle: 0,
      status: 'Stopped',
      alert: true,
    };

    this.alertSound = new Audio('./alert.mp3'); // eslint-disable-line no-undef

    this.alertHandler = this.alertHandler.bind(this);
    this.settingsHandler = this.settingsHandler.bind(this);
    this.pause = this.pause.bind(this);
    this.stop = this.stop.bind(this);
    this.resume = this.resume.bind(this);
    this.run = this.run.bind(this);
    this.tick = this.tick.bind(this);
  }

  alertHandler() {
    if (this.state.alert) {
      this.setState({ alert: false });
    } else {
      this.setState({ alert: true });
    }
  }

  componentWillMount() {
    this.setState({ ms: this.state.workTime * 60000 });
  }

  settingsHandler(e) {
    switch (e.target.name) {
      case 'work-time':
        this.setState({
          ms: e.target.value * 60000,
          workTime: e.target.value,
        });
        break;
      case 'short-break-time':
        this.setState({ shortBreak: e.target.value });
        break;
      case 'long-break-time':
        this.setState({ longBreak: e.target.value });
        break;
      case 'repeat':
        this.setState({ repeatCycle: e.target.value });
        break;
      // no default
    }
  }

  pause() {
    if (this.props.running) {
      this.props.dispatch(pauseTimer());
      clearInterval(this.timer);
      this.setState({ status: 'Paused' });
    }
  }

  stop() {
    this.props.dispatch(endTimer());
    clearInterval(this.timer);
    this.setState({
      ms: this.state.workTime * 60000,
      cycle: 0,
      stage: 0,
      status: 'Stopped',
    });
  }

  resume() {
    if (!this.props.running) {
      const { pausedStartTime, totalPausedTime } = this.props;
      this.props.dispatch(resumeTimer(pausedStartTime, totalPausedTime));
      this.setState({ status: 'Work' });
      this.timer = setInterval(this.tick, 1000);
    }
  }

  run() {
    if (!this.props.running) {
      this.props.dispatch(startTimer());
      this.setState({
        ms: this.state.workTime * 60000,
        status: 'Work',
      });
      this.timer = setInterval(this.tick, 1000);
    }
  }

  tick() {
    if (this.state.ms === 0) {
      if (this.state.alert) { this.alertSound.play(); }

      if (this.state.stage === 7 && (this.state.cycle + 1) < this.state.repeatCycle) {
        this.setState({
          stage: 1,
          cycle: this.state.cycle + 1,
          ms: this.state.workTime * 60000,
          status: 'Work',
        });
      } else if (this.state.stage === 7 && (this.state.cycle + 1) === this.state.repeatCycle) {
        this.stop();
      } else if (this.state.stage === 6) {
        this.setState({
          stage: this.state.stage + 1,
          ms: this.state.longBreak * 60000,
          status: 'Long Break',
        });
      } else if (this.state.stage % 2 === 1) {
        this.setState({
          stage: this.state.stage + 1,
          ms: this.state.workTime * 60000,
          status: 'Work',
        });
      } else if (this.state.stage % 2 === 0) {
        this.setState({
          stage: this.state.stage + 1,
          ms: this.state.shortBreak * 60000,
          status: 'Short break',
        });
      }
    }
    this.setState({ ms: this.state.ms - 1000 });
  }

  render() {
    return (
      <div className="timer-container">
        <h2 className="clock">{convertTime(this.state.ms)}</h2>
        <h2 className="status">{this.state.status}</h2>

        <div className="timer-buttons">
          <div className="action-buttons">
            { this.state.status === "Stopped"
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
            <div className="setting">
              <span className="setting-description">Alert</span>
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
            </div>
            <div className="setting">
              <label htmlFor="work-time" className="setting-description">Work Time
                <input
                  id="work-time"
                  type="number"
                  name="work-time"
                  value={this.state.workTime}
                  onChange={this.settingsHandler}
                />
              </label>
            </div>
            <div className="setting">
              <label htmlFor="short-break-time" className="setting-description">Pause time (1-3rd pomodoro)
                <input
                  id="short-break-time"
                  type="number"
                  name="short-break-time"
                  value={this.state.shortBreak}
                  onChange={this.settingsHandler}
                />
              </label>
            </div>
            <div className="setting">
              <label htmlFor="long-break-time" className="setting-description">Break time (4th pomodoro)
                <input
                  id="long-break-time"
                  type="number"
                  name="long-break-time"
                  value={this.state.longBreak}
                  onChange={this.settingsHandler}
                />
              </label>
            </div>
            <div className="setting">
              <label htmlFor="repeat" className="setting-description">Repeat cycle
                <input
                  id="repeat"
                  type="number"
                  name="repeat"
                  value={this.state.repeatCycle}
                  onChange={this.settingsHandler}
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
