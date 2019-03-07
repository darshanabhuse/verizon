import React from "react";
import Navigation from '../components/navigation.js';
import GeneralInfo from '../components/generalinfo';
import PrimaryContact from '../components/primarycontact';
import ProductInfo from '../components/productinfo';
import { Tabs, Tab } from "react-bootstrap";
import axios from "axios";
import { Link, Route, Switch } from 'react-router-dom';
import {
	withRouter
} from 'react-router-dom';

class RegisterDetails extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			key: 'general_info',
			entity_response : '',
			country : '',
			product_type : '',
			platform : '',
			company_name : '',
			company_entity : '',
			company_website : '',
			company_phone : '',
			street_address : '',
			hcity : '',
			hstate : '',
			hcountry : '',
			hzip : '',
			product_name : '',
			product_typestate: '',
			lob : '',
			vnf_category: '',
			platformstate : '',
			tags : '',
			description : '',
			pccountry : '',
			pcfn: '',
			pcln : '',
			pcemail : '',
			pcphone : '',
			vzwcontact : '',
			createddate: new Date().toLocaleString(),
			validate: false
		};
		this.validateForm = this.validateForm.bind(this);
		this.handleComapnyNameChangeValue = this.handleComapnyNameChangeValue.bind(this);
		this.handleComapnyEntityChangeValue = this.handleComapnyEntityChangeValue.bind(this);
		this.handleComapnyWebChangeValue = this.handleComapnyWebChangeValue.bind(this);
		this.handleComapnyPhoneChangeValue = this.handleComapnyPhoneChangeValue.bind(this);
		this.handleStreetAddChangeValue = this.handleStreetAddChangeValue.bind(this);
		this.handleHCityChangeValue = this.handleHCityChangeValue.bind(this);
		this.handleHStateChangeValue = this.handleHStateChangeValue.bind(this);
		this.handleHZipChangeValue = this.handleHZipChangeValue.bind(this);

		this.handleProductNameChangeValue = this.handleProductNameChangeValue.bind(this);
		this.handleProductTypeChangeValue = this.handleProductTypeChangeValue.bind(this);
		this.handleLobChangeValue = this.handleLobChangeValue.bind(this);
		this.handleVNFCatChangeValue = this.handleVNFCatChangeValue.bind(this);
		this.handlePlatformChangeValue = this.handlePlatformChangeValue.bind(this);
		this.handleTagsChangeValue = this.handleTagsChangeValue.bind(this);
		this.handleDescriptionChangeValue = this.handleDescriptionChangeValue.bind(this);

		this.handlePCFNameChangeValue = this.handlePCFNameChangeValue.bind(this);
		this.handlePCLNameChangeValue = this.handlePCLNameChangeValue.bind(this);
		this.handlePCEmailChangeValue = this.handlePCEmailChangeValue.bind(this);
		this.handlePCPhoneChangeValue = this.handlePCPhoneChangeValue.bind(this);
		this.handlePCCountryChangeValue = this.handlePCCountryChangeValue.bind(this);
		this.handlePCVZWChangeValue = this.handlePCVZWChangeValue.bind(this);
	}
	handleComapnyNameChangeValue(value) {
		this.setState({company_name: value});
	}
	handleComapnyEntityChangeValue(value) {
		this.setState({company_entity: value.target.value});
	}
	handleComapnyWebChangeValue(value) {
		this.setState({company_website : value});
	}
	handleComapnyPhoneChangeValue(value) {
		this.setState({company_phone : value});
	}
	handleStreetAddChangeValue(value) {
		this.setState({street_address : value});
	}
	handleHCityChangeValue(value) {
		this.setState({hcity : value});
	}
	handleHStateChangeValue(value) {
		this.setState({hstate : value});
	}
	handleHCountryChangeValue(value) {
		this.setState({hcountry: value.target.value});
	}
	handleHZipChangeValue(value) {
		this.setState({hzip : value});
	}

	handleProductNameChangeValue(value) {
		this.setState({product_name : value});
	}
	handleProductTypeChangeValue(value) {
		this.setState({product_typestate : value.target.valued});
	}
	handleLobChangeValue(value) {
		this.setState({lob : value.target.value});
	}
	handleVNFCatChangeValue(value) {
		this.setState({vnf_category : value.target.value});
	}
	handlePlatformChangeValue(value) {
		this.setState({platformstate : value.target.value});
	}
	handleTagsChangeValue(value) {
		this.setState({tags : value.target.value});
	}
	handleDescriptionChangeValue(value) {
		this.setState({description : value});
	}

	handlePCFNameChangeValue(value) {
		this.setState({pcfn : value});
	}
	handlePCLNameChangeValue(value) {
		this.setState({pcln : value});
	}
	handlePCEmailChangeValue(value) {
		this.setState({pcemail : value});
	}
	handlePCPhoneChangeValue(value) {
		this.setState({pcphone : value});
	}
	handlePCCountryChangeValue(value) {
		this.setState({pccountry : value.target.value});
	}
	handlePCVZWChangeValue(value) {
		this.setState({vzwcontact : value});
	}
	componentDidMount () {
        let entity_response = axios.get('/src/json_files/master_select.json').then( response => {
            this.setState({
								entity_response : response.data.entity_type,
								country : response.data.country,
								product_type : response.data.product_type,
								platform : response.data.platform
						});
        });
	}

	toggleValidating(validate) {
		this.setState({ validate });
	}
	validateForm(e) {
		e.preventDefault();
		console.log(this.state.company_name);
		console.log(this.state.company_entity);
		console.log(this.state.company_website);
		console.log(this.state.company_phone);
		console.log(this.state.street_address);
		console.log(this.state.hstate);
		console.log(this.state.hcity);
		console.log(this.state.hzip);
		console.log(this.state.product_name);
		console.log(this.state.product_typestate);
		console.log(this.state.lob);
		console.log(this.state.vnf_category);
		console.log(this.state.platformstate);
		console.log(this.state.tags);
		console.log(this.state.description);
		console.log(this.state.pccountry);
		console.log(this.state.pcfn);
		console.log(this.state.pcln);
		console.log(this.state.pcemail);
		console.log(this.state.pcphone);
		console.log(this.state.vzwcontact);

		this.toggleValidating(true);
		const {
			company_name,
			company_entity,
			company_website,
			company_phone,
			street_address,
			hstate,
			hcountry,
			hcity,
			hzip,
			product_name,
			product_typestate,
			lob,
			vnf_category,
			platformstate,
			tags,
			description,
			pccountry,
			pcfn,
			pcln,
			pcemail,
			pcphone,
			vzwcontact
		} = this.state;
		if (!company_name && !company_entity && !company_website && !company_phone && !street_address && !hstate && !hcountry && !hcity && !hzip) {
			alert('Please fill all fields.');
		}
		else {
			const regPostArray = {
				company_name : company_name,
				entity_type : company_entity,
				company_website : company_website,
				phone_number : company_phone,
				h_street : street_address,
				h_city : hcity,
				h_state : hstate,
				h_country : hcountry,
				h_zipcode : hzip,
				product_name : product_name,
				product_type : product_typestate,
				lob : lob,
				vnf_category : vnf_category,
				platform : platformstate,
				tags : tags,
				description : description,
				primary_contact_country : pccountry,
				primary_contact_fn : pcfn,
				primary_contact_ln : pcln,
				primary_contact_email : pcemail,
				primary_contact_phone : pcphone,
				usertype : "Admin",
				status : "In Progress",
				timestamp : this.state.createddate,
				created_by : pcfn,
				vzw_contact : vzwcontact
			};
			axios.post('http://127.0.0.1:9000/registerApp/add', regPostArray, {headers: {
				"Content-Type": "application/json"}
			})
        .then(
					res => (res.data.Status == "Success") ? this.props.history.push('/signin') : alert(res.data.error)
					
				);
			
		}
	}   
	render() {
		return (
            <div className="container">
			
			<Navigation />
			<div className="row reg-head">
                <div className="col-lg-12 reg-center">
                    <div className="bold-head">Register with Us </div><br />
                </div>
                <div className="col-lg-12 center">
                    <p>Please submit your company and contact informationto gain access to the Verizon Open Development website.</p>
                    <p className="text-red">Please use your legal corporate address. This information will be usedfor generation of legally binding documentation.</p>
                </div>
				
			</div>
			<form onSubmit={this.validateForm}>
			<Tabs className="border-tab" id="controlled-tab-example" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
				
					<Tab eventKey="general_info" title="General Information" >
						<GeneralInfo
							country = {this.state.country}
							entity_response = {this.state.entity_response}
							company_name = {this.state.company_name}
							onCompanyNameChangeValue={this.handleComapnyNameChangeValue}
							onCompanyEntityChangeValue={this.handleComapnyEntityChangeValue}
							company_website = {this.state.company_website}
							onCompanyWebChangeValue={this.handleComapnyWebChangeValue}
							company_phone = {this.state.company_phone}
							onCompanyPhoneChangeValue={this.handleComapnyPhoneChangeValue}
							street_address = {this.state.street_address}
							onStreetAddChangeValue={this.handleStreetAddChangeValue}
							hstate = {this.state.hstate}
							onHStateChangeValue={this.handleHStateChangeValue}
							onHCountryChangeValue = {this.handleHCountryChangeValue}
							hcity = {this.state.hcity}
							onHCityChangeValue={this.handleHCityChangeValue}
							hzip = {this.state.hzip}
							onHZipChangeValue={this.handleHZipChangeValue}
						>
						</GeneralInfo>
					</Tab>
					<Tab eventKey="product_info" title="Product Information" >
						<ProductInfo 
							product_type = {this.state.product_type}
							platform = {this.state.platform}
							product_name = {this.state.product_name}
							onPraductNameChangeValue={this.handleProductNameChangeValue}
							onProductTypeChangeValue={this.handleProductTypeChangeValue}
							lob = {this.state.lob}
							onLobChangeValue={this.handleLobChangeValue}
							vnf_category = {this.state.vnf_category}
							onVNFCatChangeValue={this.handleVNFCatChangeValue}
							platformstate = {this.state.platformstate}
							onPlatformChangeValue={this.handlePlatformChangeValue}
							tags = {this.state.tags}
							onTagsChangeValue={this.handleTagsChangeValue}
							description = {this.state.description}
							onDescriptionChangeValue={this.handleDescriptionChangeValue}
						>
						</ProductInfo>
					</Tab>
					<Tab eventKey="primary_contact" title="Primary Company Contact" >
						<div className="row">
							<PrimaryContact 
								country = {this.state.country}
								onPCCountryChangeValue={this.handlePCCountryChangeValue}
								pcfn = {this.state.pcfn}
								onPCFNameChangeValue={this.handlePCFNameChangeValue}
								pcln = {this.state.pcln}
								onPCLNameChangeValue={this.handlePCLNameChangeValue}
								pcemail = {this.state.pcemail}
								onPCEmailChangeValue={this.handlePCEmailChangeValue}
								pcphone = {this.state.pcphone}
								onPCPhoneChangeValue={this.handlePCPhoneChangeValue}
								vzwcontact = {this.state.vzwcontact}
								onPCVZWChangeValue={this.handlePCVZWChangeValue}
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