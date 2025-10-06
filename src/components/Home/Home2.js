import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Full-Stack Developer skilled in  <i>
                <b className="purple">  Python, JavaScript, React, Node.js, Django, and SQL. </b>
              </i>
               Full-Stack Developer skilled in  <i>
                  Built impactful projects including Task Manager, AI-Driven Data Cleaning, and Selenium Automation.
              </i>

Internship experience: <i>
                <b className="purple"> IBM/Rooman & Palle Technologies  </b>
              </i>

Interested in <i>
                scalable web apps, intelligent automation, and modern UI/UX 
              </i><br />
              <br />
              My field of Interest's are building new&nbsp;
              <i>
                <b className="purple">Web Technologies and Products.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products.
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks.
                </b>
              </i>
              &nbsp;
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h3>Connect with me</h3>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/thanushnanaiah"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/thanushnanaiah/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/thanush_nanaiah"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
