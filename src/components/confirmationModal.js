import React from "react";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import {
	Nav,
	NavItem,
	NavLink
    } from 'reactstrap';
import axios from "axios";


let modalContent = '';
let modalFooter = '';
let actions =  '';
let product_name = '';
let company_name = '';
let category = '';
let tags = '';
let updatedProductInfo = [];
class ConfirmationModal extends React.Component {
    editField() {
        console.log("inside editField before", event.target.defaultValue);
        event.target.defaultValue = event.target.value;
        console.log("inside editField after", event.target.defaultValue);
    }

    onEdit() {
        updatedProductInfo = [];
        actions = document.getElementById("actions").value;
        product_name = document.getElementById("product_name").value;
        company_name = document.getElementById("company_name").value;
        category = document.getElementById("category").value;
        tags = document.getElementById("tags").value;
        this.props.onHide();
        let names = actions.split(" ");
        console.log(actions);
        updatedProductInfo = {
            primary_contact_fn : names[0],
            primary_contact_ln : names[1],
            company_name : company_name,
            product_name : product_name,
            vnf_category : category,
            tags : tags
        }
        //updatedProductInfo.push(actions, product_name, company_name,category,tags);
        axios.post('http://127.0.0.1:9000/registerApp/update/'+this.props.editData._id, updatedProductInfo, {headers: {
            "Content-Type": "application/json"}
        })
        .then(
            res => {
                console.log(res);
                if(res.status == 200) {
                    let entity_response = axios.get('http://127.0.0.1:9000/registerApp/').then( response => {
                        this.setState({'appsData' : response.data});
                        const {
                            appsData
                        } = this.state;
                        appsData.forEach((key) => {
                            key["cheked"] = false;
                        });
                        this.setState({
                            enableDelete : false,
                            modalShow : false,
                            modalDelete : false
                        })
                    });
                }
                else {
                    alert ('Entry Not deleted.');
                }
            }
                
        );
    }
    render() {
        const {
            onDelete,
            onHide,
            clickedButton,
            editData,
            show
        } = this.props;

        if (clickedButton && clickedButton == "view"){
            modalContent = <div><p><b>Below are the product details : </b></p>
            <label className = "lab">Actions : </label> 
            <input type = "text" id ="actions" defaultValue = {editData.primary_contact_fn + " " + editData.primary_contact_ln} onChange = {this.editField} disabled/> <br></br>
            <label className = "lab">Product Name : </label>  
            <input type = "text" id= "product_name" defaultValue = {editData.product_name} onChange = {this.editField} disabled/><br></br>
            <label className = "lab">Company Name : </label>  
            <input type = "text" id="company_name" defaultValue = {editData.company_name} onChange = {this.editField} disabled/><br></br>
            <label className = "lab">Category : </label> 
            <input type = "text" id="category" defaultValue = {editData.vnf_category} onChange = {this.editField} disabled/><br></br>
            <label className = "lab">Tags : </label>  
            <input type = "text" id= "tags" defaultValue = {editData.tags} onChange = {this.editField} disabled/><br></br> 
          </div>
          modalFooter = <div>
              <button className="btn btn-primary" onClick={onHide}>Cancel</button>
          </div>
        }
        else if (clickedButton && clickedButton == "edit"){
            modalContent = <div>
                <input type = "hidden" defaultValue = {editData._id } /> <br></br>
              <label className = "lab">Actions : </label> 
              <input type = "text" id ="actions" defaultValue = {editData.primary_contact_fn + " " + editData.primary_contact_ln} onChange = {this.editField}/> <br></br>
              <label className = "lab">Product Name : </label>  
              <input type = "text" id= "product_name" defaultValue = {editData.product_name} onChange = {this.editField}/><br></br>
              <label className = "lab">Company Name : </label>  
              <input type = "text" id="company_name" defaultValue = {editData.company_name} onChange = {this.editField}/><br></br>
              <label className = "lab">Category : </label> 
              <input type = "text" id="category" defaultValue = {editData.vnf_category} onChange = {this.editField}/><br></br>
              <label className = "lab">Tags : </label>  
              <input type = "text" id= "tags" defaultValue = {editData.tags} onChange = {this.editField}/><br></br>
            </div>
            modalFooter = <div>
                <button className="btn btn-primary" onClick={this.onEdit.bind(this)}>Edit</button>
                <button className="btn btn-primary" onClick={onHide}>Cancel</button>
            </div>
        }
        else if (clickedButton && clickedButton == "delete"){
            modalContent = <p><b>Are you sure, you want to delete this application?</b></p>
            modalFooter = <div>
                <button className="btn btn-primary" onClick={onDelete}>Ok</button>
                <button className="btn btn-primary" onClick={onHide}>Cancel</button>
            </div>
        }
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered>
                <ModalHeader>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <img alt="home about section" src="../src/images/logo.png" />
                    </div>                    
                </ModalHeader>
                <ModalBody className="wipModalBody">
                    {/* <p><b>Are you sure, you want to delete this application?</b></p> */}
                    {modalContent}
                </ModalBody>
                <ModalFooter>
                    {/* <button className="btn btn-primary" onClick={onDelete}>Ok</button>
                    <button className="btn btn-primary" onClick={onHide}>Cancel</button> */}
                    {modalFooter}
                </ModalFooter>
            </Modal>
       
        )
    }
    
}

export default ConfirmationModal;
