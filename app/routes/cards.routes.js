const validate = require("express-validation");
const cardSchema = require("../validation/card.js");

module.exports = app => {
  const cards = require("../controllers/cards.controller.js");

  app.get("/cards", cards.findAll);
  app.post("/cards", validate(cardSchema.create), cards.create);
};
