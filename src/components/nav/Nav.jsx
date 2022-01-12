import React from "react";
import { Link } from "react-router-dom";
import "./css/Nav.css";
const Nav = () => {
  return (
    <>
      <div className="nav__wrapper">
        <div className="nav__wrapper-home">
          <Link to="/">Home</Link>
        </div>
        <div className="nav__wrapper-work">
          <Link to="work">Work</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
