import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

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

			<h2>{this.props.student.id}</h2>
			
		);
	}
}