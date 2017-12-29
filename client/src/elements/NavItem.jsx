import React from 'react';

export default class NavItem extends React.Component {
	render() {
		return <li className='nav-item'><a href='#' onClick={this.props.onClick}>{this.props.children}</a></li>
	}
}
