import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import App from '../client/app';
import serialize from "serialize-javascript";

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("*", (req, res, next) => {
      
  const names = ['Tyler', 'Petr', 'Michail']

  const markup = renderToString(
    <App data={names}/>
  );

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
      <script src="/bundle.js" defer></script>
      <script>window.__INITIAL_DATA__ = ${serialize(names)}</script>
    </html>
  `);
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
})