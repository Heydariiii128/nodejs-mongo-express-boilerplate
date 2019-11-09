const Card = require("../models/cards.model.js");

exports.findAll = (req, res) => {
  Card.find()
    .then(cards => {
      res.send(cards);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving cards."
      });
    });
};

exports.create = (req, res) => {
  console.log(req.body);
    if(!req.body.title)
  
};
