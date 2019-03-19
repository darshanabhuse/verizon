import React from "react";
import {
    Form,
    FormGroup,
    FormLabel, Button,
    FormControl
} from 'react-bootstrap';
import { Textbox } from "react-inputs-validation";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

class PrimaryContact extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            Confirmemail :'',
            pcCountryReact: '', 
        };
        
    }
    
    render(){
        const {
            country,
            pcfn,
            pcln,
            pcemail ,
            Confirmemail,
            pcphone,
            pccountrycode,
            vzwcontact
        } = this.props;
        const { pcCountryReact } = this.state;
        
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
                            <div className="col-lg-4">
                                <FormGroup controlId="formBasicEmail">
                                        <FormLabel>Country User resides in<span className="text-red">*</span></FormLabel>
                                    </FormGroup>
                            </div>
                            <div className="col-lg-8">
                                <FormGroup controlId="formControlsSelect">
                                    <CountryDropdown
                                        value={country}
                                        classes = "form-control"
                                        defaultOptionLabel = "Country"
                                        onChange = {this.props.onPCCountryChangeValue}
                                    />
                                </FormGroup>    
                            </div>
                        </div>
                    </div><div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4">
                                <FormGroup>
                                        <FormLabel>Primary Contact First Name<span className="text-red">*</span></FormLabel>
                                    </FormGroup>
                            </div>
                            <div className="col-lg-8">
                            <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"First Name"} //Optional.[String].Default: "".  Input ID.
                            name="First Name" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={pcfn} //Optional.[String].Default: "".
                            placeholder="First Name" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={this.props.onPCFNameChangeValue}//Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "First Name", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                            }}
                        />
                            </div>
                        </div>
                    </div><div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4">
                                <FormGroup >
                                        <FormLabel>Primary Contact Last Name<span className="text-red">*</span></FormLabel>
                                    </FormGroup>
                            </div>
                            <div className="col-lg-8">
                            <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Last Name"} //Optional.[String].Default: "".  Input ID.
                            name="Last Name" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={pcln} //Optional.[String].Default: "".
                            placeholder="Last Name" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={this.props.onPCLNameChangeValue} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "Last Name", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
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
                                <FormGroup>
                                        <FormLabel>Primary Contact Email<span className="text-red">*</span></FormLabel>
                                    </FormGroup>
                            </div>
                            <div className="col-lg-8">
                            <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"email"} //Optional.[String].Default: "".  Input ID.
                            name="email" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={pcemail} //Optional.[String].Default: "".
                            placeholder="Username or Email" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={this.props.onPCEmailChangeValue} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "email", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                customFunc: pcemail => {
                                    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                    if (reg.test(String(pcemail).toLowerCase())) {
                                        return true;
                                    } else {
                                        return "Please Enter valid email address";
                                    }
                                }
                            }}
                        />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4">
                                <FormGroup>
                                        <FormLabel>Primary Contact Email confirmation<span className="text-red">*</span></FormLabel>
                                    </FormGroup>
                            </div>
                            <div className="col-lg-8">
                            <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Confirmemail"} //Optional.[String].Default: "".  Input ID.
                            name="Confirm Email" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={pcemail} //Optional.[String].Default: "".
                            placeholder="Confirm Email" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={(Confirmemail, e) => {
                                this.setState({ Confirmemail });
                                console.log(e);
                            }} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "Confirm Email", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                customFunc: Confirmemail => {
                                    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                    if (reg.test(String(Confirmemail).toLowerCase())) {
                                        return true;
                                    } else {
                                        return "Please Enter valid email address";
                                    }
                                }
                            }}
                        />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4">
                               <FormGroup>
                                        <FormLabel>Primary Contact Phone Number<span className="text-red">*</span></FormLabel>
                                    </FormGroup>
                            </div>
                            <div className="col-lg-8  country_phone_wrapper">
                                <Textbox
                                    tabIndex="1" //Optional.[String or Number].Default: -1.
                                    id={"Country Code"} //Optional.[String].Default: "".  Input ID.
                                    name="Country Code" //Optional.[String].Default: "". Input name.
                                    type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                                    value={pccountrycode} //Optional.[String].Default: "".
                                    placeholder="Country Code" //Optional.[String].Default: "".
                                    classNameInput = "form-control country_code"
                                    onChange={this.props.onPCPhoneCountryCodeChangeValue} //Required.[Func].Default: () => {}. Will return the value.
                                    onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                    validationOption={{
                                        name: "Country Code", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                        check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                        required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                        min: 2,
                                        max: 4,
                                        // customFunc: pccountrycode => {
                                        //     const reg = /^\+\d{1,4}$/;
                                        //     if (reg.test(String(pccountrycode))) {
                                        //         return true;
                                        //     } else {
                                        //         return "Please Enter valid Country Code.";
                                        //     }
                                        // }
                                    }}
                                />
                            <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Phone Number"} //Optional.[String].Default: "".  Input ID.
                            name="Phone Number" //Optional.[String].Default: "". Input name.
                            type="phone" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={pcphone} //Optional.[String].Default: "".
                            placeholder="Phone Number" //Optional.[String].Default: "".
                            classNameInput = "form-control phone_number"
                            onChange={this.props.onPCPhoneChangeValue} //Required.[Func].Default: () => {}. Will return the value.
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

                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4">
                            {this.props.vzwcontact && this.props.vzwcontact=="Select Category" && 
                                <FormLabel>Have you been wroking with any LOB contact(s)?
                                if so,please provide the name(s) of these contacts</FormLabel>
                            }
                            {this.props.vzwcontact && this.props.vzwcontact!="Select Category" && 
                                <FormLabel>Have you been wroking with any LOB ({this.props.vzwcontact}) contact(s)?
                                if so,please provide the name(s) of these contacts</FormLabel>
                            }
                                
                                
                            </div>
                            <div className="col-lg-8">

                            

                                <FormControl type="input" placeholder="Contact Name" value="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 center mar-bot">
                    <Button variant="cancel" type="cancel">Cancel</Button>
                    <Button variant="primary" type="submit">Submit</Button>
                            
                </div>
            </div>
            )
        }
    }
    
    export default PrimaryContact;
