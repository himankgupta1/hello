import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [seconds, setSeconds] = useState(0);   // ✅ CORRECT

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Time Elapsed: {seconds}</p>;
}