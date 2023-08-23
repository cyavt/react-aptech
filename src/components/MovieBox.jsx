import React from "react";
import { Link } from "react-router-dom";

const MovieBox = ({ imgSrc, movieTitle, movieType, link }) => (
  <div className="movie-box">
    <img src={imgSrc} alt="" className="movie-box-img" />
    <div className="box-text">
      <h1 className="movie-tittle">{movieTitle}</h1>
      <span className="movie-type">{movieType}</span>
      <Link to={link} className="watch-btn play-btn">
        <box-icon
          name="right-arrow"
          animation="tada"
          color="#ffffff"
        ></box-icon>
      </Link>
    </div>
  </div>
);

export default MovieBox;
