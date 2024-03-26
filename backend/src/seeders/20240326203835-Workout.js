'use strict';

import workout from './data/workout';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('workout', workout);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('workout', null, {});
  }
};
