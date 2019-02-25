import React from "react";
import {
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    ControlLabel
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
            StreetAddress:''
     };
        
    }
    render(){
        const {
            country,
            entity_response
        } = this.props;
        const {Zipcode ,CompanyName, CompanyWebsite,PhoneNumber,StateProvince,City,StreetAddress} = this.state;
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
                        <div className="col-lg-6">
                            <FormLabel>Complete Legal name of company d/b/a (if doing business as another entity,please identify)<span className="text-red">*</span></FormLabel>
                        </div>
                        <div className="col-lg-6">
                        <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Company Name"} //Optional.[String].Default: "".  Input ID.
                            name="Company Name" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={CompanyName} //Optional.[String].Default: "".
                            placeholder="Company Name" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={(CompanyName, e) => {
                                this.setState({ CompanyName });
                                console.log(e);
                            }} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "Company Name", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                // customFunc: email => {
                                //     const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                //     if (reg.test(String(email).toLowerCase())) {
                                //         return true;
                                //     } else {
                                //         return "Please Enter valid email address";
                                //     }
                                // }
                            }}
                        />
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
                            {arr}
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
                    <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Company Website"} //Optional.[String].Default: "".  Input ID.
                            name="Company Website" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={CompanyWebsite} //Optional.[String].Default: "".
                            placeholder="Company Website" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={(CompanyWebsite, e) => {
                                this.setState({ CompanyWebsite });
                                console.log(e);
                            }} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "Company Website", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                // customFunc: email => {
                                //     const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                //     if (reg.test(String(email).toLowerCase())) {
                                //         return true;
                                //     } else {
                                //         return "Please Enter valid email address";
                                //     }
                                // }
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <FormLabel>Company Phone Number</FormLabel>
                    </div>
                    <div className="col-lg-6">
                    <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Phone Number"} //Optional.[String].Default: "".  Input ID.
                            name="Phone Number" //Optional.[String].Default: "". Input name.
                            type="phone" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={PhoneNumber} //Optional.[String].Default: "".
                            placeholder="Phone Number" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={(PhoneNumber, e) => {
                                this.setState({ PhoneNumber });
                                console.log(e);
                            }} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "Phone Number", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                 customFunc: PhoneNumber => {
                                    const reg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
                                     if (reg.test(String(PhoneNumber))) {
                                        return true;
                                    } else {
                                        return "Please Enter valid Phone Number";
                                    }
                                }
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
                    <div className="col-lg-6">
                        <FormLabel>Street Address<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-6">
                    <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Street Address"} //Optional.[String].Default: "".  Input ID.
                            name="Street Address" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={StreetAddress} //Optional.[String].Default: "".
                            placeholder="Street Address" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={(StreetAddress, e) => {
                                this.setState({ StreetAddress });
                                console.log(e);
                            }} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "Street Address", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                // customFunc: email => {
                                //     const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                //     if (reg.test(String(email).toLowerCase())) {
                                //         return true;
                                //     } else {
                                //         return "Please Enter valid email address";
                                //     }
                                // }
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <FormLabel>City<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-6">
                    <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"City"} //Optional.[String].Default: "".  Input ID.
                            name="City" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={City} //Optional.[String].Default: "".
                            placeholder="City" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={(City, e) => {
                                this.setState({ City });
                                console.log(e);
                            }} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "City", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                // customFunc: email => {
                                //     const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                //     if (reg.test(String(email).toLowerCase())) {
                                //         return true;
                                //     } else {
                                //         return "Please Enter valid email address";
                                //     }
                                // }
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <FormLabel>State/Province<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-6">
                    <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"State/Province"} //Optional.[String].Default: "".  Input ID.
                            name="State/Province" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={StateProvince} //Optional.[String].Default: "".
                            placeholder="State/Province" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={(StateProvince, e) => {
                                this.setState({ StateProvince });
                                console.log(e);
                            }} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "State/Province", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                // customFunc: email => {
                                //     const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                //     if (reg.test(String(email).toLowerCase())) {
                                //         return true;
                                //     } else {
                                //         return "Please Enter valid email address";
                                //     }
                                // }
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <FormLabel>Country<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-6">
                        <FormGroup controlId="formControlsSelect">
                            <FormControl as="select">
                                {countryOptions}
                                </FormControl>
                            </FormGroup>    
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <FormLabel>Zipcode<span className="text-red">*</span></FormLabel>
                    </div>
                    <div className="col-lg-6">
                    <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Zipcode"} //Optional.[String].Default: "".  Input ID.
                            name="Zipcode" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={Zipcode} //Optional.[String].Default: "".
                            placeholder="Zipcode" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={(Zipcode, e) => {
                                this.setState({ Zipcode });
                                console.log(e);
                            }} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "Zipcode", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                // customFunc: email => {
                                //     const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                //     if (reg.test(String(email).toLowerCase())) {
                                //         return true;
                                //     } else {
                                //         return "Please Enter valid email address";
                                //     }
                                // }
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
