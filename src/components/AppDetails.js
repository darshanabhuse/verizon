import React from "react";
import Navigation from './navigation';
import Titles from './titles';
//import Footer from './footer';


class AppDetails extends React.Component {
	
	render() {
		return (
			<div className="container">
				<Navigation />
				<div className="row">
					<Titles />
				</div>
			</div>
		)
	}
}
export default AppDetails;
