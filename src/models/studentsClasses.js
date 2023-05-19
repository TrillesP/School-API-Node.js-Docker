/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
    const studentsClasses = sequelize.define(
      'studentsClasses',
      {
        classId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        studentId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          primaryKey: true
        }
      },
      {
        underscored: true,
        timestamps: false,
        tableName: 'students_classes'
      }
    );
  
    studentsClasses.associate = ({students, classes}) => {
      students.belongsToMany(classes, {
        as: 'classes',
        through: studentsClasses,
        foreignKey: 'classId',
        otherKey: 'studentId'
      });
      classes.belongsToMany(students, {
        as: 'students',
        through: studentsClasses,
        foreignKey: 'studentId',
        otherKey: 'classId'
      });
    };
  
    return studentsClasses;
};