const { classes } = require('../models'); 

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

const deleteClassById = async (id) => {
  const result = await classes.destroy({ where: { id } });
  return result;
};

module.exports = {
  findAllClasses,
  newClass,
  findClassById,
  deleteClassById
};