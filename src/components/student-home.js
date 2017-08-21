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
												getStudents = {this.props.getStudents} 
												saveStudent = {this.props.saveStudent}
												{...r} />
							)}
				/>

				<Route path="/students/:id" 
					render={(r => <StudentDetail student={this.props.student} 
												getStudent = {this.props.getStudent} 
												{...r} />
							)} 
				/>
			</Switch>

		);
	}
}