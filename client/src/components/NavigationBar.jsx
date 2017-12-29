import React from 'react';

import SiteTitle from '../elements/SiteTitle.jsx';
import NavItem from '../elements/NavItem.jsx';

import Modal from './Modal.jsx';
import RegistrationForm from './RegistrationForm.jsx';

export default class NavigationBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			registrationModalOpen: true,
		}

		this.modalHandler = this.modalHandler.bind(this);
	}

	modalHandler() {
		if (!this.state.registrationModalOpen) {
			this.setState({registrationModalOpen: true})
		}
		else {
			this.setState({registrationModalOpen: false})
		}
	}

	render() {
		return <div className='nav-bar'>
				<SiteTitle>SITE TITLE</SiteTitle>
				<ul className='nav-items'>
					<NavItem>login</NavItem>
					<NavItem onClick={this.modalHandler}>register</NavItem>
				</ul>
				<Modal
					modalID='register-modal'
					isOpen={this.state.registrationModalOpen}
					modalHandler={this.modalHandler}>
						<h1>Register</h1>
						<RegistrationForm />
					</Modal>
			</div>
	}
}
