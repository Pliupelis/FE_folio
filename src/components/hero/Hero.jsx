import React from "react";
import "./css/Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__container-top">
            <h1>
              <span>B</span>
              <span>R</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
              <span> </span>
              <span>I</span>
              <span>D</span>
              <span>E</span>
              <span>A</span>
              <span> </span>
              <span>T</span>
              <span>O</span>
            </h1>
          </div>
          <div className="hero__container-bottom">
            <div className="hero__container-bottom__left">
              <h1>
                <span>L</span>
                <span>I</span>
                <span>F</span>
                <span>E</span>
              </h1>
            </div>

            <div className="hero__container-bottom__right">
              <div className="hero__container-bottom__right-stack">
                <p>
                  <small>ABOUT ME</small>
                  I'm focused on bringing both the technical and visual aspects
                  of digital products to life. User experience, beautiful pixels
                  and writing clean accessible, human code matters to me. I
                  sweat the details.
                </p>
              </div>
              {/* <div className="hero__container-bottom__right-scroll">
                <p>Scroll down</p>
                <div className="hero__container-bottom__right-scroll__infinite">
                  arrow
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
