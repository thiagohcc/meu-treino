'use strict';

import workoutsheet from './data/workoutsheet';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('workoutsheet', workoutsheet);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('workoutsheet', null, {});
  }
};
