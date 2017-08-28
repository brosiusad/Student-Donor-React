import React from 'react';
import { Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import DeleteModal from './delete-modal'

const styles = {
    floatRight: {
        float: "right"
    },

    alignRight: {
        textAlign: "right"
    },

    borderBottom: {
        borderBottom: "1px solid grey"
    },

    addMargin: {
        marginTop: "8px"
    }
}

export default class StudentDetail extends React.Component {

	constructor(props) {
		super(props);

        this.state = {
            showDeleteModal: false
        }

        this.openDeleteModal = this.openDeleteModal.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);
	}

	componentDidMount() {
		this.props.getStudent(this.props.match.params.id);
	}

    openDeleteModal() {
        this.setState({
            showDeleteModal: true
        });
    }

    closeDeleteModal() {
        this.setState({
            showDeleteModal: false
        });
    }

    performDeletion() {
        this.props.deleteStudent(this.props.student.id);
        this.closeDeleteModal();
        this.props.history.push('/students');
    }

	render () {
        const student = this.props.student;
		return (
            <div>

            <DeleteModal show={this.state.showDeleteModal} 
                objectName="Student"
                closeDeleteModal={this.closeDeleteModal.bind(this)} 
                performDeletion={this.performDeletion.bind(this)}/>

            <Row style={styles.borderBottom}>
                <Col md={6} mdPush={6} style={styles.alignRight}>
                    <ButtonToolbar style={styles.floatRight}>
                        <LinkContainer to="/student/edit/:id" ><Button>Edit Student</Button></LinkContainer>
                        <Button bsStyle="danger" onClick={this.openDeleteModal}>Delete</Button>
                    </ButtonToolbar>
                </Col>
                <Col md={6} mdPull={6}>
                    <h3>{`${student.firstname} ${student.lastname}`}</h3>
                </Col>
            </Row>

            <Row style={styles.addMargin}>
                <Col md={2} style={styles.alignRight}><label>First Name</label></Col>
                <Col md={4}><div>{student.firstname}</div></Col>
                <Col md={2} style={styles.alignRight}><label>Street</label></Col>
                <Col md={4}><div>{student.street}</div></Col>
            </Row>

            <Row style={styles.addMargin}>
                <Col md={2} style={styles.alignRight}><label>Last Name</label></Col>
                <Col md={4}><div>{student.lastname}</div></Col>
                <Col md={2} style={styles.alignRight}><label>Cite</label></Col>
                <Col md={4}><div>{student.city}</div></Col>
            </Row>

            <Row style={styles.addMargin}>
                <Col md={2} style={styles.alignRight}><label>Age</label></Col>
                <Col md={4}><div>{student.age}</div></Col>
                <Col md={2} style={styles.alignRight}><label>State</label></Col>
                <Col md={4}><div>{student.state}</div></Col>
            </Row>

            <Row style={styles.addMargin}>
                <Col md={6} />
                <Col md={2} style={styles.alignRight}><label>Zip</label></Col>
                <Col md={4}><div>{student.zip}</div></Col>
            </Row>
            </div>
		);
	}
}