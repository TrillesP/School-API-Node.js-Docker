/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
    const classes = sequelize.define(
      'classes',
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        className: DataTypes.STRING,
        teacherId: DataTypes.INTEGER
      },
      {
        timestamps: false,
        tableName: 'classes'
      }
    );

    classes.associate = (models) => {
        classes.belongsTo(models.teachers,
          { foreignKey: { name: 'teacherId', field: 'teacher_id' }, as: 'teacher' });
      };
  
    return classes;
};