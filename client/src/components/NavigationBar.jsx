import React from 'react';

import SiteTitle from '../elements/SiteTitle.jsx';
import NavItem from '../elements/NavItem.jsx';

export default class NavigationBar extends React.Component {
	render() {
		return <div className='nav-bar'>
				<SiteTitle>SITE TITLE</SiteTitle>
				<ul className='nav-items'>
					<NavItem>login</NavItem>
					<NavItem>register</NavItem>
				</ul>
			</div>
	}
}
