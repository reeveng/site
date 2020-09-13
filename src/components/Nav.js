import React, { useEffect } from 'react';
import { ReactComponent as Logo } from "../assets/vector/logo.svg";
import NavButton from './NavButton';

const scrollToRef = (id) => document.getElementById(id).scrollIntoView();

const Nav = () => {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
    window.addEventListener('resize', handleResize);
  });

  let nav;
  if (dimensions.width >= 1850) {
    nav = <div>
      <NavButton onClick={() => scrollToRef("home")}>
        Home
      </NavButton>
      <NavButton onClick={() => scrollToRef("about")}>
        About
      </NavButton>
      <NavButton onClick={() => scrollToRef("projects")}>
        Projects
      </NavButton>
    </div>;
  }
  if (dimensions.width < 1850) {
    nav = <div></div>;
  }
  return (
    <>
      <div className="nav">
        <Logo className="logo" />
        {nav}
      </div>
    </>
  );
}

export default Nav;