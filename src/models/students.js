/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
    const students = sequelize.define(
      'students',
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        fullName: DataTypes.STRING,
        phone: DataTypes.STRING
      },
      {
        timestamps: false,
        underscored: true,
        tableName: 'students',
      },
    );
  
    return students;
};