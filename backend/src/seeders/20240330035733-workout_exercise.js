'use strict';

const workout_exercise = [
  // WorkoutSheet 1
  { workout_id: 1, exercise_id: 1 },
  { workout_id: 2, exercise_id: 2 },
  { workout_id: 3, exercise_id: 3 },
  { workout_id: 4, exercise_id: 4 },

  // WorkoutSheet 2
  { workout_id: 5, exercise_id: 5 },
  { workout_id: 6, exercise_id: 6 },
  { workout_id: 7, exercise_id: 7 },
  { workout_id: 8, exercise_id: 8 },

  // WorkoutSheet 3
  { workout_id: 9, exercise_id: 9 },
  { workout_id: 10, exercise_id: 10 },
  { workout_id: 11, exercise_id: 11 },
  { workout_id: 12, exercise_id: 12 },

  // WorkoutSheet 4
  { workout_id: 13, exercise_id: 13 },
  { workout_id: 14, exercise_id: 14 },
  { workout_id: 15, exercise_id: 15 },
  { workout_id: 16, exercise_id: 16 },

  // WorkoutSheet 5
  { workout_id: 17, exercise_id: 17 },
  { workout_id: 18, exercise_id: 18 },
  { workout_id: 19, exercise_id: 19 },
  { workout_id: 20, exercise_id: 20 },

  // WorkoutSheet 6
  { workout_id: 21, exercise_id: 21 },
  { workout_id: 22, exercise_id: 22 },
  { workout_id: 23, exercise_id: 23 },
  { workout_id: 24, exercise_id: 24 },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('workout_exercise', workout_exercise);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('workout_exercise', null, {});
  }
};
