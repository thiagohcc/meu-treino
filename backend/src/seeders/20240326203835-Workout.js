'use strict';

const workout = [
  {
    workoutsheet_id: 1,
    weight: 50,
    repetitions: 10,
    sets: 3,
  },
  {
    workoutsheet_id: 1,
    weight: 50,
    repetitions: 10,
    sets: 3,
  },
  {
    workoutsheet_id: 1,
    weight: 50,
    repetitions: 10,
    sets: 3,
  },
  {
    workoutsheet_id: 1,
    weight: 50,
    repetitions: 10,
    sets: 3,
  },
  {
    workoutsheet_id: 2,
    weight: 30,
    repetitions: 15,
    sets: 3,
  },
  {
    workoutsheet_id: 2,
    weight: 30,
    repetitions: 15,
    sets: 3,
  },
  {
    workoutsheet_id: 2,
    weight: 30,
    repetitions: 15,
    sets: 3,
  },
  {
    workoutsheet_id: 2,
    weight: 30,
    repetitions: 15,
    sets: 3,
  },
  {
    workoutsheet_id: 3,
    weight: 70,
    repetitions: 8,
    sets: 3,
  },
  {
    workoutsheet_id: 3,
    weight: 70,
    repetitions: 8,
    sets: 3,
  },
  {
    workoutsheet_id: 3,
    weight: 70,
    repetitions: 8,
    sets: 3,
  },
  {
    workoutsheet_id: 3,
    weight: 70,
    repetitions: 8,
    sets: 3,
  },
  {
    workoutsheet_id: 4,
    weight: 40,
    repetitions: 12,
    sets: 3,
  },
  {
    workoutsheet_id: 4,
    weight: 40,
    repetitions: 12,
    sets: 3,
  },
  {
    workoutsheet_id: 4,
    weight: 40,
    repetitions: 12,
    sets: 3,
  },
  {
    workoutsheet_id: 4,
    weight: 40,
    repetitions: 12,
    sets: 3,
  },
  {
    workoutsheet_id: 5,
    weight: 60,
    repetitions: 10,
    sets: 3,
  },
  {
    workoutsheet_id: 5,
    weight: 60,
    repetitions: 10,
    sets: 3,
  },
  {
    workoutsheet_id: 5,
    weight: 60,
    repetitions: 10,
    sets: 3,
  },
  {
    workoutsheet_id: 5,
    weight: 60,
    repetitions: 10,
    sets: 3,
  },
  {
    workoutsheet_id: 6,
    weight: 80,
    repetitions: 6,
    sets: 3,
  },
  {
    workoutsheet_id: 6,
    weight: 80,
    repetitions: 6,
    sets: 3,
  },

];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('workout', workout);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('workout', null, {});
  }
};
