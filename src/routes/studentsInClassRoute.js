const express = require('express');
const studentsInClassController = require('../controllers/studentsInClassController');
const { tokenValidation } = require('../middlewares/tokenMiddleware');

const routers = express.Router();

routers.get('/:id', tokenValidation, studentsInClassController.findAllStudentsInClass);

module.exports = routers;