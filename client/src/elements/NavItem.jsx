import React from 'react';

export default class NavItem extends React.Component {
	render() {
		return <li className='nav-item'><a href='#'>{this.props.children}</a></li>
	}
}
