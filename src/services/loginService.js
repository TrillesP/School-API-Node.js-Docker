const { user } = require('../models');

const logIn = async ({ email, password }) => {
  const userFound = await user.findOne({ 
    where: { email, password },
  });
  return userFound;
};

module.exports = {
  logIn,
};