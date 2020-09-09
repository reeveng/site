import React, { useRef } from 'react';
import { ReactComponent as Logo } from "../assets/vector/logo.svg";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Nav = () => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef)

  return (
    <>
      <div className="nav">
        <Logo className="logo" />
        <div>
          <button onClick={() => scrollToRef("about")}>
            About
        </button>
        </div>
      </div>

    </>
  );
}

export default Nav;