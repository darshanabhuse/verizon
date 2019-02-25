import React from "react";
import {
	Form,
	FormGroup,
    FormLabel, Button,
    FormControl
	} from 'react-bootstrap';
class PrimaryContact extends React.Component{

    render(){

        return(
            <div className="container wd">
                <div className="row hr">
                    <div className="col-lg-8 bold">
                    Company Primary Contact
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <Form>
                                    <FormGroup controlId="formBasicEmail">
                                        <FormLabel>Country User resides in<span className="text-red">*</span></FormLabel>
                                    </FormGroup>
                                </Form>
                            </div>
                            <div className="col-lg-6">
                                <FormControl type="dropdown" placeholder="Select Country" />
                            </div>
                        </div>
                    </div><div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <Form>
                                    <FormGroup>
                                        <FormLabel>Primary Contact First Name<span className="text-red">*</span></FormLabel>
                                    </FormGroup>
                                </Form>
                            </div>
                            <div className="col-lg-6">
                                <FormControl type="dropdown" placeholder="First Name" />
                            </div>
                        </div>
                    </div><div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <Form>
                                    <FormGroup >
                                        <FormLabel>Primary Contact Last Name<span className="text-red">*</span></FormLabel>
                                    </FormGroup>
                                </Form>
                            </div>
                            <div className="col-lg-6">
                            <FormControl type="dropdown" placeholder="Last Name" />
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <Form>
                                    <FormGroup>
                                        <FormLabel>Primary Contact Email<span className="text-red">*</span></FormLabel>
                                    </FormGroup>
                                </Form>
                            </div>
                            <div className="col-lg-6">
                            <FormControl type="dropdown" placeholder="Email" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <Form>
                                    <FormGroup>
                                        <FormLabel>Primary Contact Email confirmation<span className="text-red">*</span></FormLabel>
                                    </FormGroup>
                                </Form>
                            </div>
                            <div className="col-lg-6">
                            <FormControl type="input" placeholder="Confirm Email" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <Form>
                                    <FormGroup>
                                        <FormLabel>Primary Contact Phone Number<span className="text-red">*</span></FormLabel>
                                    </FormGroup>
                                </Form>
                            </div>
                            <div className="col-lg-6">
                            <FormControl type="Input" placeholder="Phone Number" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <FormLabel>Have you been wroking with any VZW contact(s)?
                                            if so,please provide the name(s) of these contacts</FormLabel>
                                
                            </div>
                            <div className="col-lg-6">
                                <FormControl type="input" placeholder="Contact Name" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 right">
                    <Button variant="cancel" type="cancel">Cancel</Button>
                    <Button variant="primary" type="submit">Submit</Button>
                            
                </div>
            </div>
            )
        }
    }
    
    export default PrimaryContact;