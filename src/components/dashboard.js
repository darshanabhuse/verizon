import React from "react";
import {
    Button
    } from 'react-bootstrap';
import WIPModal from './wipmodal';
import { Link } from 'react-router-dom';
import AppHome from './apphome.js';
import { Tabs, Tab } from "react-bootstrap";

class Dashboard extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = { 
          modalShow : false,
          key: 'application_management',
        };

        this.handleClick = this.handleClick.bind(this);

        this.modalClose = this.modalClose.bind(this);
    }

    handleClick() {
        this.setState({
            modalShow : true
        })
    }
    modalClose() {
        this.setState({
            modalShow : false
        })
    }

    render() {
        return(

            <div className="container">
                 <div className="row">
                    <div className="col-lg-12 navigationBar dashboardnav">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                        <img className="home_img_width" alt="home about section" src="./src/images/logo.png" />
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                                        <div className="navigation_wrapper">
                                        <strong className="login-text">Manage Account</strong>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                                        <div className="navigation_wrapper">
                                        <strong className="login-text">Support</strong>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="partners dashboard col-lg-12">
                          <section className="ts-banners">
                          </section>
                      </div>
                 </div>
                <Tabs className="border-tab" id="controlled-tab-example" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
                    <Tab eventKey="application_management" title="Application Management" >
                      <div className="col-lg-12 margin-bottom margin-top dash-head">
                          <strong className="login-text">Application Access To</strong>
                      </div>
                      <div className="col-lg-12 margin-bottom">
                          <Button onClick={this.handleClick} className="dash" type="submit">
                            VNFM Vendor Portal
                          </Button>
                      </div>
                    </Tab>
                    <Tab eventKey="user_management" title="User Management" >
                      <div className="">
                        <div className="row bg-grey">
                          
                          <div className="w3-example col-lg-12">
                            <h4>List of Company Users</h4>
                              <div className="margin-top btn-go">
                              <div  className="col-lg-3">
                            Search the Users
                          </div>
                          <div className="row">
                            <div  className="col-lg-8">
                                <div className="search">
                                  <input type="text" className="searchTerm"/>
                                </div>
                                <Button onClick={this.handleClick} className="dash" type="submit">
                                  Go
                                </Button>
                              
                            </div>
                            <div className="col-log-4">
                              <button onClick={this.handleClick} className="dash btn btn-primary">Add User</button>
                            </div>
                          </div>
                              </div>
                          </div>
                          <WIPModal show={this.state.modalShow} onHide={this.modalClose} />
                        </div>
                          <div className="margin-top ">
                          <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                            <thead>
                            <tr>
                              <th class="th-sm">UserID

                              </th>
                              <th class="th-sm">First Name

                              </th>
                              <th class="th-sm">Last Name

                              </th>
                              <th class="th-sm">Role

                              </th>
                              <th class="th-sm">Start date

                              </th>
                              <th class="th-sm">Action

                              </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td>User 1</td>
                              <td>System Architect</td>
                              <td>Edinburgh</td>
                              <td>61</td>
                              <td>2011/04/25</td>
                              <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                            </tr>
                            <tr>
                              <td>User 2</td>
                              <td>Accountant</td>
                              <td>Tokyo</td>
                              <td>63</td>
                              <td>2011/07/25</td>
                              <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                            </tr>
                            <tr>
                              <td>User 3</td>
                              <td>Junior Technical Author</td>
                              <td>San Francisco</td>
                              <td>66</td>
                              <td>2009/01/12</td>
                              <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                            </tr>
                            <tr>
                              <td>User 4</td>
                              <td>Senior Javascript Developer</td>
                              <td>Edinburgh</td>
                              <td>22</td>
                              <td>2012/03/29</td>
                              <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                            </tr>
                            <tr>
                              <td>User 5</td>
                              <td>Accountant</td>
                              <td>Tokyo</td>
                              <td>33</td>
                              <td>2008/11/28</td>
                              <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                            </tr>
                            <tr>
                              <td>User 6</td>
                              <td>Integration Specialist</td>
                              <td>New York</td>
                              <td>61</td>
                              <td>2012/12/02</td>
                              <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                            </tr>
                            <tr>
                              <td>User 7</td>
                              <td>Sales Assistant</td>
                              <td>San Francisco</td>
                              <td>59</td>
                              <td>2012/08/06</td>
                              <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                            </tr>
                            <tr>
                              <td>User 8</td>
                              <td>Integration Specialist</td>
                              <td>Tokyo</td>
                              <td>55</td>
                              <td>2010/10/14</td>
                              <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                            </tr>
                            <tr>
                              <td>User 9</td>
                              <td>Javascript Developer</td>
                              <td>San Francisco</td>
                              <td>39</td>
                              <td>2009/09/15</td>
                              <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                            </tr>
                            <tr>
                              <td>User 10</td>
                              <td>Software Engineer</td>
                              <td>Edinburgh</td>
                              <td>23</td>
                              <td>2008/12/13</td>
                              <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                            </tr>
                            
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Tab>


                 </Tabs>
                 
                 <WIPModal show={this.state.modalShow} onHide={this.modalClose} />
            </div>
       
        )
        
    }
}

export default Dashboard;
