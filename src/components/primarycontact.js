import React from "react";
import {
    Form,
    FormGroup,
    FormLabel, Button,
    FormControl
} from 'react-bootstrap';
import { Textbox } from "react-inputs-validation";

class PrimaryContact extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            FirstName : '',
            LastName:'',
            email :'',
            Confirmemail :'',
            PhoneNumber :''
     };
        
    }

    render(){
        const {
            country,
            FirstName,
            LastName,
            email ,
            Confirmemail,
            PhoneNumber
        } = this.props;
        let countryItems = country;
        let countryOptions = '';
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
                                <FormGroup controlId="formControlsSelect">
                                    <FormControl as="select">
                                        {countryOptions}
                                    </FormControl>
                                </FormGroup> 
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
                            <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"First Name"} //Optional.[String].Default: "".  Input ID.
                            name="First Name" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={FirstName} //Optional.[String].Default: "".
                            placeholder="First Name" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={(FirstName, e) => {
                                this.setState({ FirstName });
                                console.log(e);
                            }} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "First Name", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
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
                            <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Last Name"} //Optional.[String].Default: "".  Input ID.
                            name="Last Name" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={LastName} //Optional.[String].Default: "".
                            placeholder="Last Name" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={(LastName, e) => {
                                this.setState({ LastName });
                                console.log(e);
                            }} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "Last Name", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
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
                                <Form>
                                    <FormGroup>
                                        <FormLabel>Primary Contact Email<span className="text-red">*</span></FormLabel>
                                    </FormGroup>
                                </Form>
                            </div>
                            <div className="col-lg-6">
                            <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"email"} //Optional.[String].Default: "".  Input ID.
                            name="email" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={email} //Optional.[String].Default: "".
                            placeholder="Username or Email" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={(email, e) => {
                                this.setState({ email });
                                console.log(e);
                            }} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "email", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                customFunc: email => {
                                    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                    if (reg.test(String(email).toLowerCase())) {
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
                            <div className="col-lg-6">
                                <Form>
                                    <FormGroup>
                                        <FormLabel>Primary Contact Email confirmation<span className="text-red">*</span></FormLabel>
                                    </FormGroup>
                                </Form>
                            </div>
                            <div className="col-lg-6">
                            <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Confirmemail"} //Optional.[String].Default: "".  Input ID.
                            name="Confirm Email" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={email} //Optional.[String].Default: "".
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
                            <div className="col-lg-6">
                                <Form>
                                    <FormGroup>
                                        <FormLabel>Primary Contact Phone Number<span className="text-red">*</span></FormLabel>
                                    </FormGroup>
                                </Form>
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
