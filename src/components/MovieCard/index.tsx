import React, { FC } from "react";
import * as s from "./styles.module.css";

interface Props {
  poster: string;
  title: string;
  year: number;
  rating: number;
  genre: string[];
}

export const MovieCard: FC<Props> = ({
  poster,
  title,
  year,
  rating,
  genre,
}) => {
  return (
    <article className={s.root}>
      <header>
        <img className={s.poster} src={poster} />
        <span className={s.rating}>{rating}</span>
      </header>
      <h3 className={s.title}>{title}</h3>
      <footer className={s.hint}>
        {year}, {genre.join(", ")}
      </footer>
    </article>
  );
};
