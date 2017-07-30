import React from 'react';
import { Row, Col, Clearfix, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


const styles = {
    floatRight: {
        float: "right"
    }
}

export default class StudentList extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getStudents();
		console.log(this.props.location);
	}

	renderRows() {
		return this.props.students.map((student) =>
			<tr key={student.id}>
				<td><LinkContainer to={`/students/${student.id}`}><Button bsStyle="link">{student.firstname} {student.lastname}</Button></LinkContainer></td>
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
					<LinkContainer to="/student/new" style={styles.floatRight}><Button bsStyle="success">New Student</Button></LinkContainer>
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

}