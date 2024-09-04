import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "api/movie";
import { MovieCard } from "components/MovieCard";
import { Movie } from "types/movie";
import * as s from "./styles.module.css";

interface Props {
  movies: Movie[];
}

export const MoviesPage: FC<Props> = ({ movies: moviesFromServer }) => {
  const [movies, setMovies] = useState(moviesFromServer);

  useEffect(() => {
    if (movies.length) return;

    (async () => {
      const result = await getMovies();

      setMovies(result);
    })();
  }, []);

  return (
    <>
      <h1 className={s.title}>ТОП фильмов:</h1>
      <section className={s.list}>
        {movies.map(({ id, poster, title, year, rating, genre }) => (
          <Link to={`/movie/${id}`} key={id}>
            <MovieCard
              poster={poster}
              title={title}
              year={year}
              rating={rating}
              genre={genre}
            />
          </Link>
        ))}
      </section>
    </>
  );
};
