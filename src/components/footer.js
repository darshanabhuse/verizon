import React from "react";



class Footer extends React.Component {

    render() {
        return(
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <Link to='/'><img alt="home about section" src="./src/images/logo.png" /></Link>
            </div>
        </div>
        )
        
    }
}

export default Footer;