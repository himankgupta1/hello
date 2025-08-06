import React from 'react';

function AlertButton() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return (
    <button onClick={handleClick}>
      Click me Please
    </button>
  );
}

export default AlertButton;
