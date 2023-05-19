const express = require('express');
const loginController = require('../controllers/loginController.js');
const { incompleteLogin } = require('../middlewares/loginMiddleware.js');

const routers = express.Router();

routers.post('/', incompleteLogin, loginController.logIn);

module.exports = routers;