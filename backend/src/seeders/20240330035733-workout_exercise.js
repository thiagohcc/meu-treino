'use strict';

const workout_exercise = [
  {
    workout_id: 1,
    exercise_id: 1,
  },
  {
    workout_id: 1,
    exercise_id: 2,
  },
  {
    workout_id: 2,
    exercise_id: 1,
  },
  {
    workout_id: 2,
    exercise_id: 2,
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('workout_exercise', workout_exercise);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('workout_exercise', null, {});
  }
};
