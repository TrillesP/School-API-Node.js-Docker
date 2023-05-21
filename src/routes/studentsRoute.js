const express = require('express');
const studentsController = require('../controllers/studentsController');
const { tokenValidation } = require('../middlewares/tokenMiddleware');
const { fullNameValidation } = require('../middlewares/teachersMiddleware');

const routers = express.Router();

routers.get('/', tokenValidation, studentsController.findStudents);

routers.post('/', fullNameValidation, tokenValidation, studentsController.newStudent);

routers.get('/:id', tokenValidation, studentsController.findStudentById);

routers.delete('/:id', tokenValidation, studentsController.deleteStudent);

module.exports = routers;