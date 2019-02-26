import React from "react";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import { Link } from "react-router-dom";



class AppSelectModal extends React.Component {
    render() {
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered>
                <ModalBody className="wipModalBody">
                    <h4 className="modal_h4"><strong>Select App </strong></h4>
                    <p className="modal_p"><Link to="/"><input type="radio" name="VNFM" />VNFM Vendor Portal</Link></p>
                    <p className="modal_p"><Link to="/home2"><input type="radio" name="BIMPaaS" />BIMPaaS</Link></p>
                </ModalBody>
           </Modal>       
        )
    }
    
}

export default AppSelectModal;
