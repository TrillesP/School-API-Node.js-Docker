const jwt = require('jsonwebtoken');
const CONST = require('../consts.env.js')

const secret = CONST.JWT_SECRET;

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const verifyToken = (token) => jwt.verify(token, secret);
const createToken = (payload) =>
  jwt.sign({ data: payload }, secret, JWT_CONFIG);

module.exports = { verifyToken, createToken };