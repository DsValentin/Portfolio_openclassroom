import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ textAlign: "center" }}>
      <Typewriter
        options={{
          strings: ["Intégrateur web", "Développeur"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
