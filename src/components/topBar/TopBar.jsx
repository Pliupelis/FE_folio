import React from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/Nav";
import "./css/TopBar.css";
// import "./css/TopBar.css";
const TopBar = () => {
  return (
    <>
      <div className="header__container">
        <div className="header__container-text1">
          <small>STACK</small>
          <p>
            Here are few technologies I'm familiar and currently enjoy
            working/playing with such as <br /> JavaScript, React, CSS, SASS,
            Gulp, Git, Nodejs, MUI, NPM, Express...
          </p>
        </div>
        <div className="header__container-text2">
          <div className="header__container-text2__main">
            <p>Lets talk:</p>
            <p>andriuspliupelis@gmail.com</p>
            <div className="header__container-text2__main-resume">
              {/* <Link to="/resume.pdf">Resume</Link> */}
            </div>
          </div>
          <small>AVAILABLE FOR FREELANCE WORK</small>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default TopBar;
