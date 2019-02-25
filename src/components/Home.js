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
                                            <strong className="login-text">Sign in<span > / </span>Sign up</strong>
                                        </Link>
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

  
                <nav className="container breadcrumb" aria-label="breadcrumb">
                    <ul className="breadcrumb-list">
                        
                    
                        
                    
                    <li className="breadcrumb-item">
                        <a href="#">Partners</a>
                    </li>

                    </ul>
                </nav>


            <div className="partners">
                <section className="intro-section pb60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="mb30">Streamline your IoT development with our partners.</h2>
                            </div>
                        </div>
                        <p className="black-text-20px">
                                We work with some the world’s leading IoT innovators to help our customers accelerate their time to market. 
                                Whether you’re looking to work with someone to design a solution for you or need a little help building your own, we have the resources you need. 
                        </p>
                    </div>
                </section>
                <section className="section-search">
                    <div className="container">
                        <div className="border-underline">
                            <div className="inline-block"><img id="search-icon" src="./src/icons/Magnifying_glass.svg" alt="Magnifying_glass" /></div>
                                <input type="text" id="search-by-partner-input" className="search-by-partner-k inline-block" placeholder="Search by partner,  key word, vertical, etc." />
                            </div>
                        </div>
                </section>
                <section id="five-icons" className="pt30">
                    <div className="container">
                        <div className="row textbox_top-line">
                            <div className="col-md-2">
                                <img src="./src/icons/Cloud_Partners_120.svg" alt="cloudpartners-icon" />
                            </div>
                            <div className="col-md-10">
                                <h5 className="pt15resp">Cloud Partners</h5>
                                <p className="mt20">Securely stream your sensor data to the cloud. We have partnered with some of the
                                    most popular cloud service providers to enable customers to use the platforms they already work
                                    with
                                    while leveraging Verizon's network and the ThingSpace platform.
                                </p>
                                <div className="mt20">
                                    <a href="#">
                                        <p className="bold text-black mr10 inline-block">Learn more</p>
                                        <img className="inline-block" src="./src/icons/right_carret_black.svg" alt="right_carret_black" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    <div className="row textbox_top-line">
                        <div className="col-md-2">
                                <img src="./src/icons/Design_Houses_120.svg" alt="designhouses-icon" />
                        </div>
                        <div className="col-md-10">
                            <h5 className="pt15resp">Design houses</h5>
                            <p className="mt20">Leverage insight from IoT designers on the forefront of innovation. Looking for support in designing your IoT solution? 
                                These design houses have experience building solutions on the ThingSpace platform and can help you achieve your IoT goal.
                            </p>
                        </div>
                        <div className="mt20">
                            <a href="#">
                                <p className="bold text-black mr10 inline-block ">Learn more</p>
                                <img className="inline-block" src="./src/icons/right_carret_black.svg" alt="right_carret_black" />
                            </a>
                        </div>
                    </div>
            <div className="row textbox_top-line">
                <div className="col-md-2">
                        <img src="./src/icons/Hardware_120.svg" alt="hardware-icon" />
                </div>
                <div className="col-md-10">
                    <h5 className="pt15resp">Hardware</h5>
                    <p className="mt20">The ThingSpace SDK is pre-integrated on leading modules and SIMs, making device development simple and efficient.
                         Pre-negotiated pricing and special connection credits make getting started even more cost-efficient.
                    </p>
                    <div className="mt20">
                        <a href="#">
                            <p className="bold text-black mr10 inline-block ">Learn more</p>
                            <img className="inline-block" src="./src/icons/right_carret_black.svg" alt="right_carret_black" />
                        </a>
                    </div>
                </div>
            </div>
           <div className="row textbox_top-line">
                <div className="col-md-2">
                        <img src="./src/icons/System_Integrators_120.svg" alt="systemintegrators-icon" />
                </div>
                <div className="col-md-10">
                    <h5 className="pt15resp"> System integrators</h5>
                    <p className="mt20"> Connect with an end-to-end integration partner for your IoT solution. With specialized knowledge and diverse experience, 
                        our system integration partners can help you take your idea from concept to production.
                    </p>
                    <div className="mt20">
                        <a href="#">
                            <p className="bold text-black mr10 inline-block ">Learn more</p>
                            <img className="inline-block" src="./src/icons/right_carret_black.svg" alt="right_carret_black" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <section className="mtb100">
            <div className="container">
                <div className="img-as-background">
                    <div className="row ptb100">
                        <div className="col-md-12">
                            <div className="offset-md-6 col-md-6 col-sm-6 pl80resp15">
                                <div>
                                    <h3 className="text-white">Partner with ThingSpace.</h3>
                                </div>
                                <p className="pt30 text-white">
                                        If you have an IoT solution built on the ThingSpace platform that 
                                        you're ready to share with the world, get in touch with us. 
                                </p>
                                <a className="btn btn-white" href="/partners/become-a-partner/">Become a partner</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-black">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="text-white">ThingSpace Ready</h3>
                        </div>
                        <div className="offset-md-2 col-md-6 gap40 pt30resp">
                            <p className="text-white">
                                    We’ve curated a group of partners to provide you with all the building blocks you need for your IoT solution. ThingSpace is pre-integrated with these partners 
                                    we’ve negotiated some competitive rates so you can quickly and economically get your solution to market.
                            </p>
                            <a href="/solutions/thingspace-ready/">
                                <button className="btn-white">
                                        Get ready
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

</div>

  
                <footer>
                    <div id="blank"></div>
                    <div className="container footer-body">
                        <div className="float-left legal">
                            <img src='./src/icons/VerizonLogo.jpg' className="mb5" alt="default_icon" />
                            <span className="mb10-resp"><a href='#'>About ThingSpace</a></span>
                            <span className="mb10-resp"><a href="http://www.verizon.com" target="_blank">Verizon.com</a></span>
                            <span><a href="#">Legal</a></span>
                        </div>
                        <div className="social-icons">
                            <span className="connect-us">Connect with us</span>
                            <a href="https://www.linkedin.com/company/verizonenterprisesolutions/" className="vertical-styling" target="_blank">
                                <img alt="linkedin" src='./src/icons/linkedin-logo.svg ' />
                            </a>
                            <a href="https://twitter.com/vzenterprise" className="vertical-styling" target="_blank">
                                <img alt="twitter" src='./src/icons/twitter-logo-button.svg' />
                            </a>
                            <a href="https://www.youtube.com/user/verizonenterprise" className="vertical-styling" target="_blank">
                                <img alt="youtube" src='./src/icons/youtube-logotype.svg ' />
                            </a>
                        </div>
                        <div className="copy-rights">
                            <p className="right_txt">© <script>document.write(new Date().getFullYear())</script> Verizon. All Rights Reserved</p>
                        </div>
                    </div>
                </footer>


            </div>
		)
	}
}
export default Home;