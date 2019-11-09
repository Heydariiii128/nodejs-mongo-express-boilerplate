module.exports = app => {
  const cards = require("../controllers/cards.controller.js");

  app.get("/cards", cards.findAll);
  app.post("/cards", cards.create);
};
