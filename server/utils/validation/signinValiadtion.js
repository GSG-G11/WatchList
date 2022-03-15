const joi = require('joi');

const schema = joi.object({
   email: joi.string().email().required(),
   password: joi.string().alphanum().min(8).required()
});

module.exports = schema;
