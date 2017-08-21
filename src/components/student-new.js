import React from 'react';
import ReactDOM from 'react';
import { Modal, Button, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';

export default class StudentNew extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			student: {
				firstname: '',
				lastname: '',
				street: '',
				city: '',
				state: '',
				zip: '',
				age: ''
			}
		}

		this.saveStudent = this.saveStudent.bind(this);
	}

	saveStudent(event) {
		const student = {
			firstname: this.firstnameNode.value,
			lastname: this.lastnameNode.value,
			age: this.ageNode.value,
			street: this.streetNode.value,
			city: this.cityNode.value,
			state: this.stateNode.value,
			zip: this.zipNode.value
		}

		console.log(student);
		this.props.saveStudent(student);
		this.props.closeModal();
	}

	render() {
		return (
			<Modal show={this.props.show}>
				<Modal.Header>
					<Modal.Title>Add a Student</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form horizontal>
						<FormGroup controlId="firstname">
							<Col componentClass={ControlLabel} sm={4}>
								First Name
							</Col>
							<Col sm={8}>
								<FormControl type="text" inputRef={input => {this.firstnameNode = input}} placeholder="First Name" />
							</Col>
						</FormGroup>
						<FormGroup controlId="lastname">
							<Col componentClass={ControlLabel} sm={4}>
								Last Name
							</Col>
							<Col sm={8}>
								<FormControl type="text" inputRef={input => {this.lastnameNode = input}} placeholder="Last Name" />
							</Col>
						</FormGroup>
						<FormGroup controlId="age">
							<Col componentClass={ControlLabel} sm={4}>
								Age
							</Col>
							<Col sm={8}>
								<FormControl type="text" inputRef={input => {this.ageNode = input}} placeholder="Age" />
							</Col>
						</FormGroup>
						<FormGroup controlId="street">
							<Col componentClass={ControlLabel} sm={4}>
								City
							</Col>
							<Col sm={8}>
								<FormControl type="text" inputRef={input => {this.streetNode = input}} placeholder="Street" />
							</Col>
						</FormGroup>
						<FormGroup controlId="city">
							<Col componentClass={ControlLabel} sm={4}>
								City
							</Col>
							<Col sm={8}>
								<FormControl type="text" inputRef={input => {this.cityNode = input}} placeholder="City" />
							</Col>
						</FormGroup>
						<FormGroup controlId="state">
							<Col componentClass={ControlLabel} sm={4}>
								State
							</Col>
							<Col sm={8}>
								<FormControl type="text" inputRef={input => {this.stateNode = input}} placeholder="State" />
							</Col>
						</FormGroup>
						<FormGroup controlId="zip">
							<Col componentClass={ControlLabel} sm={4}>
								Zip
							</Col>
							<Col sm={8}>
								<FormControl type="text" inputRef={input => {this.zipNode = input}} placeholder="Zip" />
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
