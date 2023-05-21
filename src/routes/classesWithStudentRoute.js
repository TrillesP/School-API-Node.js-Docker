const express = require('express');
const classesWithStudentController = require('../controllers/classesWithStudentController');
const { tokenValidation } = require('../middlewares/tokenMiddleware');

const routers = express.Router();

routers.get('/:id', tokenValidation, classesWithStudentController.findAllClassesWithStudent);

module.exports = routers;