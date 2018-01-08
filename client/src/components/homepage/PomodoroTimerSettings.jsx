import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../../elements/Tooltip';

export default class PomodoroTimerSettings extends React.Component {
  render() {
    return (
      <div className="timer-settings-pomodoro timer-settings">
        <form className="alert-settings">
          <Tooltip
            tooltipText="Alert"
            tooltipContent="A sound will be played when timer reaches 00:00."
          />
          <input
            type="radio"
            name="alert"
            value="yes"
            checked={this.props.checked === 'yes'}
            onChange={this.props.disabledHandler}
          /> Yes
          <input
            type="radio"
            name="alert"
            value="no"
            checked={this.props.checked === 'no'}
            onChange={this.props.disabledHandler}
          /> No
        </form>
        <form className="pomodoro-settings">
          <fieldset disabled={this.props.disabled}>
            <input
              type="number"
              name="work-time"
              value={this.props.defaultWorkTime}
              onChange={this.props.pomodoroSettingsHandler}
            /> Work time
            <br />
            <input
              type="number"
              name="short-break-time"
              value={this.props.defaultShortBreakTime}
              onChange={this.props.pomodoroSettingsHandler}
            /> Short break time (1-3 pomodoros)
            <br />
            <input
              type="number"
              name="long-break-time"
              value={this.props.defaultLongBreakTime}
              onChange={this.props.pomodoroSettingsHandler}
            /> Long break time (4th pomodoro)
            <br />
            <input
              type="number"
              name="repeat"
              value={this.props.defaultRepeatValue}
              onChange={this.props.pomodoroSettingsHandler}
            /> Repeat cycle
            <br />
          </fieldset>
        </form>
      </div>
    );
  }
}

PomodoroTimerSettings.propTypes = {
  checked: PropTypes.string.isRequired,
  disabledHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  pomodoroSettingsHandler: PropTypes.func.isRequired,
  defaultWorkTime: PropTypes.number,
  defaultShortBreakTime: PropTypes.number,
  defaultLongBreakTime: PropTypes.number,
  defaultRepeatValue: PropTypes.number,
};

PomodoroTimerSettings.defaultProps = {
  defaultWorkTime: 25,
  defaultShortBreakTime: 5,
  defaultLongBreakTime: 20,
  defaultRepeatValue: 4,
};
