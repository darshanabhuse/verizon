import React from "react";
import Navigation from './navigation';
import Titles from './titles';


class App extends React.Component {
	
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
export default App;
