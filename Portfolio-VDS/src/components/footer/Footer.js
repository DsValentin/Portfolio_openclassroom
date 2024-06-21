import React from "react";
import { Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

import "./Footer.scss";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <div className="col-md-4 footer-copywright">
          <h1>Designed by De Sousa Valentin</h1>
        </div>
        <div className="col-md-4 footer-copywright">
          <h1>Copyright © {year}</h1>
        </div>
        <div className="col footer-body">
          <ul className="footer-icons">
            <li>
              <a
                href="https://github.com/DsValentin"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </div>
      </Row>
    </Container>
  );
}

export default Footer;
