import React from "react";
import { Row } from "react-bootstrap";
import { SiVisualstudiocode, SiSlack, SiMicrosoft } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <div className="col-4 col-md-2 tech-icons">
        <SiMicrosoft className="tech-icon" />
      </div>
      <div className="col-4 col-md-2 tech-icons">
        <SiVisualstudiocode className="tech-icon" />
      </div>
      <div className="col-4 col-md-2 tech-icons">
        <SiSlack className="tech-icon" />
      </div>
    </Row>
  );
}

export default Toolstack;
