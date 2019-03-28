import React from "react";
import { Link } from "react-router-dom";
import { signin } from "../actions/signinaction";
import {connect} from 'react-redux';
import axios from "axios";
import { Carousel, CarouselItem } from 'react-bootstrap';

class Design extends React.Component {
	render() {
        return (
			<div>
                <header>
                    <div className="vs-ts-nav-dropdown-overlay"></div>
                    <nav className="navbar navbar-expand-md d-none d-md-block designnav">
                        <div className="navbar-group container">
                            <Link to='/'><img alt="home about section" className="home_img_width" src="/src/images/logo.png" /></Link>

                            
                            <div className="collapse vz-navbar-collapse" id="navbarCollapse">
                                <ul className="vz-ts-navbar-nav">
                        
                                    <li className="vz-ts-dropdown services">
                                        <a href='#'>Design & Build</a>
                                    </li>
                                    
                                    <li className="vz-ts-dropdown solutions">
                                        <a href='#'>Get Certified</a>
                                    </li>
                                    
                                    <li className="vz-ts-dropdown partners">
                                        <a href='#'>Showcase</a>
                                    </li>
                                    
                                    <li className="vz-ts-dropdown">
                                        <a href='#'>FAQs</a>
                                    </li>
                                    <li className="vz-ts-dropdown">
                                        <a href='#'>News</a>
                                    </li>
                                </ul>
                                <div className="ng-signin-register">
                                    <div className="signin-group">
                                    <span className="login-text">   &nbsp;&nbsp; </span>
                                    
                                        <Link className="dropdown-toggle" data-toggle="dropdown" to="/signin" id="signInMenu" role="button">
                                            <strong className="login-text">Sign in </strong></Link><span className="login-text">   &nbsp;&nbsp; </span><Link className="dropdown-toggle btn btn-primary" data-toggle="dropdown" to="/register/1"  role="button"><strong className="login-text">Register</strong></Link>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    </nav>

                    
                </header>


                <div className="partners homepage designpage">
                    <section className="hero_image_carousel">
                        <Carousel>
                        
                            <CarouselItem>
                                <img alt="hero_image" className="hero_image" src="/src/images/02_D-B_A_Overview.jpg" />
                                <div className="hero_image_carousel_wrapper">
                                    <h2>Design & Build Virtualized Network Services</h2>
                                    <p className="hero_carousel_para">Verizon offers the VNS Innovation Platform to their potential partners to design and build standards compliant VNF components which can be an active ingredient in our Virtualized Network Service Function Chains (VNSFC) which can cater to diverse applications in specific market segments (like Enterprise branch connectivity solutions with SD-WAN, Firewalls, Routers, WAN Optimization, etc., and Edge Cloud Computing applications like Edge Security, Public safety, Industrial Automation, etc.).</p>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <img alt="hero_image" className="hero_image" src="/src/images/02_D-B_B_Wearable.jpg" />
                                <div className="hero_image_carousel_wrapper">
                                    <h2>Co-Creating Virtualized Network Services</h2>
                                    <p className="hero_carousel_para">With Verizon’s VNS Innovation Platform our potential partners can co-create innovative market differentiating VNFs ensuring that our VNS products and managed network services we build are solid from day one, work efficiently on our VCP and WB platforms and are supported through our Network DevOps processes with Agility.</p>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <img alt="hero_image" className="hero_image" src="/src/images/5587.jpg" />
                                <div className="hero_image_carousel_wrapper">
                                    <h2>Enabling Self-Help Validation & Gating Criteria</h2>
                                    <p className="hero_carousel_para">Based on Verizon Cloud & White Box platforms, VNS Innovation Platform enables our potential partners to design and package their VNF products with right ingredients to self-validate their functionality and performance based on our gating criteria. In the future, we could allow the partners to do your own detailed functional and performance testing making your products much more solid on our platforms to enable designing and managing carrier grade VNS.</p>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </section>
                </div>
                
            <footer>
                <div id="blank"></div>
                <div className="container footer-body">
                    <div>
                        <p className="black-text-10px">A tailored self-service portal for vendors to validate their VNF products on Verizon platforms</p>
                        <p className="black-text-10px"><Link to='/register'><strong className="login-text">App Select </strong></Link><Link to='/application'><strong className="login-text">Registrered List</strong></Link></p>
                    </div>

                </div>
            </footer>


            </div>
		)
    }
    
    

}
export default (Design);