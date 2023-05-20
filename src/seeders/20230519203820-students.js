module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('students',
      [
        {
          id: 1,
          fullName: 'Aluno Exemplar',
          phone: '(21)99999-9898'
        },
        {
          id: 2,
          fullName: 'Péssimo Aluno',
          phone: '(21)98989-9898'
        },
        {
          id: 3,
          fullName: 'Aluno Genérico',
          phone: '(21)98888-8888'
        },
        {
          id: 4,
          fullName: 'Joãozinho',
          phone: '(21)97777-7777'
        },
        {
          id: 5,
          fullName: 'Aluno Indisciplinado',
          phone: '(21)99666-6666'
        },
        {
          id: 6,
          fullName: 'Aluno do Bom',
          phone: '(21)99595-5555'
        }
      ]);
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('students', null, {});
  }
};
