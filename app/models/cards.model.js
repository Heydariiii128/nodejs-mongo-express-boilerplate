const mongoose = require("mongoose");

const cardSchema = mongoose.Schema(
  {
    id: mongoose.Types.ObjectId,
    title: String,
    description: String
  },
  {
    timestamp: true
  }
);

module.exports = mongoose.model("cards", cardSchema);
