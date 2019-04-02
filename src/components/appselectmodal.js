import React from "react";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import { Link } from "react-router-dom";
import {
	Nav,
	NavItem,
	NavLink
	} from 'reactstrap';


class AppSelectModal extends React.Component {
    constructor(...args) {
		super(...args);

		this.state = { disableRegister1 : true, disableRegister2 : true };

        this.handleChangeButton1 = this.handleChangeButton1.bind(this);
        this.handleChangeButton2 = this.handleChangeButton2.bind(this);
    }
    handleChangeButton1(e) {
        if(e.target.value == 'on') {
            this.setState({disableRegister1: false})
            this.setState({disableRegister2: true})
        }
        else {
            this.setState({disableRegister1: true})
        }
      }
      handleChangeButton2(e) {
        if(e.target.value == 'on') {
            this.setState({disableRegister2: false})
            this.setState({disableRegister1: true})
        }
        else {
            this.setState({disableRegister2: true})
        }
      }
    render() {
        return (
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <ModalHeader>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <img alt="home about section" src="./src/images/logo.png" />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <div className="navigation_wrapper">
								<Nav variant="tabs">
									<NavItem>
										<NavLink onClick={this.handleClick}><b>FAQ</b></NavLink>
									</NavItem>
								</Nav>
							</div>
                    </div>
                           
                </ModalHeader>
                <ModalBody className="wipModalBody">
                    <h4 className="modal_h4"><strong>Check the radio button to login or Register for an account</strong></h4>
                    <div className="app_details">
                        <p className="modal_p"><input type="radio" name="application" onChange={this.handleChangeButton1} /><span>VNFM Vendor Portal</span></p>
                        <p className="modal_c"><Link to="/">Get more details on our Marketing Page Now.</Link></p>
                        <p className="modal_b"><Link to="/register/1"><button disabled={this.state.disableRegister1} className="modalB">Register</button></Link></p>
                    </div>
                    <div className="app_details">
                        <p className="modal_p"><input type="radio" name="application" onChange={this.handleChangeButton2} /><span>BIMPaaS</span></p>
                        <p className="modal_c"><Link to="/home2">Get more details on our Marketing Page Now.</Link></p>
                        <p className="modal_b"><Link to="/register/2"><button disabled={this.state.disableRegister2}  className="modalB">Register</button></Link></p>
                    </div>
                    
                </ModalBody>
           </Modal>       
        )
    }
    
}

export default AppSelectModal;
