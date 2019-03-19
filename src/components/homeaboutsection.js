import React from "react";
import homeaboutsection from "../images/aboutus_homesection.png";
import companyProfile from "../docs/company_profile.pdf";

class HomeAbout extends React.Component {

  render() {

    return (
		<div className="about_wrapper">
			<div className="outer_div">
				<div className="image-div"><img alt="home about section" src={homeaboutsection} /></div>
				<div className="inner_div"><h2>GET TO KNOW ABOUT US</h2>
					<p>We help oraganisations find, recruit and hire talent. Attract the necessary talent and skills for your organization, get satisfied applicatant and collaborate efficientlywith hiring managers.</p>
					<a href={companyProfile} target="_blank" className="submit_button">Company Profile</a>
				</div>
				
			</div>
		</div>
    )
  }
}

export default HomeAbout;