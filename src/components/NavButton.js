import React from 'react';

const NavButton = ({ onClick, className, children }) => {
  return (
    <>
      <button className={`btn btn--stripe ${className}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default NavButton;