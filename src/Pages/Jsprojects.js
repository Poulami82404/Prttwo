import React from "react";
import "./Jsprojects.css";
// import ProjectData from "../Data/Jsprojects.json";
import githubImg from "../assets/img/github.png";
import pf1 from "../assets/img/Project-01.png";
import pf2 from "../assets/img/Project-02.png";
import pf3 from "../assets/img/Project-3.jpeg";
import pf4 from "../assets/img/Project-4.png";
import pf5 from "../assets/img/Project-5.png";





const Jsprojects = () => {
  return (
    <div className="jsprojects">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <h2>Projects</h2>
            <br />
            {/* <div className="row">
              {ProjectData.map((project, i) => (
                <div className="col-sm-6" key={i}>
                  <iframe
                    width="100%"
                    height="300"
                    src={project.projectlink}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <br />
                  <a
                    href={project.codelink}
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} alt={i} />
                  </a>
                </div>
              ))}
            </div> */}
            <br />
            <h2>Landing Page of Resturant </h2>
            <p>
             Tools Ued : HTML | CSS
             <br></br>
             Basic Project using HTML and  CSS
            </p>
            <br />
            <div className="js">
              <div className="row">
                <div className="col-sm-6">
                  <a
                    href="https://github.com/Poulami82404/food_website"
                    target="_blank"
                  >
                    <img src={pf1} alt="Ecommerce Small Project" />
                  </a>
                  <br />  
                  <a
                    href="https://github.com/Poulami82404/food_website"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
              </div>
            </div>
            

            <h2>Vedic Webiste  </h2>
            <p>
            Tools Ued : HTML | CSS
            <br></br>
             Basic Project using HTML and  CSS
            </p>
            <br />
            <div className="js">
              <div className="row">
                <div className="col-sm-6">
                  <a href="https://github.com/Poulami82404/Vedic_webpage" target="_blank">
                    <img src={pf2} alt="Vedic Webiste " />
                  </a>
                  <br />
                  <a
                    href="https://github.com/Poulami82404/Vedic_webpage"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
              </div>
            </div>

            <h2>Employee Management System </h2>
            <p>
            Tools Ued : React JS | Spring Boot | My SQL
            <br></br>
             Full Stack Project that takes input as Students details and saves in data base.
            </p>
            <br />
            <div className="js">
              <div className="row">
                <div className="col-sm-6">
                  <a href="https://github.com/Poulami82404/Student-Management-System" target="_blank">
                    <img src={pf3} alt="Employee Management System" />
                  </a>
                  <br />
                  <a
                    href="https://github.com/Poulami82404/Student-Management-System"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
              </div>
            </div>

            <br></br>


            <h2> Weather Application </h2>
            <p>
            Tools Ued : React Js 
             Project using API of React
            </p>
            <br />
            <div className="js">
              <div className="row">
                <div className="col-sm-6">
                  <a href="https://github.com/Poulami82404/Weather-App" target="_blank">
                    <img src={pf4} alt="Weather Application" />
                  </a>
                  <br />
                  <a
                    href="https://github.com/Poulami82404/Weather-App"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
              </div>
            </div>

            <br></br>


            <h2>Password Generator</h2>
            <p>
            Tools Ued : HTML and CSS
            <br></br>
             Basic Project using HTML and  CSS
            </p>
            <br />
            <div className="js">
              <div className="row">
                <div className="col-sm-6">
                  <a href="https://github.com/Poulami82404/Password-Generator" target="_blank">
                    <img src={pf5} alt="Password Generator" />
                  </a>
                  <br />
                  <a
                    href="https://github.com/Poulami82404/Password-Generator"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jsprojects;
