import React from "react";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";



class WIPModal extends React.Component {
    render() {
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered>
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
