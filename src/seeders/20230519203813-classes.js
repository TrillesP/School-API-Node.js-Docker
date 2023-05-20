module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('classes',
      [
        {
          id: 1,
          className: 'JavaScript 1',
          teacherId: 1
        },
        {
          id: 2,
          className: 'Python 1',
          teacherId: 1
        },
        {
          id: 3,
          className: 'Python 2',
          teacherId: 2
        },
        {
          id: 4,
          className: 'Node.js',
          teacherId: 3
        }
      ], { timestamps: false });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('classes', null, {});
  }
};
