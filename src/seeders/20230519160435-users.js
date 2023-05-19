'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        fullName: 'Pedro Trilles',
        email: 'trilles.ficticio@gmail.com',
        password: 'abacaxi',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        id: 2,
        fullName: 'João Ninguém',
        email: 'joao_ninguem@gmail.com',
        password: 'banana',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        id: 3,
        fullName: 'Fulano de Tal',
        email: 'fulano.de.tal@gmail.com',
        password: '1234pera',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      }
      ], { timestamps: false });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};