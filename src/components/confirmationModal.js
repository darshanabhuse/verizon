import React from "react";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import {
	Nav,
	NavItem,
	NavLink
	} from 'reactstrap';



class ConfirmationModal extends React.Component {
    render() {
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered>
                <ModalHeader>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <img alt="home about section" src="/src/images/logo.png" />
                    </div>                    
                </ModalHeader>
                <ModalBody className="wipModalBody">
                    <p><b>Are you sure, you want to delete this application?</b></p>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={this.props.onDelete}>Ok</button>
                    <button className="btn btn-primary" onClick={this.props.onHide}>Cancel</button>
                </ModalFooter>
            </Modal>
       
        )
    }
    
}

export default ConfirmationModal;
