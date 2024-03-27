'use strict';

const workoutsheet = [
  {
    customer_id: 1,
    title: 'Beginner Workout',
    description: 'Basic workout routine for beginners',
    is_active: true,
  },
  {
    customer_id: 2,
    title: 'Intermediate Workout',
    description: 'Workout routine for intermediate level',
    is_active: true,
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('workout_sheet', workoutsheet);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('workout_sheet', null, {});
  }
};
