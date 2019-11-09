var express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConfig = require("./config/database.config.js");
const cardsRoutes = require("./app/routes/cards.routes.js");

const app = express();

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."
  });
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use((req, res) => {
  console.log(req.body); // this is what you want
  res.on("finish", () => {
    console.log(res);
  });
});

cardsRoutes(app);

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
