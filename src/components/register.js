import React from "react";
import Navigation from '../components/navigation.js';
import GeneralInfo from '../components/generalinfo';
import PrimaryContact from '../components/primarycontact';


class Register extends React.Component {
	render() {
		return (
            <div className="container">
			<Navigation />
			<GeneralInfo />
			<div className="row">
				<PrimaryContact />
			</div>
		</div>
		);
	}
}

export default Register;