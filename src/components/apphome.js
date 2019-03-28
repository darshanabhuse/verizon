import React from "react";
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from './navigation';
import Titles from './titles';
import axios from "axios";
import ConfirmationModal from './confirmationModal';
//import Footer from './footer';

class AppHome extends React.Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
          checked: false,
          checkedAll : false,
          appsData : '',
          enableDelete : false,
          modalShow : false,
          modalDelete : false,
          clickedButton : '',
          editData :''
        }
        this.handleAllChecked = this.handleAllChecked.bind(this);
        this.handleCheckChieldElement = this.handleCheckChieldElement.bind(this);
        this.handleDeleteEntry = this.handleDeleteEntry.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleEditEntry = this.handleEditEntry.bind(this);
    }
    handleClick(apps) {
		this.setState({
            modalShow : true,
            clickedButton : event.target.id,
            editData : apps
		})
    }
    handleClickDelete() {
        this.setState({
			modalDelete : true
		});
    }
	modalClose() {
		this.setState({
            modalShow : false,
            modalDelete : false
		})
	}
    handleDeleteEntry(event) {
        console.log('in delete function');
        let apps = this.state.appsData;
        apps.forEach(app => {
            if (app.cheked === true) {
                let app_id = app._id;
                console.log(app_id);
                axios.post('http://127.0.0.1:9000/registerApp/delete/'+app._id, {headers: {
                    "Content-Type": "application/json"}
                })
                .then(
                    res => {
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
        });
    }
    handleEditEntry(appedit) {
        console.log(event.target);
        console.log(appedit);
    }
    handleAllChecked(event) {
        let apps = this.state.appsData;
        apps.forEach(app => app.cheked = event.target.checked);
        if(event.target.checked) {
            this.setState({checkedAll: true})
            this.setState({enableDelete : true})
        }
        else {
            this.setState({checkedAll: false})
            this.setState({enableDelete : false})
        }
        this.setState({appsData: apps})
    }
    handleCheckChieldElement(event) {
        let apps = this.state.appsData;
        apps.forEach(app => {
            if (app._id == event.target.value) {
                app.cheked =  event.target.checked;
            }
               
            
        });
        this.setState({appsData: apps});
        this.state.checkedAll = apps.every(function(item) {
            return item.cheked == true;
        });
        let disableDelete = apps.every(function(item) {
            return item.cheked == false;
        });
        if(disableDelete) {
            this.setState({enableDelete : false})
        }
        else {
            this.setState({enableDelete : true})
        }
        
    }
    componentDidMount () {
        let entity_response = axios.get('http://127.0.0.1:9000/registerApp/').then( response => {
            this.setState({'appsData' : response.data});
            const {
                appsData
            } = this.state;
            appsData.forEach((key) => {
                key["cheked"] = false;
            });
        });

        
    }
    // componentDidUpdate(prevProps, prevState) {
    //     // only update chart if the data has changed
    //     let entity_response = axios.get('http://127.0.0.1:9000/registerApp/').then( response => {
    //         if(prevState.appsData !== response.data) {
    //             this.setState({'appsData' : response.data});
    //             const {
    //                 appsData
    //             } = this.state;
    //             appsData.forEach((key) => {
    //                 key["cheked"] = false;
    //             });
    //         }
            
    //     });
        
    // }
    render() {
        return (
            <div className="page-background">
                <header>
                    <div className="vs-ts-nav-dropdown-overlay"></div>
                    <nav className="navbar applicationPage navbar-expand-md d-none d-md-block height">
                        <div className="navbar-group container">
                                <div>
                                <img alt="home about section" className="img-width" src="/src/images/logo.png" />
                                    <div className="left">
                                            <strong>VNF Marketplace</strong>
                                    </div>
                                </div>
                                    <div className="">
                                            <strong>Welcome User</strong>
                                    </div>
                        </div>
                    </nav>

                    
                </header>
                         <div className="flex-container">
                                <div>
                                    <div className="pos">
                                    <img className="img-home" src="/src/icons/Design_Houses_120.svg" />
                                    </div>
                                    <span>Upload</span>
                                </div>
                                <div>
                                <div className="pos">
                                    <img className="img-home" src="/src/icons/Design_Houses_120.svg" />
                                    </div>
                                <span>Validation</span>
                                </div>
                                <div>
                                <div className="pos">
                                    <img className="img-home" src="/src/icons/Design_Houses_120.svg" />
                                    </div>
                                    <span>Orchestration</span>
                               </div>  
                                <div>
                                <div className="pos">
                                    <img className="img-home" src="/src/icons/Design_Houses_120.svg" />
                                   </div>
                                    <span>Testing</span>
                                    </div>
                                <div>
                                <div className="pos">
                                    <img className="img-home" src="/src/icons/Design_Houses_120.svg" />
                                    </div>
                                    <span>Certification</span>
                                    </div>
                        </div>
            
                <div className="table-prop">
                    <p className="heading"><strong>VNF Products</strong></p>
                    
                    <div className="">
                        <Button onClick={this.handleClick} className="btApp" type="submit">
                       Register Product
                                </Button>
                        <div className="searchApp">
                            <input type="text" className="searchTerm" placeholder="Search"/>
                        </div>
                        { 
                            this.state.enableDelete && 
                            
                            <div className="btn_wrapper">
                                <Button className="btApp" id ="delete" onClick={this.handleClick} >Delete</Button>
                            </div>
                        }
                         </div>
                         <div>
                    <table id="dtBasicExample" class="table table-striped table-sm" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                        <th class="th-Home"><input type="checkbox" checked={this.state.checkedAll} onClick={this.handleAllChecked} />
                        </th>
                        <th class="th-Home">Actions

                        </th>
                        <th class="th-Home">Product Name

                        </th>
                        <th class="th-Home">Company Name

                        </th>
                        <th class="th-Home">Category

                        </th>
                        <th class="th-Home">Current Step

                        </th>
                        <th class="th-Home">Current Status

                        </th>
                        <th class="th-Home">Created By

                        </th>
                        <th class="th-Home">Creation Time

                        </th>
                        <th class="th-Home">Tags

                        </th>
                        <th class="th-Home">Comments   

                        </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.appsData && 
                            this.state.appsData.map((apps, index) => (
                                <tr>
                                    <td class="chkbox"><input type="checkbox" value={apps._id} data-prodid={apps._id} onChange={this.handleCheckChieldElement} checked={apps.cheked} /></td>
                                    <td>{apps.primary_contact_fn} {apps.primary_contact_ln}</td>
                                    <td>{apps.product_name}</td>
                                    <td>{apps.company_name}</td>
                                    <td>{apps.vnf_category}</td>
                                    <td>{apps.status}</td>
                                    <td>{apps.status}</td>
                                    <td>{apps.usertype}</td>
                                    <td>{apps.timestamp}</td>
                                    <td>{apps.tags}</td>
                                    <td><Link to={{
                                        pathname: '/application/edit',
                                        search: "?appId="+apps._id,
                                    }}><span data-prodid={apps._id} id = "edit" >Edit</span></Link> &nbsp;
                                    <a href="javascript:void(0)"><span data-prodid={apps._id} id = "view" onClick={this.handleClick.bind(this,apps)}>View</span></a></td>
                                </tr>
                                )
                            )
                        }  

                    </tbody>
                    </table>
                    <ConfirmationModal 
                    show={this.state.modalShow} 
                    onHide={this.modalClose} 
                    onDelete={this.handleDeleteEntry}
                    clickedButton={this.state.clickedButton}
                    editData={this.state.editData}
                    checkedField = {this.state.checked} />
            </div>

                </div>
            
            
            </div>
        )
    }
}
export default AppHome;
