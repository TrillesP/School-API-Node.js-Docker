const express = require('express');
const classesController = require('../controllers/classesController');
const { tokenValidation } = require('../middlewares/tokenMiddleware');

const routers = express.Router();

routers.get('/', tokenValidation, classesController.findAllClasses);

routers.post('/', tokenValidation, classesController.newClass);

routers.get('/:id', tokenValidation, classesController.findClassById);

routers.delete('/:id', tokenValidation, classesController.deleteClassById);

module.exports = routers;