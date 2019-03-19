import React from "react";
import GeneralInfo from './components/generalinfo';
import PrimaryContact from './components/primarycontact';


class RegisterWithUs extends React.Component {

    render() {
        return(
            <div>
        <div className="row">
        <GeneralInfo />
        </div>
        <div className="row">
        <PrimaryContact />
        </div>
        </div>
        )
        
    }
}

export default RegisterWithUs;