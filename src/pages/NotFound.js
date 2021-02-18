/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div id="p-notfound">
        <div className="code-area">
          <div className="code-area__top">
            <span style={{ color: "#777", fontStyle: "italic" }}>
              // 404 page not found.
            </span>
            <br />
            <span>
              <span style={{ color: "#d65562" }}>
                if
              </span>
	            (
              <span style={{ color: "#4ca8ef" }}>
                !
              </span>
              <span style={{ color: "#bdbdbd", fontStyle: "italic" }}>
                found
              </span>
              )
            </span>
            <br />
            <span>
              <span style={{ color: "#2796ec", paddingLeft: "15px" }}>
                throw
              </span>
              <span>
                (<span style={{ color: "#a6a61f" }}>"(╯°□°)╯︵ ┻━┻"</span>);
              </span>
            </span>
          </div>
          <button className="code-area__bottom">
            <Link to="home">
              Let's go home
            </Link>
          </button>
        </div>
      </div >
    </>
  );
};

export default NotFound;