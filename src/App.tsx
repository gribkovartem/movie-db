import React from "react";
import { Movie } from "types/movie";

interface Props {
  movies: Movie[];
}

const App = ({ movies }: Props) => {
  return (
    <>
      <h1>Movies:</h1>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </>
  );
};

export default App;
