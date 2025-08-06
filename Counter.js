import React, { useState, useEffect } from "react";

function Counter() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return <div className="output-box">Time Elapsed : {time}</div>;
}

export default Counter;
