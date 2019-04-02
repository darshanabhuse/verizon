import React from "react";
import {
    Form,
    FormGroup,
    FormLabel, Button,
    FormControl,
    Overlay,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';
import { Textbox } from "react-inputs-validation";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

class ProdcutInfo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ProductName : '',
            Description:'',
            name : [],
            show: false,
            modalShow : false,
            showvnf : false,
            lobName : [],
            lobOptionsData : [] 
        };
        this.handleChange = this.handleChange.bind(this);
        this.lobHandleChange = this.lobHandleChange.bind(this);
     }
     
     componentDidUpdate(prevProps, prevState) {
          if (prevProps.platformstateValue !== this.props.platformstateValue) {
               let platformstateValue = this.props.platformstateValue;
               this.setState({name : platformstateValue.split(",") });
          }
          if(prevProps.lobArrayValue !== this.props.lobArrayValue) {
               let lobArrayValue = this.props.lobArrayValue;
               this.setState({ lobName : lobArrayValue.split(",") });

               // Code for changing VNF Category
               let lobArrayValueMap = lobArrayValue.split(",");
               const {
                    lob
               } = this.props;
               let lobOptionsDataHtml = [];
               if (lob && lob.length && lobArrayValueMap.length !== 0 ) {
                    this.setState({
                         lobOptionsData : lob.map(opt => {
                              let lobOpt = Object.keys(opt);
                              let lobValue = opt[lobOpt]
                              for(let i=0; i< lobArrayValueMap.length; i++) {
                                   if(lobArrayValueMap[i] == lobOpt[0]) {
                                        return lobValue.map(lobSelect => {
                                             return (
                                                  <option value={lobSelect.value}>{lobSelect.name}</option>
                                             )
                                        })
                                   }
                              }
                         })
                    })
               }
          }          
     }
     handleChange(event) {
        this.setState({ name: event.target.value });
     }

     lobHandleChange(event) {
        const {
			lob
        } = this.props;
        this.setState({ lobName: event.target.value});
          
        if (lob && lob.length && event.target.value == "Select Category") {
               this.setState({
                     lobOptionsData : ""
               })
          }
          
          else if (lob && lob.length && event.target.value !== '' || undefined) {
               this.setState({
                    lobOptionsData : lob.map(opt => {
                         let lobOpt = Object.keys(opt);
                         let lobValue = opt[lobOpt]
                         for (let i =0; i< event.target.value.length; i++) {
                         if(event.target.value [i] == lobOpt[0]) { 
                         return lobValue.map(lobSelect => {
                         return (
                         <option value={lobSelect.value}>{lobSelect.name}</option>
                    )
               })
          }
          }
                              
                          })
               })
          }
     } 
    render(){
     const {
          product_type,
          lob,
          platform,
          platformstateValue,
          ProductName,
          Description,
          product_name,
          vnf_category,
          tags,
          product_typestate,
          product_type_value,
          vnfcategoryValue,
          description
     } = this.props;
     let listItems = product_type;
     let platformItems = platform;
     let lobItems = lob;
     let arr = '';
     let platformOption = '';
     let lobOptions ='';
     if (listItems && listItems.length) {
          arr = listItems.map(option => {
          return (
               <option value={option.value}>{option.name}</option>
          )
          });
     }
     if (platformItems && platformItems.length) {
          platformOption = platformItems.map(option => {
          return (
               <option value={option.value}>{option.name}</option>
          )
          });
     }
	 if (lobItems && lobItems.length) {
          lobOptions = lobItems.map(option => {
               let lobOp = Object.keys(option);
               return (
               <MenuItem key={lobOp[0]} value={lobOp[0]}>
               <Checkbox checked={this.state.lobName.indexOf(lobOp[0])>-1} />
               <ListItemText primary={lobOp[0]} />
               </MenuItem>
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
                         <FormControl as="select" value={product_typestate} onChange={this.props.onProductTypeChangeValue}>
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
                 <div className="col-lg-2">
                    <FormGroup controlId="formControlsSelect">
                    {/* <FormControl as="select" id= "selectlob" onChange={this.props.onLobChangeValue}> */}
                         <InputLabel id= "selectlob" htmlFor="select-multiple-checkbox"></InputLabel>
                         <Select
                         multiple
                         MenuProps={{
                         anchorOrigin: {
                         vertical: "bottom",
                         horizontal: "left"
                         },
                         transformOrigin: {
                         vertical: "top",
                         horizontal: "left"
                         },
                         getContentAnchorEl: null
                         }}
                         className="form-control"
                         value={this.state.lobName}
                         onChange={this.lobHandleChange}
                         input={<Input id="select-multiple-checkbox" />}
                         renderValue={selected => selected.join(', ')}
                         >
                         {
                         lobOptions
                         }
                         </Select>
                    {/* </FormControl> */}
                    </FormGroup>
               </div>
               <div className="col-lg-1">
                    <OverlayTrigger
                         key='right'
                         placement='right'
                         overlay={
                              <Tooltip id={`tooltip-right`}>
                                   <strong>Line Of Business</strong>
                              </Tooltip>
                         }
                    >
                         <Button  className="tooltip_attached" >?</Button>
                    </OverlayTrigger>
               </div>
               <div className="col-lg-2">
                    <FormGroup controlId="formControlsSelect">
                         <FormControl as="select" value={vnf_category} onChange={this.props.onVNFCatChangeValue} >
                         {this.state.lobOptionsData}
                         </FormControl>

                         {vnf_category && vnf_category== "Other" && <input className = "form-control" type = "text" placeholder = "Other VNF Category" />} 
                    </FormGroup>
               </div>
               <div className="col-lg-1">
                
                    <OverlayTrigger
                         key='right'
                         placement='right'
                         overlay={
                              <Tooltip id={`tooltip-right`}>
                                   <strong>VNF CAtegory </strong>
                              </Tooltip>
                              }
                    >
                         <Button  className="tooltip_attached" >?</Button>
                    </OverlayTrigger>
                 </div>
                 <div className="col-lg-6">
                    <FormGroup controlId="formControlsSelect" onChange={this.props.onPlatformChangeValue}>
                         <InputLabel htmlFor="select-multiple-checkbox-platform"></InputLabel>
                         <Select
                                   multiple
                                   MenuProps={{
                                        anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left"
                                        },
                                        transformOrigin: {
                                        vertical: "top",
                                        horizontal: "left"
                                        },
                                        getContentAnchorEl: null
                                   }}
                                   className="form-control"
                                   value={this.state.name}
                                   onChange={this.handleChange}
                                   input={<Input id="select-multiple-checkbox-platform" />}
                                   renderValue={selected => selected.join(', ')}
                              >
                              {
                                   platform &&
                                   platform.map(option => (
                                        <MenuItem key={option.value} value={option.name}>
                                             <Checkbox checked={this.state.name.indexOf(option.name) > -1} />
                                             <ListItemText primary={option.name} />
                                        </MenuItem>
                                   ))
                              }
                              </Select>
                              <OverlayTrigger
                              key='right'
                              placement='right'
                              overlay={
                                   <Tooltip id={`tooltip-right`}>
                                        <strong>Platform </strong>
                                   </Tooltip>
                                   }
                         >
                              <Button  className="tooltip_attached" >?</Button>
                         </OverlayTrigger>
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
                 <FormControl type="input" value={tags} placeholder="Enter Tags to search" onChange={this.props.onTagsChangeValue}/>
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
