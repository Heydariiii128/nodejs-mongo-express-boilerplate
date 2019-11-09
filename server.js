const express = require("express");
const bodyParser = require("body-parser");
const cardsRoutes = require("./app/routes/cards.routes.js");
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// connect to database
require("./app/database/initialize.js").connect();

// routing
app.get("/", (req, res) => {
  res.json({
    message: "welcome..."
  });
});

cardsRoutes(app);

// error handler
app.use(function(err, req, res, next) {
  res.status(400).json("خطای 404");
});

// listen for requests
app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
