import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

export default class MainNav extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Nav bsStyle="pills" activeKey={1}>
				<NavItem eventKey={1}>Home</NavItem>
				<NavItem eventKey={2}>Students</NavItem>
				<NavItem eventKey={3}>Donors</NavItem>
				<NavItem eventKey={4}>Trips</NavItem>
			</Nav>
		);
	}
}
