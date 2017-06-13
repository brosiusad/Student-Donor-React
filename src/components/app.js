import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// custom components
import MainNav from './main-nav';
import Home from './home';
import StudentList from './student-list';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			students: []
		};
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

			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/students" 
					render={(r => <StudentList students = {this.state.students} 
												getStudents = {this.getStudents.bind(this)}
												{...r} />
					)}
				/>
			</Switch>
			</Grid>


			</Router>
		);
	}

	getStudents() {
		fetch('http://localhost:5000/students')
		  .then(response => {
		  	console.log('got response');
		    return response.json()
		  }).then(json => {
		  	console.log('parsed json: ' + json);
		  	this.setState({students: json});
		  	//return json;
		  }).catch(ex => {
		    console.log('parsing failed', ex)
		  })
	}

}