import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getCards, insertCard, updateCard } from "./queries.js";

const app = express();
app.use(cors());
const port = 9000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/cards", getCards);
app.post("/card", insertCard);
app.put("/card/:id", updateCard);

app.listen(port, () => {
  console.log(`******** App running on port ${port}.*********`);
});
