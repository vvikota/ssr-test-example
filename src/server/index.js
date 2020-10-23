import express from "express";
import cors from "cors";
import {serverRenderer} from "./render";
import { data }  from "../shared/data";
import createStore from "../shared/store";

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("*", (req, res, next) => {
  const store = createStore();
  const content = serverRenderer(req, store, data);

  res.send(content)
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});