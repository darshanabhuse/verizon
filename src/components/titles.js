import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import {
	Form,
	FormGroup,
    FormLabel,
    FormControl,
    FormText,
    Button,
    FormCheck
    } from 'react-bootstrap';
import Register from "./register";
import WIPModal from './wipmodal';

class Titles extends React.Component {
    constructor(...args) {
		super(...args);

		this.state = { modalShow : false };

		this.handleClick = this.handleClick.bind(this);

		this.modalClose = this.modalClose.bind(this);
	}

	handleClick(event) {
        console.log(this.state.modalShow);
        event.preventDefault();
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
            <div>
                <div className="col-lg-12 title_text">
                    <h1 className="title-container__title"><b>Sign In</b></h1>
                    <p className="title-container__subtitle"> Please enter your login Details.</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <Form onSubmit={this.handleClick}>
                            <FormGroup controlId="formBasicEmail">
                                <FormLabel>Username or Email</FormLabel>
                                <FormControl type="email" placeholder="Username or Email" />
                                <FormText className="text-muted">
                                </FormText>
                            </FormGroup>
                            <FormGroup controlId="formBasicChecbox">
                                <FormCheck type="checkbox" label="Remember Me" />
                            </FormGroup>
                            <Button variant="primary" type="submit">
                                Sign In
                            </Button>
                        </Form>
                    </div>
                    <div className="col-lg-6 registerwithustext">
                        <p><b>Is your company not register With Us yet?</b></p>
                        <p className="title-container__subtitle">Please <Link to="/register">Register With Us</Link> register with us to get your company's OD Device Certification account set up. </p>
                        <p>This will take you to our registration form where you can supply the information necessary to setup a new company profile and access the Verizon Open Development website. </p>
                    </div>
                    
                </div>
                
                <WIPModal show={this.state.modalShow} onHide={this.modalClose} />
            </div>
            
            
        )
    }
}

export default Titles;