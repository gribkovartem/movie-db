import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import App from "./App";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const appContent = renderToString(<App />);

  res.type("text/html");
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>React SSR with Client-Side Hydration</title>
    </head>
    <body>
      <div id="root">${appContent}</div>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `);
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
