import React from 'react';
import ReactDOM from 'react';
import { Modal, Button, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';

export default class StudentEdit extends React.Component {

	constructor(props) {
		super(props);

		this.saveStudent = this.saveStudent.bind(this);
	}

	saveStudent(event) {
		const student = {
			id: this.props.student.id, // use saved ID
			firstname: this.firstnameNode.value,
			lastname: this.lastnameNode.value,
			age: this.ageNode.value,
			street: this.streetNode.value,
			city: this.cityNode.value,
			state: this.stateNode.value,
			zip: this.zipNode.value
		}

		console.log(student);

		if (this.props.mode == 'new') {
			this.props.createStudent(student);
		} else {
			this.props.updateStudent(student);
		}

		this.props.closeModal();
	}

	render() {
		const student = this.props.student;
		return (
			<Modal show={this.props.show}>
				<Modal.Header>
					<Modal.Title>{this.props.mode == 'new' ? 'Add a Student' : 'Edit ' + student.firstname + ' ' + student.lastname}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form horizontal>
						<FormGroup controlId="firstname">
							<Col componentClass={ControlLabel} sm={4}>
								First Name
							</Col>
							<Col sm={8}>
								<FormControl type="text" defaultValue={student.firstname} inputRef={input => {this.firstnameNode = input}} placeholder="First Name" />
							</Col>
						</FormGroup>
						<FormGroup controlId="lastname">
							<Col componentClass={ControlLabel} sm={4}>
								Last Name
							</Col>
							<Col sm={8}>
								<FormControl type="text" defaultValue={student.lastname} inputRef={input => {this.lastnameNode = input}} placeholder="Last Name" />
							</Col>
						</FormGroup>
						<FormGroup controlId="age">
							<Col componentClass={ControlLabel} sm={4}>
								Age
							</Col>
							<Col sm={8}>
								<FormControl type="text" defaultValue={student.age} inputRef={input => {this.ageNode = input}} placeholder="Age" />
							</Col>
						</FormGroup>
						<FormGroup controlId="street">
							<Col componentClass={ControlLabel} sm={4}>
								Street
							</Col>
							<Col sm={8}>
								<FormControl type="text" defaultValue={student.street} inputRef={input => {this.streetNode = input}} placeholder="Street" />
							</Col>
						</FormGroup>
						<FormGroup controlId="city">
							<Col componentClass={ControlLabel} sm={4}>
								City
							</Col>
							<Col sm={8}>
								<FormControl type="text" defaultValue={student.city} inputRef={input => {this.cityNode = input}} placeholder="City" />
							</Col>
						</FormGroup>
						<FormGroup controlId="state">
							<Col componentClass={ControlLabel} sm={4}>
								State
							</Col>
							<Col sm={8}>
								<FormControl type="text" defaultValue={student.state} inputRef={input => {this.stateNode = input}} placeholder="State" />
							</Col>
						</FormGroup>
						<FormGroup controlId="zip">
							<Col componentClass={ControlLabel} sm={4}>
								Zip
							</Col>
							<Col sm={8}>
								<FormControl type="text" defaultValue={student.zip} inputRef={input => {this.zipNode = input}} placeholder="Zip" />
							</Col>
						</FormGroup>
					</Form>
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={this.props.closeModal}>Cancel</Button>
					<Button type="submit" onClick={this.saveStudent}>Save</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}
