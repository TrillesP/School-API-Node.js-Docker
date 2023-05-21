const classesService = require('../services/classesService');
const teachersService = require('../services/teachersService');
const studentsService = require('../services/studentsService');

const findAllClasses = async (_req, res) => {
    try {
      const allClasses = await classesService.findAllClasses();
      return res.status(200).json(allClasses);
    } catch (error) {
      return res.status(500).json({ message: 'Internal error', error: error.message });
    }
};

const newClass = async (req, res) => {
    const { className, teacherId } = req.body;
      
    if (!className || !teacherId) {
      return res.status(400).json({ message: 'Some of the required fields are missing' });
    }
    const teacherFound = await teachersService.findTeacherById(teacherId);
    if (!teacherFound){
        return res.status(404).json({ message: 'Teacher not registered' });
    }
    const createdClass = await classesService.newClass({ ...req.body });
    return res.status(201).json(createdClass);  
};

const findClassById = async (req, res) => {
  try {
    const { id } = req.params;
    const classFound = await classesService.findClassById(id);
    if (!classFound) throw Error;
    return res.status(200).json(classFound);
  } catch (error) {
    return res.status(404).json({ message: 'Class does not exist' });
  }
};

const addStudentToClass = async (req, res) => {
  try {
    const { id } = req.params;
    const { studentId } = req.body;
    const { data: { teacherId } } = req.teacher;

    const classFound = await classesService.findClassById(id);
    if (!classFound) return res.status(404).json({ message: 'Class does not exist' });

    const studentFound = await studentsService.findStudentById(studentId);
    if (!studentFound) return res.status(404).json({ message: 'Student does not exist' });

    const addedStudent = await classesService.addStudentToClass(id, studentId);
    if (!addedStudent) return res.status(409).json({ message: 'This student already attends this class' });

    if (Number(teacherId) !== 1) {
      return res.status(403).json({ message: 'Access denied' }); 
    }
    return res.status(201).json({ message: 'Successfully added student to class'});
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

const removeStudentFromClass = async (req, res) => {
  try {
    const { id } = req.params;
    const { studentId } = req.body;
    const { data: { teacherId } } = req.teacher;

    const classFound = await classesService.findClassById(id);
    if (!classFound) return res.status(404).json({ message: 'Class does not exist' });

    const studentFound = await studentsService.findStudentById(studentId);
    if (!studentFound) return res.status(404).json({ message: 'Student does not exist' });

    const classWithStudentFound = await classesService.findClassWithStudent(id, studentId);
    if (!classWithStudentFound) return res.status(404).json({ message: 'This student does not attend this class' });

    if (Number(teacherId) !== 1) {
      return res.status(403).json({ message: 'Access denied' }); 
    }
    await classesService.removeStudentFromClass(id,studentId);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

const deleteClassById = async (req, res) => {
    const { id } = req.params;
    const { data: { teacherId } } = req.teacher;
    const classFound = await classesService.findClassById(id);
    if (classFound) {
      if (Number(teacherId) === Number(classFound.teacherId) || Number(teacherId) === 1) {
        await classesService.deleteClassById(id);
        return res.status(204).json();
      }
      return res.status(403).json({ message: 'Access denied' });
    }     
    return res.status(404).json({ message: 'Class does not exist' });
};

module.exports = {
  findAllClasses,
  newClass,
  findClassById,
  addStudentToClass,
  removeStudentFromClass,
  deleteClassById
};