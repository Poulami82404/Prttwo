import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>About Me</h2>
              <p>
              I have been engaged in frontend development and design since my university days, 
              and have successfully completed various projects that have sharpened my skills in 
              web development . My expertise lies in HTML5, CSS3, JavaScript, SQL and the latest  
              library  such as React.js, which I recently utilized in a project involving 
              the development of a Weather App using API integration , Eco Volunteering Hub 
              and a Job Portal. I  have also designed and developed Figma Screens for UI purposes,
              ensuring  seamless user experience.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
