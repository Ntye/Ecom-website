import { useState, useEffect } from 'react';

function Loading() {
  const [dotCount, setDotCount] = useState(0);
  const dots = ["", ".", "..", "..."];

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prevDotCount) => (prevDotCount + 1) % dots.length);
    }, 500);

    return () => clearInterval(interval);
    }, 
  [])

  return (
    <div>
      <h1 className='loading'>Loading{dots[dotCount]}</h1>
    </div>
  );
}

export default Loading