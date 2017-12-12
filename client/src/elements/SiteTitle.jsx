import React from 'react';

export default class SiteTitle extends React.Component {
	render() {
		return <h2 className='site-title'>{this.props.children}</h2>
	}
}
