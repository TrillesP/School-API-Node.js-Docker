const classesService = require('../services/classesService');
const studentsInClassService = require('../services/studentsInClassService');

const findAllStudentsInClass = async (req, res) => {
    const { id } = req.params;
    try {
      const classFound = await classesService.findClassById(id);
      if (!classFound) return res.status(404).json({ message: 'Class does not exist' });
    
      const allStudentsInClass = await studentsInClassService.findAllStudentsInClass(id);
      if (allStudentsInClass.length === 0) return res.status(404).json({ message: 'Class currently has no students' });

      return res.status(200).json(allStudentsInClass);
    } catch (error) {
      return res.status(500).json({ message: 'Internal error', error: error.message });
    }
};

module.exports = { findAllStudentsInClass };