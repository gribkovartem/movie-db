import React, { FC } from "react";
import { MovieCard } from "components/MovieCard";
import { Movie } from "types/movie";
import * as s from "./styles.module.css";

interface Props {
  movies: Movie[];
}

export const MoviesPage: FC<Props> = ({ movies }) => {
  return (
    <>
      <h1 className={s.title}>ТОП фильмов:</h1>
      <section className={s.list}>
        {movies.map(({ id, poster, title, year, rating, genre }) => (
          <MovieCard
            key={id}
            poster={poster}
            title={title}
            year={year}
            rating={rating}
            genre={genre}
          />
        ))}
      </section>
    </>
  );
};
