require('dotenv').config();
const CONST = require('../consts.env.js')

const options = {
    host: CONST.DB_HOST,
    port: CONST.DB_PORT,
    database: CONST.DB_NAME,
    username: CONST.DB_USER,
    password: CONST.DB_PASSWORD,
    dialect: 'mysql',
    logging: true,
    dialectOptions: {
      timezone: 'Z',
    },
};
  
module.exports = {
    development: {
      ...options
    }
};