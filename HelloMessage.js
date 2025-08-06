import React from 'react';

function HelloMessage({ prop1 = "Default Prop1", prop2 = "Default Prop2" }) {
  return (
    <div>
      <p>{prop1}{prop2 && ` : ${prop2}`}</p>
    </div>
  );
}

export default HelloMessage;
