import React from 'react';
import { ReactComponent as Logo } from "../assets/vector/logo.svg";
import NavButton from './NavButton';

const scrollToRef = (id) => document.getElementById(id).scrollIntoView();

const Nav = () => {
  return (
    <>
      <div className="nav">
        <Logo className="logo" />
        <div>
          <NavButton onClick={() => scrollToRef("home")}>
            Home
          </NavButton>
          <NavButton onClick={() => scrollToRef("about")}>
            About
          </NavButton>
          <NavButton onClick={() => scrollToRef("projects")}>
            Projects
          </NavButton>
        </div>
      </div>

    </>
  );
}

export default Nav;