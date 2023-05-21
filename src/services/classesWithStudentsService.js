const { studentsClasses } = require('../models');

const findAllClassesWithStudent = async (studentId) => {
    const allClasses = await studentsClasses.findAll({
      where: { studentId },
    });
    return allClasses; 
};

module.exports = { findAllClassesWithStudent };