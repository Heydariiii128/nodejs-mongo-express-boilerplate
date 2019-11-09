const Card = require("../models/cards.model.js");

// find all tasks
exports.findAll = (req, res) => {
  Card.find()
    .then(cards => {
      res.send(cards);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "خطا در دریافت اطلاعات."
      });
    });
};

// create & save task
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    return res.status(400).send({
      message: "عدم ارسال اطلاعات مورد نیاز"
    });
  }

  // create new task
  const card = new Card({
    title: req.body.title || "بدون عنوان",
    description: req.body.description
  });

  // save task
  card
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || ""
      });
    });
};

/*
save()
find()
findById()
findByIdAndUpdate()
findByIdAndRemove()
*/
