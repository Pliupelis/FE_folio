import React from "react";
import { Link } from "react-router-dom";
import "./css/TopBar.css";
// import "./css/TopBar.css";
const TopBar = () => {
  return (
    <>
      <div className="header__container">
        <div className="header__container-text1">
          <p>
            <small>STACK</small>
            Here are few technologies I'm familiar and currently enjoy
            working/playing with such as <br /> JavaScript, React, CSS, SASS,
            Gulp, Git, Nodejs, MUI, NPM, Express...
          </p>
        </div>
        <div className="header__container-text2">
          <div className="header__container-text2__main">
            <small>Lets talk:</small>
            <p>andriuspliupelis@gmail.com</p>
            <div className="header__container-text2__main-resume">
              {/* <Link to="/resume.pdf">Resume</Link> */}
            </div>
          </div>
          <p>AVAILABLE FOR FREELANCE WORK</p>
        </div>
      </div>
    </>
  );
};

export default TopBar;
