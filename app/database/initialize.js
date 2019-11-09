const mongoose = require("mongoose");
const dbConfig = require("../config/database.config.js");

module.exports.connect = () => {
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
};
