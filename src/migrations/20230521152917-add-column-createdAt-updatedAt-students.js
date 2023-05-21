'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('students', 'createdAt', {
     type: Sequelize.DATE,
   });
   await queryInterface.addColumn('students', 'updatedAt', {
     type: Sequelize.DATE,
  });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('students', 'createdAt');
    await queryInterface.removeColumn('students', 'updatedAt');
  }
};
