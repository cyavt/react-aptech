import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieDetails = (props) => {
  const { apiUrl, apiKey } = props;
  const [movie, setMovies] = useState({});

  useEffect(() => {
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          accept: "application/json",
        },
      })
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="play-container container">
        {/* Play Image */}
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt=""
          className="play-img"
        />
        {/* Play Text */}
        <div className="play-text">
          <h2>{movie.title}</h2>
          {/* Ratings */}
          <div className="rating">
            <box-icon name="star" type="solid" color="#FEB33A"></box-icon>
            <box-icon name="star" type="solid" color="#FEB33A"></box-icon>
            <box-icon name="star" type="solid" color="#FEB33A"></box-icon>
            <box-icon name="star" type="solid" color="#FEB33A"></box-icon>
            <box-icon name="star" color="#FEB33A"></box-icon>
          </div>
          <div className="tags">
            <span>Action</span>
            <span>Adventure</span>
            <span>4K</span>
          </div>
          {/* Trailer Button */}
          <a href="#" className="watch-btn">
            <box-icon
              name="right-arrow"
              animation="tada"
              color="#ffffff"
              style={{ zIndex: 1 }}
            ></box-icon>
            <span>Watch the trailer</span>
          </a>
        </div>
        {/* Play Btn */}
        <i className="play-movie"></i>
      </div>
      {/* About */}
      <div className="about-movie container">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        {/* Movie Cast */}
        <h2 className="cast-heading">Movie Cast</h2>
        <div className="cast">
            {movie.production_companies && movie.production_companies.map((company) => (
                <div key={company.id} className="cast-box">
                <img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${company.logo_path}`}
                    alt=""
                    className="cast-img"
                />
                <span className="cast-title">{company.name}</span>
                </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
