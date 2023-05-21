const studentsService = require('../services/studentsService');

const newStudent = async (req, res) => {
  try {
    const { fullName, phone } = req.body;
    const { data: { teacherId } } = req.teacher;
    if (Number(teacherId) !== 1){
      return res.status(403).json({ message: 'Access denied. Only the admin can add students.' })
    }
    
    const student = await studentsService.newStudent({ fullName, phone });
    if (!student) {
      return res.status(400).json({ message: "Student already registered" });
    }
    return res.status(201).json(student);   
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

const findStudents = async (_req, res) => {
  try {
    const allStudents = await studentsService.findStudents();
    if (!allStudents) throw Error;
    return res.status(200).json(allStudents);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

const findStudentById = async (req, res) => {
    try {
      const { id } = req.params;
      const student = await studentsService.findStudentById(id);
      if (!student) throw Error;
      return res.status(200).json(student);
    } catch (error) {
      return res.status(404).json({ message: 'Student not registered' });
    }
};

const deleteStudent = async (req, res) => {
    const { id } = req.params;
    const { data: { teacherId } } = req.teacher;
    if (Number(teacherId) !== 1){
        return res.status(403).json({ message: 'Access denied. Only the admin can remove students.' })
    }
    const student = await studentsService.deleteStudent(id);
    if (student) {
      return res.status(204).json();
    }
  };

module.exports = {
  newStudent,
  findStudents,
  findStudentById,
  deleteStudent
};