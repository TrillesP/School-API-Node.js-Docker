const express = require('express');
const teachersController = require('../controllers/teachersController');
const { 
  fullNameValidation, 
  emailValidation, 
  passwordValidation } = require('../middlewares/teachersMiddleware');
const { tokenValidation } = require('../middlewares/tokenMiddleware');

const routers = express.Router();

routers.post(
  '/',
  fullNameValidation,
  emailValidation,
  passwordValidation,
  tokenValidation,
  teachersController.createTeacher
  );

routers.get('/', tokenValidation, teachersController.findTeachers);

routers.get('/:id', tokenValidation, teachersController.findTeacherById);

routers.delete('/profile', tokenValidation, teachersController.deleteTeacher);

module.exports = routers;