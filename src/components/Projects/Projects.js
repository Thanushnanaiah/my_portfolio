import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Task Management System"
              description="Developed a full-stack task manager enabling users to create, update, and track tasks efficiently. Designed a responsive frontend with React and integrated it with Node.js REST APIs and MongoDB for dynamic data storage. Improved daily workflow organization and user productivity by 30%."
              ghLink="https://github.com/Thanushnanaiah/Task-manager-application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Automated Testing of E-commerce Application"
              description="Created a test automation suite using Selenium for an e-commerce platform, covering modules like login, search, cart, and checkout. Built a dashboard with Flask to trigger tests and display results, reducing manual QA effort by 40% and catching critical bugs faster."
              ghLink="https://github.com/Thanushnanaiah/automated_testing_application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI-Driven Data Cleaning"
              description="Engineered an NLP-powered chatbot that automates data cleaning using PySpark and Pandas, processing CSV/Excel files to handle missing data, formatting, and transformations via natural language commands. Reduced preprocessing time by 40% and eliminated manual scripting."
              ghLink="https://github.com/Thanushnanaiah/AI-driven-Data-cleaning-and-manipulation"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
