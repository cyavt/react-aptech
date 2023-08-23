//import React from 'react';
import homeBackground from "../assets/img/home-background.png";

const HomeSection = () => {
  return (
    <section className="home container" id="home">
      {/* Home Image */}
      <img src={homeBackground} alt="" className="home-img" />

      {/* Home Text */}
      <div className="home-text">
        <h1 className="home-tittle">
          Hitman&apos;s Wife&apos;s <br />
          Bodyguard
        </h1>
        <p>Releasing 23 July</p>
        <a href="#" className="watch-btn">
          <box-icon
            name="right-arrow"
            animation="tada"
            color="#ffffff"
          ></box-icon>
          <span>Watch the trailer</span>
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
