import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class MainNav extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Nav bsStyle="pills" activeKey={1}>
				<LinkContainer to="/"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
				<LinkContainer to="/students"><NavItem eventKey={2}>Students</NavItem></LinkContainer>
				<LinkContainer to="/donors"><NavItem eventKey={3}>Donors</NavItem></LinkContainer>
				<LinkContainer to="/trips"><NavItem eventKey={4}>Trips</NavItem></LinkContainer>
			</Nav>
		);
	}
}
