import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
		console.log(this.props);
	}

	componentDidMount() {
		console.log(this.props);
		this.props.getStudent(this.props.match.params.id);
	}

	render () {
		return (
            <div>
            <Row style={styles.borderBottom}>
                <Col md={6} mdPush={6} style={styles.alignRight}>
                    <LinkContainer to="/student/edit/:id" style={styles.floatRight}><Button>Edit Student</Button></LinkContainer>
                </Col>
                <Col md={6} mdPull={6}>
                    <h3>{`${this.props.student.firstname} ${this.props.student.lastname}`}</h3>
                </Col>
            </Row>

            <Row style={styles.addMargin}>
                <Col md={2} style={styles.alignRight}><label>First Name</label></Col>
                <Col md={4}><div>{this.props.student.firstname}</div></Col>
                <Col md={2} style={styles.alignRight}><label>Street</label></Col>
                <Col md={4}><div>{this.props.student.street}</div></Col>
            </Row>

            <Row style={styles.addMargin}>
                <Col md={2} style={styles.alignRight}><label>Last Name</label></Col>
                <Col md={4}><div>{this.props.student.lastname}</div></Col>
                <Col md={2} style={styles.alignRight}><label>Cite</label></Col>
                <Col md={4}><div>{this.props.student.city}</div></Col>
            </Row>

            <Row style={styles.addMargin}>
                <Col md={2} style={styles.alignRight}><label>Age</label></Col>
                <Col md={4}><div>{this.props.student.age}</div></Col>
                <Col md={2} style={styles.alignRight}><label>State</label></Col>
                <Col md={4}><div>{this.props.student.state}</div></Col>
            </Row>

            <Row style={styles.addMargin}>
                <Col md={6} />
                <Col md={2} style={styles.alignRight}><label>Zip</label></Col>
                <Col md={4}><div>{this.props.student.zip}</div></Col>
            </Row>
            </div>
		);
	}
}