import React from "react";
import "./Home.css";
import profileimg from "../assets/img/Profileimg .jpeg";
import Pdf from "../assets/img/Poulami_Pedia.pdf";
import { Link } from "react-router-dom";
import Linkedinicon from "../assets/img/socialicons/linkedin.png";
import Instagramicon from "../assets/img/socialicons/instagram.png";
import Githubicon from "../assets/img/socialicons/github.png";

// import MailIcon from "../assets/img/socialicons/email.png";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="imgsec">
              <img
                src={profileimg}
                data-aos="flip-right"
                alt="Poulami Mondal"
                className="img-fluid"
              />
              <br></br>
              <br></br>
              <br></br>

              <div className="socialmedia">
                <a
                  href="https://www.linkedin.com/in/poulami-mondal-a39786213/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Linkedinicon}
                    alt="linkedin"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <br></br>
                
                <a
                  href="https://github.com/Poulami82404"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Githubicon}
                    alt="github"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="https://www.instagram.com/miss_poulamimondal?igsh=MTY4dHVnam8xcDkzcg=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Instagramicon}
                    alt="instagram"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                {/* <a
                  href="poulami.jfsjd99@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={MailIcon}
                    alt="email"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a> */}
              </div>
              <div className="bgblack" data-aos="fade-right"></div>
            </div>
          </div>
          <div className="col-sm-5 offset-sm-2">
            <div className="rightcontent" data-aos="fade-right">
              <h1>Poulami Mondal</h1>
              <h2>Full Stack Developer</h2>
              <p><b> Passionate front-end developer with a flair for creating captivating user experiences. 
              Proficient in HTML, CSS, and JavaScript, and React Js in frontend and  Spring Boot in backend 
              with a keen eye for design and a commitment to stayingupdated with the latest web technologies. 
              Dedicated to crafting clean, responsive, and accessible interfaces that delight users.</b>
              </p>
              <div className="row">
                <div className="col-sm-4 col-6">
                  <a href={Pdf} target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-primary">
                      Resume
                    </button>
                  </a>
                </div>
                <div className="col-sm-5 col-6">
                  <Link to="/contact">
                    <button type="button" className="btn btn-primary">
                      Hire Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      
    </div>














  );
};






export default Home;


