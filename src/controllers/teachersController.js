const teachersService = require('../services/teachersService');
const { createToken } = require('../utils/jwtAuth');

const createdTeacher = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    
    const teacher = await teachersService.createdTeacher({ fullName, email, password });
    if (!user) {
      return res.status(409).json({ message: 'Teacher already registered' });
    }
    const token = createToken({ teacherId: teacher.id });

    return res.status(201).json({ token });   
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

const findTeachers = async (_req, res) => {
  try {
    const allTeachers = await teachersService.findTeachers();
    if (!allTeachers) throw Error;
    return res.status(200).json(allTeachers);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

const findTeacherById = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await teachersService.findTeacherById(id);
    if (!teacher) throw Error;
    return res.status(200).json(teacher);
  } catch (error) {
    return res.status(404).json({ message: 'Teacher not registered' });
  }
};

const deleteTeacher = async (req, res) => {
  const { data: { teacherId } } = req.teacher;
  const teacher = await teachersService.deleteTeacher(teacherId);
  if (teacher) {
    return res.status(204).json();
  }
};

module.exports = {
  createdTeacher,
  findTeachers,
  findTeacherById,
  deleteTeacher,
};