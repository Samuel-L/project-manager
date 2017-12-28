import React from 'react';

import NavigationBar from '../components/NavigationBar.jsx';
import HomepageTimer from '../components/HomepageTimer.jsx';
import HomepageFeatures from '../components/HomepageFeatures.jsx';

export default class Homepage extends React.Component {
	render() {
		return <div className='home-container'>
				<NavigationBar/>
				<HomepageTimer/>
				<HomepageFeatures/>
			</div>
	}
}
