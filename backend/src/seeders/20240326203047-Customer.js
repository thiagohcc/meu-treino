'use strict';

const customer = [
  {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@example.com',
    gender: 'male',
    phone: '123456789',
    cpf: '12345678901',
    is_active: true,
    // address_id: 1
  },
  {
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'jane@example.com',
    gender: 'female',
    phone: '987654321',
    cpf: '98765432101',
    is_active: true,
    // address_id: 1
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('customer', customer);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customer', null, {});
  }
};
