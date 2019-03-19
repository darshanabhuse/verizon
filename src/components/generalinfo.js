import React from "react";
import {
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    ControlLabel,
    Overlay,
    OverlayTrigger,
    Tooltip
    } from 'react-bootstrap';
    import { Textbox } from "react-inputs-validation";
import Register from "./register";
import WIPModal from './wipmodal';

let listItems = '';
class GeneralInfo extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {
            Zipcode : '',
            CompanyName :'',
            CompanyWebsite :'',
            PhoneNumber :'',
            StateProvince :'',
            City:'',
            StreetAddress:'',
        };
        
    }

    render(){
        const {
            country,
            entity_response,
            company_name,
            company_entity,
            company_website,
            company_phone,
            company_phone_countrycode,
            street_address,
            hstate,
            hcity,
            hzip,
        } = this.props;
        let listItems = entity_response;
        let countryItems = country;
        let arr = '';
        let countryOptions = '';
        if(listItems && listItems.length) {
            arr = listItems.map(option => {
                return (
                    <option value={option.value}>{option.value}</option>
                )
            });
        }
        if(countryItems && countryItems.length) {
            countryOptions = countryItems.map(option => {
                return (
                    <option value={option.value}>{option.name}</option>
                )
            });
        }
        
        return(
            <div className="container wd">
            
            <div className="row hr">
                 <div className="col-lg-8 bold">
                 General information 
                 </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-4">
                            <FormLabel>Complete Legal name of company d/b/a (if doing business as another entity,please identify)<span className="text-red">*</span></FormLabel>
                        </div>
                        <div className="col-lg-8">
                        <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Company Name"} //Optional.[String].Default: "".  Input ID.
                            name="Company Name" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={company_name} //Optional.[String].Default: "".
                            placeholder="Company Name" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={this.props.onCompanyNameChangeValue}  //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "Company Name", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                            }}
                        />
                        </div>
                    </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-4">
                        <FormLabel>Company Entity Type<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-8">
                        <FormGroup controlId="formControlsSelect">
                        <FormControl as="select" onChange={this.props.onCompanyEntityChangeValue}>
                            {arr}
                            </FormControl>
                        </FormGroup>                        
                    </div>
                </div>
            </div>
           <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-4">
                        <FormLabel>Company Website-homepage URL<span className="text-red">*</span><p className="right">Https://</p></FormLabel>
                    </div>
                    <div className="col-lg-8">
                    <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Company Website"} //Optional.[String].Default: "".  Input ID.
                            name="Company Website" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={company_website} //Optional.[String].Default: "".
                            placeholder="Company Website" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={this.props.onCompanyWebChangeValue} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "Company Website", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-4">
                        <FormLabel>Company Phone Number</FormLabel>
                    </div>
                    <div className="col-lg-8 country_phone_wrapper">
                        <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Country Code"} //Optional.[String].Default: "".  Input ID.
                            name="Country Code" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={company_phone_countrycode} //Optional.[String].Default: "".
                            placeholder="Country Code" //Optional.[String].Default: "".
                            classNameInput = "form-control country_code"
                            onChange={this.props.onCompanyPhoneCountryCodeChangeValue} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "Country Code", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                min: 2,
                                max: 4,
                                // customFunc: company_phone_countrycode => {
                                //     const reg = /^\+\d{1,4}$/;
                                //      if (reg.test(String(company_phone_countrycode))) {
                                //         return true;
                                //     } else {
                                //         return "Please Enter valid Country Code.";
                                //     }
                                // }
                            }}
                        />
                        <Textbox
                            tabIndex="2" //Optional.[String or Number].Default: -1.
                            id={"Phone Number"} //Optional.[String].Default: "".  Input ID.
                            name="Phone Number" //Optional.[String].Default: "". Input name.
                            type="phone" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={company_phone} //Optional.[String].Default: "".
                            placeholder="Phone Number" //Optional.[String].Default: "".
                            classNameInput = "form-control phone_number"
                            onChange={this.props.onCompanyPhoneChangeValue} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "Phone Number", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                max: 7
                            }}
                        />
                        
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
                    <div className="col-lg-4">
                        <FormLabel>Street Address<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-8">
                    <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Street Address"} //Optional.[String].Default: "".  Input ID.
                            name="Street Address" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={street_address} //Optional.[String].Default: "".
                            placeholder="Street Address" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={this.props.onStreetAddChangeValue} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "Street Address", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-4">
                        <FormLabel>City<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-8">
                    <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"City"} //Optional.[String].Default: "".  Input ID.
                            name="City" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={hcity} //Optional.[String].Default: "".
                            placeholder="City" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={this.props.onHCityChangeValue}//Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "City", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-4">
                        <FormLabel>State/Province<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-8">
                    <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"State/Province"} //Optional.[String].Default: "".  Input ID.
                            name="State/Province" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={hstate} //Optional.[String].Default: "".
                            placeholder="State/Province" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={this.props.onHStateChangeValue}//Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "State/Province", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-4">
                        <FormLabel>Country<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-8">
                        <FormGroup controlId="formControlsSelect">
                            <FormControl as="select" onChange={this.props.handleHCountryChangeValue}>
                                {countryOptions}
                            </FormControl>
                        </FormGroup>    
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-4">
                        <FormLabel>Zipcode<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-8">
                    <Textbox
                            tabIndex="1"
                            id={"Zipcode"}
                            name="Zipcode"
                            type="text"
                            value={hzip}
                            placeholder="Zipcode"
                            classNameInput = "form-control"
                            onChange={this.props.onHZipChangeValue}
                            onBlur={e => {}}
                            validationOption={{
                                name: "Zipcode",
                                check: true,
                                required: true,
                            }}
                        />
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default GeneralInfo;


