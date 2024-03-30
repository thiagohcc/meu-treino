'use strict';

const gymUnit = [
  {
    name: 'Fitness Center',
    phone: '987654321',
    email: 'info@fitnesscenter.com',
    open_hour: '08:00:00',
    close_hour: '20:00:00',
    address_id: 2
  },
  {
    name: 'Gym & Spa',
    phone: '123456789',
    email: 'info@gymspa.com',
    open_hour: '07:00:00',
    close_hour: '22:00:00',
    address_id: 2
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('gym_unit', gymUnit);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('gym_unit', null, {});
  }
};
