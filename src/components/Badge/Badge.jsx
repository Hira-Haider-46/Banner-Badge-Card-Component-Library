import React from 'react';
import "./Badge.css";

function Badge({ bgColor, color, borderRadius }) {
  return (
    <button className='badge'
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius
      }}
    >
      Badge
    </button>
  );
}

export default Badge;