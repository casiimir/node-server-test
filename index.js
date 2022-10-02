const express = require("express");
const app = express();
const peopleRouter = require("./routes/people");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
  <h1>Welcome API number one<h1>
  <a href="/api/people">people</a>
  `);
});

app.use("/api/people", peopleRouter);

app.listen(3000);
