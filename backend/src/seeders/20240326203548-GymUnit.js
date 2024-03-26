'use strict';

import gymUnit from './data/gymUnit';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('gym_unit', gymUnit);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('gym_unit', null, {});
  }
};
