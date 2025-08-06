import React from "react";

function AlertButton() {
  return (
    <button className="output-box" onClick={() => alert("Button clicked!")}>
      Click me Please
    </button>
  );
}

export default AlertButton;
