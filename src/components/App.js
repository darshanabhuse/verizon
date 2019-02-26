import React from "react";
import Navigation from './navigation';
import Titles from './titles';
import AppSelectModal from './appselectmodal';


class App extends React.Component {
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
export default App;
