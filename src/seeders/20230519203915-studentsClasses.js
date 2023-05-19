'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('students_classes',
      [
        {
          studentId: 1,
          classId: 1
        },
        {
          studentId: 1,
          classId: 2
        },
        {
          studentId: 2,
          classId: 1
        },
        {
          studentId: 2,
          classId: 2
        },
        {
          studentId: 3,
          classId: 3
        },
        {
          studentId: 4,
          classId: 3
        },
        {
          studentId: 5,
          classId: 4
        },
        {
          studentId: 6,
          classId: 3
        },
        {
          studentId: 6,
          classId: 4
        }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('students_classes', null, {});
  },
};
