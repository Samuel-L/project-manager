import React from 'react';


export default class TimerClock extends React.Component {
	render() {
		return <div className='timer-clock'>
			{this.props.status} {this.props.children}
		</div>
	}
}
