import React from 'react';

export default class TimerType extends React.Component {
	render() {
		return <div 
			className={this.props.isActive ? 'timer-type timer-type-active' : 'timer-type'} 
			onClick={this.props.clickAction}
			>
				{this.props.children}
			</div>
	}
}
