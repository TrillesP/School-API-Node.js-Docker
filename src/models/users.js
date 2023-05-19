/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize')} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
      'user',
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        fullName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
      },
      {
        timestamps: false,
        underscored: true,
        tableName: 'users'
      },
    );
  
    // user.associate = (models) => {
    //   user.hasMany(models.BlogPost,
    //     { foreignKey: { name: 'userId', field: 'user_id' }, as: 'blogs' });
    // };
  
    return user;
  };