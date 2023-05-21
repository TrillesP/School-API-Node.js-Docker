const Joi = require('joi');

const fullNameValidation = (req, res, next) => {
  const { fullName } = req.body;

  const teacherValidation = Joi.object({
    fullName: Joi.string().min(9)
  });
  const { error } = teacherValidation
    .validate({ fullName });
  if (error) {    
    return res.status(400).json({ 
      message: "'fullName' must have at least 9 characters" });
  }
  next();
}; 

const emailValidation = (req, res, next) => {
  const { email } = req.body;

  const teacherValidation = Joi.object({
    email: Joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
  });
  const { error } = teacherValidation
    .validate({ email });
  if (error) {    
    return res.status(400).json({ message: "'email' must be a valid e-mail" });
  }
  next();
}; 

const passwordValidation = (req, res, next) => {
  const { password } = req.body;

  const teacherValidation = Joi.object({
    password: Joi.string().min(6).required()
  });
  const { error } = teacherValidation
    .validate({ password });
  if (error) {    
    return res.status(400).json({ 
      message: "'password' must have at least 6 characters" });
  }
  next();
}; 

module.exports = { fullNameValidation, emailValidation, passwordValidation };