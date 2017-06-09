import React from 'react';
import { Row, Col, Clearfix } from 'react-bootstrap';
import { Button, Table } from 'react-bootstrap';

export default class StudentList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			students: []
		};
	}

	componentDidMount() {
		this.getStudents.call(this);
	}

	renderRows() {
		return this.state.students.map((student) =>
			<tr key={student.id}>
				<td><a href={"students/" + student.id}>{student.firstname} {student.lastname}</a></td>
				<td>{student.age}</td>
				<td>{student.street}</td>
				<td>{student.city}</td>
				<td>{student.state}</td>
				<td>{student.zip}</td>
			</tr>
		);
	}

	render() {
		return (
			<div>
			<Row>
				<Col md={6} mdPush={6} style={{textAlign: "right"}}>
						<Button bsStyle="success" href="/newStudent">New Student</Button>
				</Col>
				<Col md={6} mdPull={6}>
					<h3>Students</h3>
				</Col>
			</Row>

			<Row>
				<Table>
					<thead>
					  <tr>
					      <th>Name</th><th>Age</th><th>Street</th><th>City</th><th>State</th><th>Zip</th>
					  </tr>
					</thead>
					<tbody>
					    {this.renderRows()}
					</tbody>
				</Table>
			</Row>

			</div>
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