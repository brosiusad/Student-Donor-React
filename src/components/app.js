import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

// custom components
import MainNav from './main-nav';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Grid>
				<Row>
					<Col md={6} mdPush={6} style={{textAlign: "right"}}>
						<h1>Donation Manager</h1>
					</Col>
					<Col md={6} mdPull={6} style={{marginTop: "20px"}}>
						<MainNav />
					</Col>
				</Row>
			</Grid>
		);
	}
}