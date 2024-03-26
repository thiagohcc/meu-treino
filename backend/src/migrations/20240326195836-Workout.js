'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('workout', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      workoutsheet_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'workoutsheet',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      repetitions: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sets: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('workout');
  }
};
