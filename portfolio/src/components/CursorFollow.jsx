// CursorFollow.js
import React, { useState, useEffect } from 'react';
import '../styles/cursorfollow.css';

const CursorFollow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor" style={{ left: position.x, top: position.y }}></div>
  );
};

export default CursorFollow;
