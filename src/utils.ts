import { Movie } from "types/movie";

export function getBaseHTML(
  appContent: string,
  serverData?: { path: string; data: string }
) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Movie DB</title>
      <link rel="stylesheet" href="/main.css">
    </head>
    <body>
      <div id="root">${appContent}</div>
      ${
        serverData
          ? `<script id="server-data">window.serverData = { path: "${serverData.path}", data: ${serverData.data} };</script>`
          : ""
      }
      <script src="/bundle.js"></script>
    </body>
    </html>`;
}

export function isMoviesPage(data: Movie | Movie[]): data is Movie[] {
  return Array.isArray(data);
}

export function isMoviePage(data: Movie | Movie[]): data is Movie {
  return !Array.isArray(data);
}
