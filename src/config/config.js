require('dotenv').config();
const options = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: process.env.MYSQLDIALECT || 'mysql',
    dialectOptions: {
      timezone: 'Z',
    },
    logging: process.env.DEBUG !== 'false'
};
  
module.exports = {
    development: {
      ...options
    }
};