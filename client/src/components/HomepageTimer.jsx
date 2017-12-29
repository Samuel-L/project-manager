import React from 'react';

import TimerText from '../elements/TimerText.jsx';
import TimerType from '../elements/TimerType.jsx';
import TimerClock from '../elements/TimerClock.jsx';

import { convertTime } from '../utils/convert-time.js';

import NormalTimerSettings from './NormalTimerSettings.jsx';
import PomodoroTimerSettings from './PomodoroTimerSettings.jsx';

export default class HomepageTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNormal: true,
      activePomodoro: false,
      timerPaused: false,
      time: 0,
      alertDisabled: false,
      alertTime: 5,
      checked: 'yes',
      workTime: 25,
      shortBreak: 10,
      longBreak: 30,
      repeatCycle: 2,
      currentCycle: 0,
      currentStage: 0,
      pomodoroSettingsDisabled: false,
      status: 'Stopped',
    }

    this.alertSound = new Audio('./alert.mp3');

    this.tick = this.tick.bind(this);
    this.changeTimerType = this.changeTimerType.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.alertDisabledHandler = this.alertDisabledHandler.bind(this);
    this.alertTimeHandler = this.alertTimeHandler.bind(this);
    this.pomodoroSettingsHandler = this.pomodoroSettingsHandler.bind(this);
  }

  changeTimerType(e) {
    let timerType = e.currentTarget.textContent;
    if (timerType == 'Normal') {
      this.setState({
        activeNormal: true,
        activePomodoro: false,
        time: 0,
      });
    }
    else {
      this.setState({
        activeNormal: false,
        activePomodoro: true,
        time: this.state.workTime * 60000,
      });
    }
  }

  startTimer() {
    if (this.state.activePomodoro) {
      this.setState({
        time: this.state.workTime * 60000,
        pomodoroSettingsDisabled: true,
      });
    }
    if (this.state.timerPaused) {
      this.setState({ timerPaused: false });
    }
    if (this.state.status != 'Working') {
      this.setState({ status: 'Working' });
      this.timer = setInterval(this.tick, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.timer);
    this.setState({
      time: 0,
      currentCycle: 0,
      currentStage: 0,
      pomodoroSettingsDisabled: false,
      status: 'Stopped',
    })
  }

  pauseTimer() {
    clearInterval(this.timer);
    this.setState({
      timerPaused: true,
      status: 'Paused',
    });
  }

  alertDisabledHandler(e) {
    let checked = e.target.value;
    let alertDisabled;
    if (checked == 'no') {
      alertDisabled = true;
    }
    else {
      alertDisabled = false;
    }

    this.setState({alertDisabled: alertDisabled, checked: checked});
  }

  alertTimeHandler(e) {
    this.setState({alertTime: e.target.value});
  }

  pomodoroSettingsHandler(e) {
    switch (e.target.name) {
      case 'work-time':
        this.setState({workTime: e.target.value, time: e.target.value * 60000});
        break;
      case 'short-break-time':
        this.setState({shortBreak: e.target.value});
        break;
      case 'long-break-time':
        this.setState({longBreak: e.target.value});
        break;
      case 'repeat':
        this.setState({repeatCycle: e.target.value});
        break;
    }
  }

  tick() {
    if (this.state.activeNormal) {
      if (!this.state.timerPaused) {
        this.setState({ time: this.state.time + 1000 });

        if (!this.state.alertDisabled) {
          let alertTime = Math.round(this.state.time / 1000) / 60
          if ((alertTime % this.state.alertTime) == 0) {
            this.alertSound.play();
          }
        }
      }
    }
    else {
      if (!this.state.timerPaused) {
        if (this.state.time == 0) {
          if (this.state.currentStage == 7 && (this.state.currentCycle + 1) < this.state.repeatCycle) {
            if (!this.state.alertDisabled) { this.alertSound.play(); }
            this.setState({
              currentStage: 1,
              currentCycle: this.state.currentCycle + 1,
              time: this.state.workTime * 60000,
              status: 'Working',
            });
          }
          else if (this.state.currentStage == 7 && (this.state.currentCycle + 1) == this.state.repeatCycle) {
            if (!this.state.alertDisabled) { this.alertSound.play(); }
            this.stopTimer();
          }
          else if (this.state.currentStage == 6) {
            if (!this.state.alertDisabled) { this.alertSound.play(); }
            this.setState({
              currentStage: this.state.currentStage + 1,
              time: this.state.longBreak * 60000,
              status: 'Long break',
            });
          }
          else if (this.state.currentStage % 2 == 1) {
            if (!this.state.alertDisabled) { this.alertSound.play(); }
            this.setState({
              currentStage: this.state.currentStage + 1,
              time: this.state.workTime * 60000,
              status: 'Working',
            });
          }
          else if (this.state.currentStage % 2 == 0) {
            if (!this.state.alertDisabled) { this.alertSound.play(); }
            this.setState({
              currentStage: this.state.currentStage +  1,
              time: this.state.shortBreak * 60000,
              status: 'Short break',
            });
          }
        }
        this.setState({ time: this.state.time - 1000 })
      }
    }
  }

  render() {
    return <div className='homepage-timer'>
      <div className='timer'>
        <TimerText>What would you like to time today?</TimerText>
        <TimerClock status={this.state.status}>{convertTime(this.state.time)}</TimerClock>
        <div className='timer-buttons'>
          <div className='timer-types'>
            <TimerType isActive={this.state.activeNormal} clickAction={this.changeTimerType}>Normal</TimerType>
            <TimerType isActive={this.state.activePomodoro} clickAction={this.changeTimerType}>Pomodoro</TimerType>
          </div>
          <div className='actionButtons'>
            <button onClick={this.startTimer}>Run</button>
            <button onClick={this.stopTimer}>Stop</button>
            <button onClick={this.pauseTimer}>Pause</button>
          </div>
        </div>
        {
          this.state.activeNormal
          ?
          <NormalTimerSettings
            checked = {this.state.checked}
            disabledHandler={this.alertDisabledHandler}
            alertTimeHandler={this.alertTimeHandler}
            disabled={this.state.alertDisabled}
            defaultValue={this.state.alertTime} />
          :
          <PomodoroTimerSettings
            checked = {this.state.checked}
            disabledHandler={this.alertDisabledHandler}
            defaultWorkTime={this.state.workTime}
            defaultShortBreakTime={this.state.shortBreak}
            defaultLongBreakTime={this.state.longBreak}
            defaultRepeatValue={this.state.repeatCycle}
            pomodoroSettingsHandler={this.pomodoroSettingsHandler}
            disabled={this.state.pomodoroSettingsDisabled}
          />
        }
      </div>
    </div>
  }
}
