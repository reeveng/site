
import React from 'react';

const Badge = ({ children, className }) => {
  return (
    <div className={`badge ${className}`} >
      {children}
    </div>
  );
}

export default Badge;
