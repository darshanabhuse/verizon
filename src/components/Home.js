import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
	
	render() {
		return (
			<div>
                <header>
                    <div className="vs-ts-nav-dropdown-overlay"></div>
                    <nav className="navbar navbar-expand-md d-none d-md-block">
                        <div className="navbar-group container">
                            <a className="thing-space" href='/'>ThingSpace</a>
                
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
                                        <Link className="dropdown-toggle" data-toggle="dropdown" to="signin" id="signInMenu" role="button">
                                            <strong className="login-text">Sign in </strong></Link><span className="login-text"> / </span><Link className="dropdown-toggle" data-toggle="dropdown" to="register"  role="button"><strong className="login-text">Register</strong></Link>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    </nav>

                    <nav className="d-block d-md-none">
                        <div className="navbar-group container">
                            <a className="thing-space" href='/'>ThingSpace</a>
                            <span className="pull-right">
                                <a><ng-signin-register></ng-signin-register></a>
                            </span>
                        </div>
                        <ul className="mobile_menu">
                            <li>
                                <a>Services</a>
                                
                            </li>
                            <li>
                                <a>Solutions</a>
                                
                            </li>
                            <li>
                                <a>Partners</a>
                                
                            </li>
                            <li>
                                <a>Resources</a>
                                
                            </li>
                        </ul>
                    </nav>  
                </header>


                <div className="partners">
                    <section className="ts-banners">
                        <div className="container">
                            <h3>Partners</h3>
                        </div>
                    </section>
                </div>
                <div className="partners">
                <section className="intro-section pb60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Customer/Vendor needs/Problem Statement</h2>
                            </div>
                        </div>
                        <ul className="black-text-10px">
                            <li>Lack of awareness among vendors on standards for VNF package developed for self-assessment on carrier platforms such that, the products delivered to our customers are lot more solid (from aspects of security, functionality, performance and automation).</li>
                            <li>Lack of influence among vendor communities on self-validation based off of Verizon’s requirements.</li>
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
export default Home;