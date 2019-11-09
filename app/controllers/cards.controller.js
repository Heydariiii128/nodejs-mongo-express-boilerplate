const Card = require("../models/cards.model.js");

// دریافت همه ی تسک ها
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

// ایجاد و ذخیره تسک جدید
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    return res.status(400).send({
      message: "عدم ارسال اطلاعات مورد نیاز"
    });
  }

  // ایجاد تسک جدید
  const card = new Card({
    title: req.body.title || "بدون عنوان",
    description: req.body.description
  });

  // ذخیره تسک
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
