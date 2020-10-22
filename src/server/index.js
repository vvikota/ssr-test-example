import express from "express";
import cors from "cors";
import React from "react";
import {serverRenderer} from "./render";
import { data }  from "../shared/data";

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("*", (req, res, next) => {

  const context = {};
  const content = serverRenderer(req, context, data);

  res.send(content)
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});