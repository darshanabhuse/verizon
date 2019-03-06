import React from "react";
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from './navigation';
import Titles from './titles';
//import Footer from './footer';

class AppHome extends React.Component {
    
    render() {
        return (
            <div className="page-background">
                <header>
                    <div className="vs-ts-nav-dropdown-overlay"></div>
                   <nav className="navbar navbar-expand-md d-none d-md-block height">
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
                         </div>
                         <div>
                    <table id="dtBasicExample" class="table table-striped table-sm" cellspacing="0" width="100%">
                    <thead>
                        <tr>
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
                        <tr>
                        <td>User 1</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>Edinburgh</td>
                        <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                        </tr>   
                        <tr>
                        <td>User 1</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>Edinburgh</td>
                        <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                        </tr>   
                        <tr>
                        <td>User 1</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>Edinburgh</td>
                        <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                        </tr>   
                        <tr>
                        <td>User 1</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>Edinburgh</td>
                        <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                        </tr>   
                        <tr>
                        <td>User 1</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>Edinburgh</td>
                        <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                        </tr>   
                        <tr>
                        <td>User 1</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>Edinburgh</td>
                        <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                        </tr>   
                        <tr>
                        <td>User 1</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>Edinburgh</td>
                        <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                        </tr>   
                        <tr>
                        <td>User 1</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>Edinburgh</td>
                        <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                        </tr>                        
                        <tr>
                        <td>User 1</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>Edinburgh</td>
                        <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                        </tr>   
                        <tr>
                        <td>User 1</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>Edinburgh</td>
                        <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
                        </tr>   

                    </tbody>
                    </table>
            </div>

                </div>
            
            
            </div>
        )
    }
}
export default AppHome;
