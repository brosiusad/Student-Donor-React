import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// custom components
import MainNav from './main-nav';
import Home from './home';
import StudentList from './student-list';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Router>
			<Grid>
				<Row>
					<Col md={6} mdPush={6} style={{textAlign: "right"}}>
						<h1>Donation Manager</h1>
					</Col>
					<Col md={6} mdPull={6} style={{marginTop: "20px"}}>
						<MainNav />
					</Col>
				</Row>

			<Route exact path="/" component={Home} />
			<Route exact path="/students" component={StudentList} />

			</Grid>


			</Router>
		);
	}
}