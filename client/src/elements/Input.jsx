import React from 'react';

export default class Input extends React.Component {
	render() {
		return <input
			className={`custom-input ${this.props.validated} ${this.props.customClasses}`}
			name={this.props.name}
			type={this.props.type}
			placeholder={this.props.placeholder}
			onChange={this.props.inputHandler}
			value={this.props.value}/>
	}
}
