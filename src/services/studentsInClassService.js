const { studentsClasses } = require('../models');

const findAllStudentsInClass = async (classId) => {
    const allStudents = await studentsClasses.findAll({
      where: { classId },
    });
    return allStudents;
};

module.exports = { findAllStudentsInClass };