'use strict';

const address = [
  {
    street: '123 Main St',
    number: 1,
    complement: 'Apt 101',
    neighborhood: 'Downtown',
    city: 'Cityville',
    state: 'State',
    country: 'Country',
    zip_code: '12345',
  },
  {
    street: '456 Elm St',
    number: 2,
    complement: 'Unit 202',
    neighborhood: 'Suburb',
    city: 'Townville',
    state: 'State',
    country: 'Country',
    zip_code: '54321',
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('address', address);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('address', null, {});
  }
};
