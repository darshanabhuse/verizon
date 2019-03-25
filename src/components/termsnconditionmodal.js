import React from "react";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import { Link } from "react-router-dom";
import {
    Form,
    FormGroup,
    FormLabel, Button,
    FormControl
} from 'react-bootstrap';
import {
	Nav,
	NavItem,
	NavLink
	} from 'reactstrap';


class TermsnConditionsModal extends React.Component {
    constructor(...args) {
		super(...args);
    }
    
    render() {
        return (
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <ModalHeader>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <img alt="home about section" src="/src/images/logo.png" />
                        
                    </div>
                    <div className="col-lg-9">
                        <h3>Terms & Conditions</h3>
                    </div>
                </ModalHeader>
                <ModalBody className="wipModalBody">
                    <p>This Acceptable Use Policy specifies the actions prohibited by Verizon, dba Verizon Services (Verizon) to users of the Verizon IP Network. Verizon reserves the right to modify the Policy at any time, effective upon posting of the modified Policy to this URL: <a href="http://www.verizonenterprise.com/terms/" target="_blank">http://www.verizonenterprise.com/terms/</a> or other notice to customer.</p>
                    <p>The Verizon IP Network may be used only for lawful purposes. Transmission, distribution or storage of any material in violation of any applicable law or regulation is prohibited. This includes, without limitation, material protected by copyright, trademark, trade secret or other intellectual property right used without proper authorization, and material that is obscene, defamatory, constitutes an illegal threat, or violates export control laws.</p>
                
                    <p><input type="radio" value="accept" name="termsncondition" onChange={this.props.onHandleTermsOptionChange} />I accept. 
                    <input type="radio" value="not accept" name="termsncondition" onChange={this.props.onHandleTermsOptionChange} />I do not accept.</p>
                
                    <p><Button variant="cancel" type="cancel" onClick={this.props.onHideCancle}>Cancel</Button>
                    <Button variant="primary" type="submit" onClick={this.props.onHide}>Ok</Button></p>
                </ModalBody>
           </Modal>       
        )
    }
    
}

export default TermsnConditionsModal;
