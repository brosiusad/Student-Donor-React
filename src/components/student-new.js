import React from 'react';
import { Modal, Button, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';

export default class StudentNew extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Modal show={this.props.show}>
				<Modal.Header>
					<Modal.Title>Add a Student</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form horizontal>
						<FormGroup controlId="firstName">
							<Col componentClass={ControlLabel} sm={4}>
								First Name
							</Col>
							<Col sm={8}>
								<FormControl type="text" placeholder="First Name" />
							</Col>
						</FormGroup>
						<FormGroup controlId="lastName">
							<Col componentClass={ControlLabel} sm={4}>
								Last Name
							</Col>
							<Col sm={8}>
								<FormControl type="text" placeholder="Last Name" />
							</Col>
						</FormGroup>
						<FormGroup controlId="age">
							<Col componentClass={ControlLabel} sm={4}>
								Age
							</Col>
							<Col sm={8}>
								<FormControl type="text" placeholder="Age" />
							</Col>
						</FormGroup>
						<FormGroup controlId="city">
							<Col componentClass={ControlLabel} sm={4}>
								City
							</Col>
							<Col sm={8}>
								<FormControl type="text" placeholder="City" />
							</Col>
						</FormGroup>
						<FormGroup controlId="state">
							<Col componentClass={ControlLabel} sm={4}>
								State
							</Col>
							<Col sm={8}>
								<FormControl type="text" placeholder="State" />
							</Col>
						</FormGroup>
						<FormGroup controlId="zip">
							<Col componentClass={ControlLabel} sm={4}>
								Zip
							</Col>
							<Col sm={8}>
								<FormControl type="text" placeholder="Zip" />
							</Col>
						</FormGroup>
					</Form>
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={this.props.closeModal}>Cancel</Button><Button>Save</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}
