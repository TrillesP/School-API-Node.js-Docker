const { teachers } = require('../models'); 

const createTeacher = async ({ fullName, email, password }) => {
  const [teacher, created] = await teachers.findOrCreate({ 
    where: { email, password },
    defaults: { 
      fullName,
      email, 
      password
    }
  });
  if (created) return teacher;
  return created;
};

const findTeachers = () => teachers.findAll({
  attributes: { exclude: ['password'] }
});

const findTeacherById = async (id) => {
  const teacher = await teachers.findOne({
    where: { id },
    attributes: { exclude: ['password'] }
  });
  return teacher;
};

const deleteTeacher = async (id) => {
  const result = await teachers.destroy({ where: { id } });
  return result;
};

module.exports = {
  createTeacher,
  findTeachers,
  findTeacherById,
  deleteTeacher,
};