import React from 'react';

import NormalTimer from '../../components/Timers/Normal/index';
import PomodoroTimer from '../../components/Timers/Pomodoro/index';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      selected: 'Normal',
    };

    this.handler = this.handler.bind(this);
  }

  handler(e) {
    const type = e.target.innerHTML;

    if (type === 'Normal') {
      this.setState({ selected: 'Normal' });
    } else {
      this.setState({ selected: 'Pomodoro' });
    }
  }

  render() {
    return (
      <div className="home-container">
        <div className="timer-types">
          <span
            className={(this.state.selected === 'Normal'
              ?
                'normal-timer timer timer-focused'
              :
                'normal-timer timer'
            )}
            onClick={this.handler}
          >
            Normal
          </span>
          <span
            className={(this.state.selected === 'Pomodoro'
              ?
                'pomodoro-timer timer timer-focused'
              :
                'pomodoro-timer timer'
            )}
            onClick={this.handler}
          >
            Pomodoro
          </span>
        </div>
        { this.state.selected === 'Normal' ? <NormalTimer /> : <PomodoroTimer /> }
      </div>
    );
  }
}
