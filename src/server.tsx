import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import { getMovies } from "api/movie";
import App from "./App";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const movies = await getMovies();
  const appContent = renderToString(<App movies={movies} />);

  res.type("text/html");
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Movie DB</title>
      <link rel="stylesheet" href="/main.css">
    </head>
    <body>
      <div id="root">${appContent}</div>
      <script id="server-data">window.serverData = ${JSON.stringify(
        movies
      )}</script>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `);
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
