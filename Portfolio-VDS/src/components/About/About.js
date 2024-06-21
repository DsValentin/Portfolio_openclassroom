import React from "react";
import { Container, Row } from "react-bootstrap";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import "./About.scss";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <div
            className="col-md-7"
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1>Présentation</h1>
            <AboutCard />
          </div>
        </Row>
        <h1 className="project-heading">Mes compétences Professionnel</h1>
        <Techstack />
        <h1 className="project-heading">Outils</h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
