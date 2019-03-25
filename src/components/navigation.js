import React from "react";
import {
	Nav,
	NavItem,
	NavLink
	} from 'reactstrap';
import { Link } from 'react-router-dom';
import WIPModal from './wipmodal';

class Navigation extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = { modalShow : false };

		this.handleClick = this.handleClick.bind(this);

		this.modalClose = this.modalClose.bind(this);
	}

	handleClick() {
		console.log(this.state.modalShow);
		this.setState({
			modalShow : true
		})
	}
	modalClose() {
		console.log(this.state.modalShow);
		this.setState({
			modalShow : false
		})
	}
	render() {
		return (
			<div className="row">
				<div className="col-lg-12 navigationBar">
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
							<Link to='/'><img className="home_img_width homepageNav" alt="home about section" src="/src/images/logo.png" /></Link>
						</div>

						<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
							<div className="navigation_wrapper">
								<Nav variant="tabs">
									<NavItem>
										<NavLink onClick={this.handleClick}><b>FAQ</b></NavLink>
									</NavItem>
								</Nav>
							</div>
						</div>
					</div>
					<div className="partners">
                    <section className="ts-banners">
                    </section>
                </div>
				</div>
				<WIPModal show={this.state.modalShow} onHide={this.modalClose} />
			</div>
		);
	}
}

export default Navigation;