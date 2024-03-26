'use strict';

import address from './data/address';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('address', address);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('address', null, {});
  }
};
