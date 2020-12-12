import React from "react";
import { auto } from "@popperjs/core";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: auto,
        clear: "both",
        paddingTop: 100,
        textAlign: "center",
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
