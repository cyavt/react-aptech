//import React from "react";
import HomeSection from "../components/HomeSection";
import MovieDetails from "../components/MovieDetails";
import MovieLists from "../components/MovieLists";
import MovieCards from "../components/MovieCards";

const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8";

const popular =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const nowplaying =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const upcoming =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
const top_rated =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
const detail = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1`;

function Main(props) {
  const { id, page } = props;

  switch (page) {
    case "popular":
      return (
        <main>
          <MovieLists heading="List Popular" apiUrl={popular} apiKey={apiKey} />
        </main>
      );
    case "nowplaying":
      return (
        <main>
          <MovieLists heading="Now Playing" apiUrl={nowplaying} apiKey={apiKey} />
        </main>
      );
    case "detail":
      return (
        <main>
          <MovieDetails apiUrl={detail(id)} apiKey={apiKey} />
        </main>
      );
    default:
      return (
        <main>
          <HomeSection />
          <MovieCards
            apiUrl={popular}
            heading="Popular Movies"
            apiKey={apiKey}
          />
          <MovieCards
            apiUrl={nowplaying}
            heading="Now Playing"
            apiKey={apiKey}
          />
          <MovieCards apiUrl={upcoming} heading="Up Coming" apiKey={apiKey} />
          <MovieCards apiUrl={top_rated} heading="" apiKey={apiKey} />
        </main>
      );
  }
}

export default Main;
