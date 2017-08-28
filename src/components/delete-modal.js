import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class DeleteModal extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (

			<Modal show={this.props.show}>
				<Modal.Header>
					<Modal.Title>Confirm Deletion</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					Delete this {this.props.objectName}?
				</Modal.Body>

				<Modal.Footer>
					<Button bsStyle="danger" onClick={this.props.performDeletion}>Delete</Button>
					<Button onClick={this.props.closeDeleteModal}>Cancel</Button>
				</Modal.Footer>
			</Modal>

		);
	}
}