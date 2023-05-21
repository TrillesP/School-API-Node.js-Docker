const { students } = require('../models'); 

const newStudent = async ({ fullName, phone }) => {
  const [student, created] = await students.findOrCreate({ 
    where: { fullName },
    defaults: { 
      fullName,
      phone
    }
  });
  if (created) return student;
  return created;
};

const findStudents = async () => {
    const allStudents = await students.findAll();
    return allStudents;
}

const findStudentById = async (id) => {
  const student = await students.findOne({
    where: { id }
  });
  return student;
};

const deleteStudent = async (id) => {
  const result = await students.destroy({ where: { id } });
  return result;
};

module.exports = {
  newStudent,
  findStudents,
  findStudentById,
  deleteStudent,
};