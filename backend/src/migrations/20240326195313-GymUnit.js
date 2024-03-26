'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gym_unit', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      open_hour: {
        type: Sequelize.TIME,
        allowNull: false
      },
      close_hour: {
        type: Sequelize.TIME,
        allowNull: false
      }
    });

    await queryInterface.addColumn('gym_unit', 'address_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'address',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('gym_unit', 'address_id');
    await queryInterface.dropTable('gym_unit');
  }
};
