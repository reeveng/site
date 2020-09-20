import React, { useEffect } from 'react';
import { ReactComponent as Logo } from "../assets/vector/logo.svg";
import { ReactComponent as Menu } from "../assets/vector/menu.svg";
import { ReactComponent as Remove } from "../assets/vector/remove.svg";
import NavButton from './NavButton';


const Nav = ({ smallNav }) => {
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
  if (dimensions.width >= 1024) {
    nav = (
      <div className="c-nav__button-group">
        <NavButton onClick={() => window.location.href = "/#home"}>
          Home
        </NavButton>
        <NavButton onClick={() => window.location.href = "/#about"}>
          About
        </NavButton>
        <NavButton onClick={() => window.location.href = "/#projects"}>
          Projects
        </NavButton>
      </div >
    );
  }
  if (dimensions.width < 1024) {
    nav = (
      <>
        <Menu className="menu-btn visible" onClick={() => {
          document.getElementsByClassName("menu-small")[0].classList.add("visible");
          document.getElementsByClassName("menu-btn")[0].classList.remove("visible");
          document.getElementsByClassName("remove-btn")[0].classList.add("visible");
        }} />
        <Remove className="remove-btn menu-btn"
          onClick={() => {
            document.getElementsByClassName("menu-small")[0].classList.remove("visible");
            document.getElementsByClassName("menu-btn")[0].classList.add("visible");
            document.getElementsByClassName("remove-btn")[0].classList.remove("visible");
          }} />
        <div className="menu-small">
          <NavButton onClick={() => window.location.href = "/#home"}>
            Home
          </NavButton>
          <NavButton onClick={() => window.location.href = "/#about"}>
            About
          </NavButton>
          <NavButton onClick={() => window.location.href = "/#projects"}>
            Projects
          </NavButton>
        </div>
      </>
    );
  }
  if (smallNav) {
    nav = (
      <>
        <Menu className="menu-btn visible" onClick={() => {
          document.getElementsByClassName("menu-small")[0].classList.add("visible");
          document.getElementsByClassName("menu-btn")[0].classList.remove("visible");
          document.getElementsByClassName("remove-btn")[0].classList.add("visible");
        }} />
        <Remove className="remove-btn menu-btn"
          onClick={() => {
            document.getElementsByClassName("menu-small")[0].classList.remove("visible");
            document.getElementsByClassName("menu-btn")[0].classList.add("visible");
            document.getElementsByClassName("remove-btn")[0].classList.remove("visible");
          }} />
        <div className="menu-small">
          <NavButton onClick={() => window.location.href = "/#home"}>
            Home
             </NavButton>
          <NavButton onClick={() => window.location.href = "/#about"}>
            About
            </NavButton>
          <NavButton onClick={() => window.location.href = "/#projects"}>
            Projects
            </NavButton>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={`nav ${smallNav ? "always-top-nav" : ""}`}>
        <Logo className="logo" onClick={() => window.location.href = "/"} />
        {nav}
      </div>
    </>
  );
}

export default Nav;