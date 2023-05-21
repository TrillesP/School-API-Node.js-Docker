const { classes } = require('../models'); 
const { studentsClasses } = require('../models');

const findAllClasses = async () => {
    const allClasses = await classes.findAll();
    return allClasses;
};

const newClass = async ({ className, teacherId }) => {
    const [classCreated, created] = await classes.findOrCreate({ 
        where: { className, teacherId },
        defaults: { 
          className,
          teacherId
        },
    });
    if (created) return classCreated;
    return created;
};

const findClassById = async (id) => {
  const classFound = await classes.findOne({where: { id }});
  return classFound;
};

const addStudentToClass = async (classId, studentId) => {
  const [result, created] = await studentsClasses.findOrCreate({ 
    where: { classId, studentId },
    defaults: { 
      classId,
      studentId
    }
  });
  if (created) return result;
  return created;
};

const findClassWithStudent = async (classId, studentId) => {
  const classWithStudentFound = await studentsClasses.findOne({where: { classId, studentId }});
  return classWithStudentFound;
};

const removeStudentFromClass = async (classId, studentId) => {
  const result = await studentsClasses.destroy({ 
    where: { classId, studentId }
  });
  return result;
};

const deleteClassById = async (id) => {
  const result = await classes.destroy({ where: { id } });
  return result;
};

module.exports = {
  findAllClasses,
  newClass,
  findClassById,
  addStudentToClass,
  findClassWithStudent,
  removeStudentFromClass,
  deleteClassById
};