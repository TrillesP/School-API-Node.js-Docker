/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize')} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
    const teachers = sequelize.define(
      'teachers',
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        fullName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
      },
      {
        tableName: 'teachers'
      },
    );
  
    teachers.associate = (models) => {
      teachers.hasMany(models.classes,
        { foreignKey: { name: 'teacherId', field: 'teacher_id' }, as: 'classes' });
    };
  
    return teachers;
};