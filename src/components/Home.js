import React from "react";
import { Link } from "react-router-dom";
import { signin } from "../actions/signinaction";
import {connect} from 'react-redux';

class Home extends React.Component {
	constructor() {
        super();

    //     this.state = {
    //         data: 1,
    //    };
    //    this.state.dispatch(signin(this.state.data));
    }
	render() {
		return (
			<div>
                <header>
                    <div className="vs-ts-nav-dropdown-overlay"></div>
                    <nav className="navbar navbar-expand-md d-none d-md-block">
                        <div className="navbar-group container">
                            <Link to='/'><img alt="home about section" className="home_img_width" src="/src/images/logo.png" /></Link>
                
                            <div className="collapse vz-navbar-collapse" id="navbarCollapse">
                                <ul className="vz-ts-navbar-nav">
                        
                                    <li className="vz-ts-dropdown services">
                                        <a href='#'>Services</a>
                                    </li>
                                    
                                    <li className="vz-ts-dropdown solutions">
                                        <a href='#'>Solutions</a>
                                    </li>
                                    
                                    <li className="vz-ts-dropdown partners">
                                        <a href='#'>Partners</a>
                                    </li>
                                    
                                    <li className="vz-ts-dropdown">
                                        <a href='#'>Resources</a>
                                    </li>
                                </ul>
                                <div className="ng-signin-register">
                                    <div className="signin-group">
                                    <span className="login-text">   &nbsp;&nbsp; </span>
                                        <Link className="dropdown-toggle" data-toggle="dropdown" to="/signin" id="signInMenu" role="button">
                                            <strong className="login-text">Sign in </strong></Link><span className="login-text">   &nbsp;&nbsp; </span><Link className="dropdown-toggle" data-toggle="dropdown" to="/register/1"  role="button"><strong className="login-text">Register</strong></Link>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    </nav>

                    
                </header>


                <div className="partners">
                    <section className="ts-banners">
                        <div className="container">
                            <h3>VNFM Vendor Portal</h3>
                        </div>
                    </section>
                </div>
                <div className="col-lg-12">
                    <h3>Welcome to Verizon</h3>
                </div>
                <div className="partners">
                <section className="intro-section pb60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                
                                <h2>VNS Innovation Platform (VIP)</h2>
                            </div>
                        </div>
                        <ul className="black-text-10px">
                            <li>Power your VNF products on the Verizon network. Signup for our VNS developer program to self-validate your VNFs on our platforms and innovate on new Vitalized Network Services and bring your ideas from concept to market readiness. </li>
                        </ul>
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Solution</h2>
                            </div>
                        </div>
                        <ul className="black-text-10px">
                            <li>Create awareness among vendor communities through industry forum communication and marketing portal where they can review the VNS Sandbox program and register themselves for self-assessment of their VNF products through a generic portal (reuse VEC).</li>
                            <li>Upon approval, onboard vendor users and drive adoption of standards based VNF Pkgs. to be uploaded into VNF Marketplace for validation.</li>
                            <li>Once Pkgs. are accepted (post security tests), vendors can trigger self-assessment functional tests on chosen Verizon platform(s) in a dedicated sandbox environment.</li>
                            <li>Evolve this ecosystem to collaboratively develop & standardize the test process/plans/libraries/scripts thus, alleviating the test burden on Verizon.</li>
                        </ul>
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Why Verizon</h2>
                            </div>
                        </div>
                        <ul className="black-text-10px">
                            <li>Attract rather than hunt down innovative product vendors (our offering and portal becomes viral).</li>
                            <li>Business Agility and reduced Time to Market in launching new VNS with innovative BMs.</li>
                            <li>Drive standardization for VNF development, testing and operations leading to smoother integration efforts and more consistent service behavior</li>
                            <li>Service Lifecycle Management with up-to-date and certified software VNF repository</li>
                        </ul>
                    </div>
                </section>
            </div>
            <footer>
                <div id="blank"></div>
                <div className="container footer-body">
                    <div>
                        <p className="black-text-10px">A tailored self-service portal for vendors to validate their VNF products on Verizon platforms</p>
                    </div>
                </div>
            </footer>


            </div>
		)
    }
    
    

}
// function mapUserSigninAppIDDefinedToProps(state) {
//     return {
   
//         errorMsg: state.signinReducer.data
//     }
// }
export default (Home);