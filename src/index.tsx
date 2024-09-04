import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Movie } from "types/movie";
import { MoviesPage } from "pages/Movies";
import { MoviePage } from "pages/Movie";
import { RoutePaths } from "./constants";
import { isMoviePage, isMoviesPage } from "./utils";

type PatchedWindow = Window & {
  serverData: { path: string; data: Movie | Movie[] };
};

const patchedWindow = window as unknown as PatchedWindow;

hydrateRoot(
  document.getElementById("root")!,
  <BrowserRouter>
    <Routes>
      <Route
        path={RoutePaths.Movies}
        element={
          <MoviesPage
            movies={
              isMoviesPage(patchedWindow.serverData?.data)
                ? patchedWindow.serverData.data
                : []
            }
          />
        }
      />
      <Route
        path={RoutePaths.Movie}
        element={
          <MoviePage
            movie={
              isMoviePage(patchedWindow.serverData?.data)
                ? patchedWindow.serverData.data
                : undefined
            }
          />
        }
      />
    </Routes>
  </BrowserRouter>
);

document.getElementById("server-data")?.remove();
