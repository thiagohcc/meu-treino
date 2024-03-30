'use strict';

const exercise = [
  {
    name: 'Push-up',
    number: 1,
    photo_url: 'pushup.jpg',
    video_url: 'pushup.mp4',
  },
  {
    name: 'Squats',
    number: 2,
    photo_url: 'squats.jpg',
    video_url: 'squats.mp4',
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
