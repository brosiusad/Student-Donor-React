import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// custom components
import Home from './home';
import MainNav from './main-nav';
import StudentHome from './student-home';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			students: [],
			student: {}
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
				<Route path="/students" 
					render={(r => <StudentHome students = {this.state.students} 
												getStudents = {this.getStudents.bind(this)} 
												student = {this.state.student} 
												getStudent = {this.getStudent.bind(this)}
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

	getStudent(id) {
		fetch('http://localhost:5000/students/' + parseInt(id, 10))
		  .then(response => {
		  	console.log('got response');
		    return response.json()
		  }).then(json => {
		  	console.log('parsed json: ' + json);
		  	this.setState({student: json});
		  	//return json;
		  }).catch(ex => {
		    console.log('parsing failed', ex)
		  })
	}

}