'use strict';

import exercise from './data/exercise';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('exercise', exercise);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('exercise', null, {});
  }
};
