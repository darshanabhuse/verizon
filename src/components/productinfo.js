import React from "react";
import {
     Form,
     FormGroup,
    FormLabel, Button,
    FormControl
     } from 'react-bootstrap';
import { Textbox } from "react-inputs-validation";
class ProdcutInfo extends React.Component{

     constructor(props) {
          super(props);
          this.state = {
              ProductName : '',
              Description:''
       };
          
      }
    render(){
     const {
          product_type,
          platform,
          ProductName,
          Description,
          product_name,
          lob,
          vnf_category,
          tags,
          description
     } = this.props;
     let listItems = product_type;
     let platformItems = platform;
     let arr = '';
     let platformOption = '';
     if(listItems && listItems.length) {
          arr = listItems.map(option => {
          return (
               <option value={option.value}>{option.name}</option>
          )
          });
     }
     if(platformItems && platformItems.length) {
          platformOption = platformItems.map(option => {
          return (
               <option value={option.value}>{option.name}</option>
          )
          });
     }
        return(
            <div className="container wd">
                <div className="row">
                 <div className="col-lg-8 bold">
                 Product Information 
                 </div>
            </div>
            <div className="row">
                 <div className="col-lg-6">
                            <FormLabel>Product Name<span className="text-red">*</span></FormLabel>
                </div> 
                <div className="col-lg-6">
                            <FormLabel>Product Type<span className="text-red">*</span></FormLabel>
                 </div>
                 
            </div>
            <div className="row">
                 <div className="col-lg-6">
                 <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Product Name"} //Optional.[String].Default: "".  Input ID.
                            name="Product Name" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={product_name} //Optional.[String].Default: "".
                            placeholder="Product Name" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={this.props.onPraductNameChangeValue} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "Product Name", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                            }}
                        />
                 </div>
                <div className="col-lg-6">
                    <FormGroup controlId="formControlsSelect">
                         <FormControl as="select" onChange={this.props.onProductTypeChangeValue}>
                              {arr}
                         </FormControl>
                    </FormGroup>     
                 </div>
            </div>

            <div className="row">
                 <div className="col-lg-3">
                            <FormLabel>LOB<span className="text-red">*</span></FormLabel>
                </div> 
                <div className="col-lg-3">
                            <FormLabel>VNF Category</FormLabel>
                 </div>
                 <div className="col-lg-6">
                            <FormLabel>Platform<span className="text-red">*</span></FormLabel>
                 </div>
                 
            </div>
            <div className="row">
                 <div className="col-lg-3">
                 <FormControl type="input" placeholder="Dropdown"  onChange={this.props.onLobChangeValue} />
                 </div>
                <div className="col-lg-3">
                <FormControl type="input" placeholder="Dropdown"  onChange={this.props.onVNFCatChangeValue} />
                 </div>
                 <div className="col-lg-6">
                    <FormGroup controlId="formControlsSelect" onChange={this.props.onPlatformChangeValue}>
                         <FormControl as="select">
                              {platformOption}
                         </FormControl>
                    </FormGroup> 
                 </div>
            </div>

            <div className="row">
                 <div className="col-lg-3">
                            <FormLabel>Tags<span className="text-red">*</span></FormLabel>
                </div>
            </div>
            <div className="row">
                 <div className="col-lg-3">
                 <FormControl type="input" placeholder="Enter Tags to search" onChange={this.props.onTagsChangeValue}/>
                 </div>
            </div>
            <div className="row">
                 <div className="col-lg-12">
                            <FormLabel>Description<span className="text-red">*</span></FormLabel>
                </div>
            </div>
            <div className="row">
                 <div className="col-lg-12">
                 <Textbox
                            tabIndex="1" //Optional.[String or Number].Default: -1.
                            id={"Description"} //Optional.[String].Default: "".  Input ID.
                            name="Description" //Optional.[String].Default: "". Input name.
                            type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
                            value={description} //Optional.[String].Default: "".
                            placeholder="Description" //Optional.[String].Default: "".
                            classNameInput = "form-control"
                            onChange={this.props.onDescriptionChangeValue} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "Description", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
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
            )
        }
    }
    
    export default ProdcutInfo;
