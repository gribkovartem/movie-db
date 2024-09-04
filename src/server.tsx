import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import express from "express";
import { getMovie, getMovies } from "api/movie";
import { MoviesPage } from "pages/Movies";
import { MoviePage } from "pages/Movie";
import { getBaseHTML } from "./utils";
import { RoutePaths } from "./constants";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const movies = await getMovies();
  const appContent = renderToString(
    <StaticRouter location={req.url}>
      <MoviesPage movies={movies} />
    </StaticRouter>
  );

  res.type("text/html");
  res.send(
    getBaseHTML(appContent, {
      path: RoutePaths.Movies,
      data: JSON.stringify(movies),
    })
  );
});

app.get("/movie/:id", async (req, res) => {
  const movie = await getMovie(Number(req.params.id));
  const appContent = renderToString(
    <StaticRouter location={req.url}>
      <MoviePage movie={movie} />
    </StaticRouter>
  );

  res.type("text/html");
  res.send(
    getBaseHTML(appContent, {
      path: RoutePaths.Movie,
      data: JSON.stringify(movie),
    })
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
