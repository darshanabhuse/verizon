import React from "react";
import {
	Form,
	FormGroup,
    FormLabel,
    FormControl,
    ControlLabel
    } from 'react-bootstrap';
import axios from "axios";
class GeneralInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {entity_response : ''};
    }

    componentDidMount () {
        let entity_response = axios.get('../src/json_files/master_select.json').then( response => {
            console.log(response.data.entity_type);
            this.setState({entity_response : response.data.entity_type});
            const options = response.data.entity_type
            const listItems = options.map((res) =>
                <option value={res}>{res}</option>
            );
            console.log(listItems)
        } );
    }   


    render(){

        return(
            <div className="container wd">
            <div className="row">
                <div className="col-lg-12 reg-center">
                <div className="bold-head">Register with Us </div><br />
                </div>
                <div className="col-lg-12">
                    <p>Please submit your company and contact informationto gain access to the Verizon Open Development website.</p>
                    <p className="text-red">Please use your legal corporate address. This information will be usedfor generation of legally binding documentation.</p>
                </div>
				
			</div>
            <div className="row hr">
                 <div className="col-lg-8 bold">
                 General information 
                 </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <FormLabel>Complete Legal name of company d/b/a (if doing business as another entity,please identify)<span className="text-red">*</span></FormLabel>
                        </div>
                        <div className="col-lg-6">
                            <FormControl type="input" placeholder="Company Name" />
                        </div>
                    </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <FormLabel>Company Entity Type<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-6">
                        <FormGroup controlId="formControlsSelect">
                        <FormControl as="select">
                                <option value="">Select Entity Type</option>
                                <option value="Corporation">Corporation</option>
                                <option value="S Corporation">S Corporation</option>
                                <option value="C Corporation">C Corporation</option>
                                <option value="Limited Liability Company">Limited Liability Company</option>
                                <option value="Non-Profit Organization">Non-Profit Organization</option>
                                <option value="Sole Proprietorship">Sole Proprietorship</option>
                                <option value="General Partnership">General Partnership</option>
                                <option value="Limited Partnership">Limited Partnership</option>
                                <option value="Limited Liability Partnership">Limited Liability Partnership</option>
                                <option value="Other">Other</option>
                            </FormControl>
                        </FormGroup>                        
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <FormLabel>Company Website-homepage URL<span className="text-red">*</span><p className="right">Https://</p></FormLabel>
                    </div>
                    <div className="col-lg-6">
                        <FormControl type="input" placeholder="Company Website" />
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <FormLabel>Company Phone Number</FormLabel>
                    </div>
                    <div className="col-lg-6">
                        <FormControl type="Input" placeholder="Phone Number" />
                    </div>
                </div>
            </div>
            </div>


            <div className="row hr">
                <div className="col-lg-8 bold">
                    Headquater Location 
                </div>
            </div>
            <div className="row">
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <FormLabel>Street Address<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-6">
                        <FormControl type="input" placeholder="Street Address" />
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <FormLabel>City<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-6">
                        <FormControl type="dropdown" placeholder="City" />
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <FormLabel>State/Province<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-6">
                        <FormControl type="input" placeholder="State/Province" />
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <FormLabel>Country<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-6">
                        <FormControl type="Input" placeholder="Country" />
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <FormLabel>Zipcode<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-6">
                        <FormControl type="Input" placeholder="Zipcode" />
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default GeneralInfo;