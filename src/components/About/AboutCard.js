import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thanush Nanaiah K M </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            I am a passionate Full-Stack Developer with proven experience in MERN, Python and JavaScript..
            <br />
            I have completed Btech in Information Science and Engineering
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Thanush Nanaiah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
