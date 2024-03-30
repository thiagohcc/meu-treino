'use strict';

const workout = [
  {
    workoutsheet_id: 1,
    weight: 50,
    repetitions: 10,
    sets: 3,
  },
  {
    weight: 70,
    repetitions: 8,
    sets: 4,
    workoutsheet_id: 2,
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('workout', workout);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('workout', null, {});
  }
};
