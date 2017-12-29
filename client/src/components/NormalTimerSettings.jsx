import React from 'react';

import Tooltip from '../elements/Tooltip.jsx';

export default class NormalTimerSettings extends React.Component {
	render() {
		return <div className='timer-settings-normal timer-settings'>
				<form className='alert-settings'>
					<Tooltip
						tooltipText='Alert'
						tooltipContent='A sound will be played every nth minutes.'/>
					<input
						type='radio'
						name='alert'
						value='yes'
						checked={this.props.checked === 'yes'}
						onChange={this.props.disabledHandler}/> Yes
					<input
						type='radio'
						name='alert'
						value='no'
						checked={this.props.checked === 'no'}
						onChange={this.props.disabledHandler}/> No
					<br/>
					<input
						className='alert-time'
						type='number'
						name='alert-time'
						value={this.props.defaultValue}
						onChange={this.props.alertTimeHandler}
						disabled={this.props.disabled}/> minutes
				</form>
			</div>
	}
}