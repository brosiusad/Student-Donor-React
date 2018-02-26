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
			student: {
				id: '',
				firstname: '',
				lastname: '',
				street: '',
				city: '',
				state: '',
				zip: '',
				age: ''
			}
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
												clearStudent = {this.clearStudent.bind(this)}
												getStudents = {this.getStudents.bind(this)} 
												student = {this.state.student} 
												getStudent = {this.getStudent.bind(this)} 
												createStudent = {this.createStudent.bind(this)}
												updateStudent = {this.updateStudent.bind(this)}
												deleteStudent = {this.deleteStudent.bind(this)}
												{...r} />
					)}
				/>
			</Switch>
			</Grid>


			</Router>
		);
	}

	clearStudent() {
		this.setState({
			student: {
				id: '',
				firstname: '',
				lastname: '',
				street: '',
				city: '',
				state: '',
				zip: '',
				age: ''
			}
		});
	}

	getStudents() {
		fetch('http://localhost:5001/students')
		  .then(response => {
		  	console.log('got response');
		    return response.json()
		  }).then(json => {
		  	console.log('parsed json: ' + json);
		  	this.setState({students: json});
		  }).catch(ex => {
		    console.log('parsing failed', ex)
		  })
	}

	getStudent(id) {
		fetch('http://localhost:5001/students/' + parseInt(id, 10))
		  .then(response => {
		  	console.log('got response');
		    return response.json()
		  }).then(json => {
		  	console.log('parsed json: ' + json);
		  	this.setState({student: json});
		  }).catch(ex => {
		    console.log('parsing failed', ex)
		  })
	}

	createStudent(student) {
		fetch('http://localhost:5001/students/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(student)
		}).then(response => {
			console.log(response);

			// re-fetch students from server
			this.getStudents();
		})
	}

	updateStudent(student) {
		fetch('http://localhost:5001/students/' + parseInt(student.id, 10), {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(student)
		}).then(response => {
			console.log(response);

			// re-fetch student from server
			this.getStudent(student.id);
		})
	}

	deleteStudent(id) {
		fetch('http://localhost:5001/students/' + parseInt(id, 10), {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response => {
			console.log(response);

			// re-fetch students from server
			this.getStudents();
		})
	}

}