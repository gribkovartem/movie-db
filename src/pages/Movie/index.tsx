import { getMovie } from "api/movie";
import React, { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Movie } from "types/movie";
import { RoutePaths } from "../../constants";

interface Props {
  movie?: Movie;
}

export const MoviePage: FC<Props> = ({ movie: movieFromServer }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(movieFromServer);

  useEffect(() => {
    if (!id || (movie && movie.id === Number(id))) return;

    (async () => {
      const result = await getMovie(Number(id));

      setMovie(result);
    })();
  }, []);

  if (!movie) return <>Грузим данные...</>;

  return (
    <>
      <Link to={RoutePaths.Movies}>Назад к списку</Link>
      <h1>{movie.title}</h1>
      <h6>
        {movie.country}, {movie.year}, {movie.genre.join(", ")}
      </h6>
      <img src={movie.poster} />
      <p>{movie.plot}</p>
      <p>Рейтинг: {movie.rating}</p>
    </>
  );
};
