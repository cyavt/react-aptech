import React, { useState, useEffect } from "react";
import axios from "axios";

import MovieBox from "./MovieBox";

const MovieLists = (props) => {
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

  return (
    <section
      className="movies-container container"
      style={{ marginTop: "80px" }}
      id="movies"
    >
      {heading !== "" && (
        <div className="heading">
          <h2 className="heading-title">{heading}</h2>
        </div>
      )}
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieBox
              imgSrc={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              movieTitle={movie.title}
              movieType="action"
              link={`/${movie.id}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieLists;
