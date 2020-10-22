import {StaticRouter} from 'react-router-dom';
import React from "react";
import { renderToString } from "react-dom/server";
import App from '../shared/app';
import serialize from "serialize-javascript";

export function serverRenderer(req, context, data){

  const markup = renderToString(
    <StaticRouter context={context} location={req.url}>
      <App data={data}/>
    </StaticRouter>  
  );

  return`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
      <script src="/bundle.js" defer></script>
      <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
    </html>
  `;
}