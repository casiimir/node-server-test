const { uuid } = require("../utils/index.js");

const initialJson = [
  {
    id: uuid(),
    name: "Jack",
    surname: "London",
    age: 40,
    interests: ["writing", "journalism", "activism"],
  },
  {
    id: uuid(),
    name: "Johnny",
    surname: "Mnemonic",
    age: 38,
    interests: ["hacking", "adventure", "survival"],
  },
];

module.exports = { initialJson };
