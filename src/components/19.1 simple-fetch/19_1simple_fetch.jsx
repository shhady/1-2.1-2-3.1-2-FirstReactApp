import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Exercise19_1 = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const search = async () => {
      const data = await axios.get("https://swapi.dev/api/films/");
      setMovie(data.data.results);
    };
    search();
  }, []);

  const renderedMovies = () => {
    return movie.map((movie) => {
      return (
        <div key={movie.title} style={{ border: "1px solid black" }}>
          <div>Title: {movie.title}</div>
          <div>Director: {movie.director}</div>
        </div>
      );
    });
  };
  console.log(movie);
  return <div>{renderedMovies()}</div>;
};
export default Exercise19_1;
