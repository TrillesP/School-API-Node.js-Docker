const studentsService = require('../services/studentsService');
const classesWithStudentService = require('../services/classesWithStudentsService');

const findAllClassesWithStudent = async (req, res) => {
    try {
      const { id } = req.params;
      const studentFound = await studentsService.findStudentById(id);
      if (!studentFound) return res.status(404).json({ message: 'Student does not exist' });

      const allClassesWithStudent = await classesWithStudentService.findAllClassesWithStudent(id);
      if (allClassesWithStudent.length === 0) return res.status(404).json({ message: 'Student is currently not in any class' });

      return res.status(200).json(allClassesWithStudent);
    } catch (error) {
      return res.status(500).json({ message: 'Internal error', error: error.message });
    }
};

module.exports = { findAllClassesWithStudent };