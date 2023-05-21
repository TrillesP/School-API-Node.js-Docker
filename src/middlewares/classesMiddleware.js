const Joi = require('joi');

const studentIdValidation = (req, res, next) => {
  const { studentId } = req.body;

  const studentValidation = Joi.object({
    studentId: Joi.required()
  });
  const { error } = studentValidation
    .validate({ studentId });
  if (error) {    
    return res.status(400).json({ 
      message: "'studentId' is required" });
  }
  next();
};

module.exports = { studentIdValidation };