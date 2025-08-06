import React from "react";

function HelloMessage({ prop1 = "Default prop1", prop2 = null }) {
  return (
    <div className="output-box">
      {prop1}
      {prop2 && <span className="prop2"> : {prop2}</span>}
    </div>
  );
}

export default HelloMessage;
