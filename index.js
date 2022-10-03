const express = require("express");
const app = express();
const peopleRouter = require("./routes/people");
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
  <h1>Welcome API number one<h1>
  <a href="/api/people">people</a>
  `);
});

app.use("/api/people", peopleRouter);

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
