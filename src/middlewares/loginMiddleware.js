const Joi = require('joi');

const incompleteLogin = (req, res, next) => {
  const { email, password } = req.body;

  const loginValidation = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  const { error } = loginValidation
    .validate({ email, password });
  if (error) {    
    return res.status(400).json({ message: 'One or more of the required fields are missing' });
  }
  next();
}; 

module.exports = { incompleteLogin };