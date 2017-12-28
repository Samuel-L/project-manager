import React from 'react';

export default class TimerText extends React.Component {
	render() {
		return <h1 className='timer-text'>{this.props.children}</h1>
	}
}
