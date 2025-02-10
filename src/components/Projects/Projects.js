import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Tic from "../../Assets/Projects/Tic.png";
import editor from "../../Assets/Projects/codeEditor.png";
import PG from "../../Assets/Projects/PG.png";
import Weather from "../../Assets/Projects/Weather2.png";

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
              imgPath={PG}
              isBlog={false}
              title="PG Rent Suggestion"
              description="PG Rent Suggestion System built with React.js, MongoDB, Express, and Node.js. It allows users to add filter to view PG based on various criteria. Features include an intuitive UI for managing PG details, real-time filtering, and a backend that efficiently handles PG data storage and retrieval. 🚀"
              ghLink="https://github.com/abhaykumar30/PG-Rent-Suggestion-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bank Management System"
              description="Bank Management System built with C++ that allows users to create accounts, deposit and withdraw money, check balances, and manage transactions securely. Implements object-oriented programming concepts with features like account management, authentication, and data persistence using file handling."
              ghLink="https://github.com/abhaykumar30/Bank-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather App"
              description="A simple Weather App built using HTML, CSS, and JavaScript, integrating a REST API to fetch real-time weather data. It allows users to search for a city and view temperature, humidity, wind speed, and weather conditions. The app features a clean UI with dynamic weather icons and background changes based on weather conditions."
              ghLink="https://github.com/abhaykumar30/Weather-App"
              demoLink="https://abhaykumar30.github.io/Weather-App/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tic}
              isBlog={false}
              title="Tic-Tac-Tao"
              description="Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Features a responsive UI, interactive gameplay for two players, and real-time win detection with a reset option. Implements game logic for checking wins, draws, and switching turns dynamically🚀."
              ghLink="https://github.com/abhaykumar30/tic_tac_toe"
              demoLink="https://abhaykumar30.github.io/tic_tac_toe/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
