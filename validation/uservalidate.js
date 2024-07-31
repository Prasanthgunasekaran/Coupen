const Joi = require('joi');

const adduserjoi = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(20) .pattern(new RegExp('^[a-zA-Z0-9@!#\$%\^\&*\)\(+=._-]*$')).required(),
  phone: Joi.string().length(10) .pattern(/^[0-9]+$/).required()
});

const adduservalidate = async (req, res, next) => {
  try {
    await adduserjoi.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.details.map(detail => detail.message) });
  }
};

module.exports = { adduservalidate };
