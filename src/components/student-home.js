import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StudentList from './student-list';
import StudentDetail from './student-detail';

export default class StudentHome extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (

			<Switch>
				<Route exact path="/students" 
					render={(r => <StudentList students = {this.props.students} 
												student = {this.props.student}
												clearStudent = {this.props.clearStudent}
												getStudents = {this.props.getStudents} 
												createStudent = {this.props.createStudent}
												{...r} />
							)}
				/>

				<Route path="/students/:id" 
					render={(r => <StudentDetail student={this.props.student} 
												getStudent = {this.props.getStudent} 
												updateStudent = {this.props.updateStudent}
												deleteStudent = {this.props.deleteStudent}
												{...r} />
							)} 
				/>
			</Switch>

		);
	}
}