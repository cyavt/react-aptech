import React, { useState, useEffect } from "react";
import axios from "axios";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MovieBox from "./MovieBox";

const MovieCards = (props) => {
  const { heading, apiUrl, apiKey } = props;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          accept: "application/json",
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const swiper = new Swiper(".popular-content", {
      modules: [Navigation, Pagination],
      spaceBetween: 20,
      slidesPerView: "auto",
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
    });
  }, []);

  return (
    <section className="popular container" id="popular">
      {/* Heading */}
      {heading !== "" && (
        <div className="heading">
          <h2 className="heading-title">{heading}</h2>
        </div>
      )}
      {/* Content */}
      <div className="popular-content swiper">
        <div
          className="swiper-wrapper"
          id="swiper-wrapper-46549dcdcfd8fd15"
          aria-live="off"
        >
          {/* Movies */}
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="swiper-slide"
              role="group"
              aria-label="1 / 8"
              style={{ width: "250px", marginRight: "20px" }}
            >
              <MovieBox
                imgSrc={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                movieTitle={movie.title}
                movieType="action"
                link={`/${movie.id}`}
              />
            </div>
          ))}
        </div>
        {/* Swiper Buttons */}
        <div
          className="swiper-button-prev swiper-button-disabled"
          tabIndex="-1"
          role="button"
          aria-label="Previous slide"
          aria-controls="swiper-wrapper-46549dcdcfd8fd15"
          aria-disabled="true"
        ></div>
        <div
          className="swiper-button-next"
          tabIndex="0"
          role="button"
          aria-label="Next slide"
          aria-controls="swiper-wrapper-46549dcdcfd8fd15"
          aria-disabled="false"
        ></div>
        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
    </section>
  );
};

export default MovieCards;
