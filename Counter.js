import React, { useState, useEffect } from 'react';

function Counter() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p>Time Elapsed : {seconds}</p>
  );
}

export default Counter;
