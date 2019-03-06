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
import { Textbox } from "react-inputs-validation";
//import "react-inputs-validation/lib/react-inputs-validation.min.css";
import Register from "./register";
import WIPModal from './wipmodal';
import {
	withRouter
} from 'react-router-dom';

class Titles extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = { 
            modalShow : false,
            phone: "",
            email: "",
            password : "",
            hasEmailError : true,
            hasPwdError : true,
            isFormValid : true
        };

        this.handleClick = this.handleClick.bind(this);

        this.modalClose = this.modalClose.bind(this);
        // isFormValid = () => {
        //     const {hasEmailError, hasPwdError} = this.state
          
        //     return hasEmailError && hasPwdError
        // };
    }

    handleClick() {
        const {
            email,
            password,
            hasEmailError,
            hasPwdError
        } = this.state;
        if(email && password){
            if(hasEmailError && hasPwdError) {
                event.preventDefault();
            }
            else {
                event.preventDefault()
                this.props.history.push('/dashboard');
            }
        }
        else {
            event.preventDefault();
            hasEmailError = true;
            console.log("Nothing in input fields");
        }
        
    }
    modalClose() {
        this.setState({
            modalShow : false
        })
    }
    
    render() {
        const { isFormValid, email, password } = this.state;
        return (
            <div>
                <div className="col-lg-12 title_text">
                    <h1 className="title-container__title"><b>Sign In</b></h1>
                    <p className="title-container__subtitle"> Please enter your login Details.</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <Form className="signin_form" onSubmit={this.handleClick} >
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
                            validationCallback={res => this.setState({ hasEmailError: res, validate: false })}
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
                        <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"password"} //Optional.[String].Default: "".  Input ID.
                            name="password" //Optional.[String].Default: "". Input name.
                            type="password" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={password} //Optional.[String].Default: "".
                            placeholder="Password" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={(password, e) => {
                                this.setState({ password });
                                console.log(e);
                            }} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationCallback={res => this.setState({ hasPwdError: res, validate: false })}
                            validationOption={{
                                name: "password", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, 
                                min: 5//Optional.[Bool].Default: true. To determin if it is a required field.
                            }}
                        />
                            <FormGroup controlId="formBasicChecbox">
                                <FormCheck type="checkbox" label="Remember Me" />
                            </FormGroup>
                            <Button variant="primary" type="submit">
                                Sign In
                            </Button>
                        </Form>
                    </div>
                    <div className="col-lg-6 registerwithustext bgcolor">
                        <p><b>Is your company not register With Us yet?</b></p>
                        <p className="title-container__subtitle">Please <Link to="/register/1">Register With Us</Link> register with us to get your company's OD Device Certification account set up. </p>
                        <p>This will take you to our registration form where you can supply the information necessary to setup a new company profile and access the Verizon Open Development website. </p>
                    </div>
                    
                </div>
                
                <WIPModal show={this.state.modalShow} onHide={this.modalClose} />
            </div>
            
            
        )
    }
}

export default withRouter(Titles);
