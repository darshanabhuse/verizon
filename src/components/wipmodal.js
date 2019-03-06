import React from "react";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import {
	Nav,
	NavItem,
	NavLink
	} from 'reactstrap';



class WIPModal extends React.Component {
    render() {
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered>
                <ModalHeader>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <img alt="home about section" src="/src/images/logo.png" />
                    </div>                    
                </ModalHeader>
                <ModalBody className="wipModalBody">
                    <p><b>Work In Progress</b></p>
                </ModalBody>
                <ModalFooter>
                    <button onClick={this.props.onHide}>Close</button>
                </ModalFooter>
            </Modal>
       
        )
    }
    
}

export default WIPModal;
