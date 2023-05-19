const { teachers } = require('../models');

const logIn = async ({ email, password }) => {
  const teacherFound = await teachers.findOne({ 
    where: { email, password }
  });
  return teacherFound;
};

module.exports = {
  logIn
};