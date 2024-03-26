'use strict';

import customer from './data/customer';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('customer', customer);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customer', null, {});
  }
};
