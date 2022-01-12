import React from "react";
import "./css/Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__container-top">
            <h1>BRING IDEAS TO</h1>
          </div>
          <div className="hero__container-bottom">
            <div className="hero__container-bottom__left">
              <h1>LIFE</h1>
            </div>

            <div className="hero__container-bottom__right">
              <div className="hero__container-bottom__right-stack">
                <p>
                  <small>ABOUT ME</small> <br />
                  I'm focused on bringing both the technical and visual aspects
                  of digital products to life. User experience, beautiful pixels
                  and writing clean accessible, human code matters to me. I
                  sweat the details.
                </p>
              </div>
              <div className="hero__container-bottom__right-scroll">
                <p>Scroll down</p>
                <div className="hero__container-bottom__right-scroll__infinite">
                  arrow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
