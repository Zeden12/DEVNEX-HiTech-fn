// src/components/CustomCursor.jsx
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed w-8 h-8 border-3 border-sky-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: 'transform 0.1s ease-out',
      }}
    ></div>
  );
};

export default CustomCursor;