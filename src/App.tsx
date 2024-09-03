import React from "react";
import { MoviesPage } from "pages/Movies";
import { Movie } from "types/movie";

interface Props {
  movies: Movie[];
}

const App = ({ movies }: Props) => {
  return <MoviesPage movies={movies} />;
};

export default App;
