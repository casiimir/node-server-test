const { initialJson } = require("../assets/jsonInit");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: initialJson });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const person = initialJson.find((person) => person.id === id);

  if (!person) {
    res.status(404).json({ success: false, data: [] });
  }

  res.status(200).json({ success: true, data: person });
});

router.post("/", (req, res) => {
  const person = req.body;
  const initialJsonIDs = initialJson.map((x) => x.id);

  if (!initialJsonIDs.includes(person.id)) {
    initialJson.push(person);
    res.send("success POST data was sent");
  } else {
    res.send("error POST data wasn't sent");
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const index = initialJson.findIndex((person) => person.id === id);

  initialJson[index] = req.body;
  res.status(200).json({ success: true, data: initialJson });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = initialJson.findIndex((person) => person.id === id);

  initialJson.splice(index, 1);
  res.status(200).json({ success: true, data: initialJson });
});

module.exports = router;
