import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <NavButton >
            Home
          </NavButton>
        </Link>
        {/*     <Link to="/#about">
          <NavButton >
            About
          </NavButton>
        </Link>

        <Link to="/#projects">
          <NavButton>
            Projects
          </NavButton>
        </Link> */}
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
          <Link to="/">
            <NavButton >
              Home
            </NavButton>
          </Link>

          {/* <Link to="/#about">
            <NavButton >
              About
            </NavButton>
          </Link>

          <Link to="/#projects">
            <NavButton>
              Projects
            </NavButton>
          </Link> */}
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
          <Link to="/">
            <NavButton >
              Home
            </NavButton>
          </Link>

          {/* <Link to="/#about">
            <NavButton >
              About
            </NavButton>
          </Link>

          <Link to="/#projects">
            <NavButton>
              Projects
            </NavButton>
          </Link> */}
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