import React from "react";
import { Container, Row } from "react-bootstrap";
import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ContactForm from "../contact/Contact";
import "./Home.scss";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <div className="home-header">
              <div>
                <Type />
              </div>
            </div>
          </Row>
        </Container>
      </Container>
      <About />
      <Projects />
      <section id="contact">
        <ContactForm />
      </section>
    </section>
  );
}

export default Home;
