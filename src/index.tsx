import React from "react";
import { hydrateRoot } from "react-dom/client";
import { Movie } from "types/movie";
import App from "./App";

type PatchedWindow = Window & { serverData: Movie[] };

hydrateRoot(
  document.getElementById("root")!,
  <App movies={(window as unknown as PatchedWindow).serverData} />
);

document.getElementById("server-data")?.remove();
