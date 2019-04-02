import React from "react";
import { Link } from "react-router-dom";
import { signin } from "../actions/signinaction";
import {connect} from 'react-redux';
import axios from "axios";
import { Carousel, CarouselItem } from 'react-bootstrap';

class Home extends React.Component {
	constructor() {
        super();

        this.state = {
            newsArticle: [],
       };
    }

    componentDidMount() {
        let entity_response = axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=8f135b713f1a4487b7bbb9de394a1308').then( response => {
            response.data.articles.length = 9;    
            this.setState({
                newsArticle : response.data.articles
			});
        });			
	}
	render() {
        var content = this.state.newsArticle;
        var groupSize = 3;
        var rows = content.map(function(content) {
            // map content to html elements
            const toShow = content.title.substring(0,50)+"..."
            return <div><a target="_blank" href={content.url} className="article_link" >{toShow}</a></div>;
        }).reduce(function(r, element, index) {
            // create element groups with size 3, result looks like:
            // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
            index % groupSize === 0 && r.push([]);
            r[r.length - 1].push(element);
            return r;
        }, []).map(function(rowContent) {
            // surround every group with 'row'
            return <CarouselItem>{rowContent}</CarouselItem>;
        });
        return (
			<div>
                <header>
                    <div className="vs-ts-nav-dropdown-overlay"></div>
                    <nav className="navbar navbar-expand-md d-none d-md-block">
                        <div className="navbar-group container">
                            <Link to='/'><img alt="home about section" className="home_img_width" src="./src/images/logo.png" /></Link>

                            
                            <div className="collapse vz-navbar-collapse" id="navbarCollapse">
                                <ul className="vz-ts-navbar-nav">
                        
                                    <li className="vz-ts-dropdown services">
                                        <Link to="designnbuild">Design & Build</Link>
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


                <div className="partners homepage">
                    <section className="hero_image_carousel">
                        <div>
                            <img alt="hero_image" className="hero_image" src="./src/images/01_HOME_B.jpg" />
                            <div className="hero_image_carousel_wrapper">
                                <h3>Welcome to Verizon</h3>
                                <h4>Virtualised Network Service Innovation Platform</h4>
                                <p className="hero_carousel_para">Power your VNF products on the Verizon network. Signup for our VNS developer program to self-validate your VNFs on our platforms and innovate on new Vitalized Network Services and bring your ideas form concept to market readiness.</p>
                            </div>
                        </div>

                        <div className="news_feed right">
                            <h4>Verizon News > </h4>
                            <div className="carousel_newsfeed">
                                <Carousel>
                                {
                                    this.state.newsArticle && 
                                        rows
                                }
                                </Carousel>
                            </div>
                        </div>
                    </section>
                </div>
                
            <footer>
                <div id="blank"></div>
                <div className="container footer-body">
                    <div>
                        <p className="black-text-10px">A tailored self-service portal for vendors to validate their VNF products on Verizon platforms</p>
                        <p className="black-text-10px"><Link to='/register'><strong className="login-text">App Select </strong></Link><Link to='/application'><strong className="login-text">Registered List</strong></Link></p>
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