import React from "react";
import {
    Button
    } from 'react-bootstrap';
    import WIPModal from './wipmodal';

class Dashboard extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = { modalShow : false };

        this.handleClick = this.handleClick.bind(this);

        this.modalClose = this.modalClose.bind(this);
    }

    handleClick() {
        console.log(this.state.modalShow);
        this.setState({
            modalShow : true
        })
    }
    modalClose() {
        console.log(this.state.modalShow);
        this.setState({
            modalShow : false
        })
    }

    render() {
        return(
            <div className="container">
                 <div className="row">
                    <div className="col-lg-12 navigationBar">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                        <img alt="home about section" src="./src/images/logo.png" />
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
                 </div>
                 <div className="">
                    <div className="row bg-grey">
                        <div className="col-lg-12 margin-bottom margin-top dash-head">
                        <strong className="login-text">Company Users</strong>
                        </div>
                        <div className="col-lg-12 margin-bottom">
                        <Button onClick={this.handleClick} variant="dash" type="submit">
                                    Add A New User
                                </Button>
                         </div>
                         <div className="w3-example col-lg-12">
                            <h4>List of Company Users</h4>
                                <div className="margin-top">
                                <div  className="col-lg-3">
                            Search the Users
                         </div>
                         <div  className="col-lg-8">
                                <div className="search">
                                    <input type="text" className="searchTerm"/>
                                </div>
                                <Button onClick={this.handleClick} variant="dash" type="submit">
                                    Go
                                </Button>
                               
                         </div>
                                </div>
                        </div>
                        
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
      <td>Tiger Nixon</td>
      <td>System Architect</td>
      <td>Edinburgh</td>
      <td>61</td>
      <td>2011/04/25</td>
      <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
    </tr>
    <tr>
      <td>Garrett Winters</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td>63</td>
      <td>2011/07/25</td>
      <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
    </tr>
    <tr>
      <td>Ashton Cox</td>
      <td>Junior Technical Author</td>
      <td>San Francisco</td>
      <td>66</td>
      <td>2009/01/12</td>
      <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
    </tr>
    <tr>
      <td>Cedric Kelly</td>
      <td>Senior Javascript Developer</td>
      <td>Edinburgh</td>
      <td>22</td>
      <td>2012/03/29</td>
      <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
    </tr>
    <tr>
      <td>Airi Satou</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td>33</td>
      <td>2008/11/28</td>
      <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
    </tr>
    <tr>
      <td>Brielle Williamson</td>
      <td>Integration Specialist</td>
      <td>New York</td>
      <td>61</td>
      <td>2012/12/02</td>
      <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
    </tr>
    <tr>
      <td>Herrod Chandler</td>
      <td>Sales Assistant</td>
      <td>San Francisco</td>
      <td>59</td>
      <td>2012/08/06</td>
      <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
    </tr>
    <tr>
      <td>Rhona Davidson</td>
      <td>Integration Specialist</td>
      <td>Tokyo</td>
      <td>55</td>
      <td>2010/10/14</td>
      <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
    </tr>
    <tr>
      <td>Colleen Hurst</td>
      <td>Javascript Developer</td>
      <td>San Francisco</td>
      <td>39</td>
      <td>2009/09/15</td>
      <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
    </tr>
    <tr>
      <td>Sonya Frost</td>
      <td>Software Engineer</td>
      <td>Edinburgh</td>
      <td>23</td>
      <td>2008/12/13</td>
      <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
    </tr>
    <tr>
      <td>Jena Gaines</td>
      <td>Office Manager</td>
      <td>London</td>
      <td>30</td>
      <td>2008/12/19</td>
      <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
    </tr>
    <tr>
      <td>Quinn Flynn</td>
      <td>Support Lead</td>
      <td>Edinburgh</td>
      <td>22</td>
      <td>2013/03/03</td>
      <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
    </tr>
    <tr>
      <td>Charde Marshall</td>
      <td>Regional Director</td>
      <td>San Francisco</td>
      <td>36</td>
      <td>2008/10/16</td>
      <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
    </tr>
    <tr>
      <td>Haley Kennedy</td>
      <td>Senior Marketing Designer</td>
      <td>London</td>
      <td>43</td>
      <td>2012/12/18</td>
      <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a></td>
    </tr>
    <tr>
      <td>Tatyana Fitzpatrick</td>
      <td>Regional Director</td>
      <td>London</td>
      <td>19</td>
      <td>2010/03/17</td>
      <td><a href="javascript:void(0)"><span onClick={this.handleClick}>Edit</span></a> &nbsp; <a href="javascript:void(0)"><span onClick={this.handleClick}>Delete</span></a><a href="javascript:void(0)"><span onClick={this.handleClick}>Go</span></a></td>
    </tr>
  </tbody>
</table>
</div>
                 </div>
                 <WIPModal show={this.state.modalShow} onHide={this.modalClose} />
            </div>
       
        )
        
    }
}

export default Dashboard;
