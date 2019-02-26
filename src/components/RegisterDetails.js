import React from "react";
import Navigation from '../components/navigation.js';
import GeneralInfo from '../components/generalinfo';
import PrimaryContact from '../components/primarycontact';
import ProductInfo from '../components/productinfo';
import { Tabs, Tab } from "react-bootstrap";
import axios from "axios";

class RegisterDetails extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			key: 'general_info',
			entity_response : '',
			country : '',
			product_type : '',
			platform : '',
			isAgreementChecked: false,
			hasNameError: true,
			hasDescriptionError: true,
			hasMovieError: true,
			hasJobError: true,
			hasAgreementError: true,
			validate: false
		};
		this.validateForm = this.validateForm.bind(this);
	}
	componentDidMount () {
        let entity_response = axios.get('../src/json_files/master_select.json').then( response => {
            this.setState(
                {
                    entity_response : response.data.entity_type,
					country : response.data.country,
					product_type : response.data.product_type,
					platform : response.data.platform
                }
            );
        });
	}
	toggleValidating(validate) {
		this.setState({ validate });
	}
	validateForm(e) {
		e.preventDefault();
		this.toggleValidating(true);
		const {
		  hasNameError,
		  hasDescriptionError,
		  hasMovieError,
		  hasJobError,
		  hasAgreementError,
		} = this.state;
		if (!hasNameError && !hasDescriptionError && !hasMovieError && !hasJobError && !hasAgreementError) {
		  alert('All validated!');
		}
		else {
			alert('Not Validated');
		}
	  }   
	render() {
		return (
            <div className="container">
			
			<Navigation />
			<div className="row">
                <div className="col-lg-12 reg-center">
                    <div className="bold-head">Register with Us </div><br />
                </div>
                <div className="col-lg-12">
                    <p>Please submit your company and contact informationto gain access to the Verizon Open Development website.</p>
                    <p className="text-red">Please use your legal corporate address. This information will be usedfor generation of legally binding documentation.</p>
                </div>
				
			</div>
			<form onSubmit={this.validateForm}>
			<Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
				
					<Tab eventKey="general_info" title="General Information" >
						<GeneralInfo
							company_name = "Company Name" 
							country = {this.state.country}
							entity_response = {this.state.entity_response}
							>
						</GeneralInfo>
					</Tab>
					<Tab eventKey="product_info" title="Product Information" >
						<ProductInfo 
							product_type = {this.state.product_type}
							platform = {this.state.platform}
						>
						</ProductInfo>
					</Tab>
					<Tab eventKey="primary_contact" title="Primary Company Contact" >
						<div className="row">
							<PrimaryContact 
								country = {this.state.country}
							>
							</PrimaryContact>
						</div>
					</Tab>
				
			</Tabs>
			</form>
			
		</div>
		);
	}
}

export default RegisterDetails;