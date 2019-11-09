var Joi = require("joi");

module.exports.create = {
  body: {
    title: Joi.string().required(),
    description: Joi.string()
  }
};
