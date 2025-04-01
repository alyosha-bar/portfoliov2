import React, { useState, useEffect } from 'react';
import '../styles/cursorfollow.css';

const CursorFollow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY }); // 🔥 Use `pageX` and `pageY` instead
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
  );
};

export default CursorFollow;
