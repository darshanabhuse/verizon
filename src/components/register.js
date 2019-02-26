import React from "react";
import AppSelectModal from './appselectmodal';

class Register extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = { modalShow : true };

		this.handleClick = this.handleClick.bind(this);

		this.modalClose = this.modalClose.bind(this);
	}

	handleClick() {
		this.setState({
			modalShow : true
		})
	}
	modalClose() {
		this.setState({
			modalShow : false
		})
	}
	render() {
		return (
			<AppSelectModal show={this.state.modalShow} onHide={this.modalClose} />
		)
	}
}

export default Register;