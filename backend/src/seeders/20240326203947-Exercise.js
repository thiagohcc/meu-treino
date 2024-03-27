'use strict';

const exercise = [
  {
    name: 'Push-up',
    number: 1,
    photoUrl: 'pushup.jpg',
    videoUrl: 'pushup.mp4',
  },
  {
    name: 'Squats',
    number: 2,
    photoUrl: 'squats.jpg',
    videoUrl: 'squats.mp4',
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('exercise', exercise);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('exercise', null, {});
  }
};
