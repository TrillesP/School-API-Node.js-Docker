const express = require('express');
const classesController = require('../controllers/classesController');
const { tokenValidation } = require('../middlewares/tokenMiddleware');
const { studentIdValidation } = require('../middlewares/classesMiddleware');

const routers = express.Router();

routers.get('/', tokenValidation, classesController.findAllClasses);

routers.post('/', tokenValidation, classesController.newClass);

routers.get('/:id', tokenValidation, classesController.findClassById);

routers.post('/:id', tokenValidation, studentIdValidation, classesController.addStudentToClass);

routers.delete('/:id', tokenValidation, studentIdValidation, classesController.removeStudentFromClass);

routers.delete('/:id', tokenValidation, classesController.deleteClassById);

module.exports = routers;