'use strict';

const gymUnit = [
  {
    name: 'Academia Vida Ativa',
    phone: '1122334455',
    email: 'contato@vidaativa.com',
    open_hour: '06:00:00',
    close_hour: '22:00:00',
    address_id: 13
  },
  {
    name: 'CrossFit Power',
    phone: '9988776655',
    email: 'contato@crossfitpower.com',
    open_hour: '07:00:00',
    close_hour: '21:00:00',
    address_id: 14
  },
  {
    name: 'Muscle Fitness',
    phone: '3344556677',
    email: 'contato@musclefitness.com',
    open_hour: '08:00:00',
    close_hour: '20:00:00',
    address_id: 15
  },
  {
    name: 'Gym Extreme',
    phone: '5544332211',
    email: 'contato@gymextreme.com',
    open_hour: '09:00:00',
    close_hour: '19:00:00',
    address_id: 16
  },
  {
    name: 'BodyTech',
    phone: '6677889900',
    email: 'contato@bodytech.com',
    open_hour: '10:00:00',
    close_hour: '18:00:00',
    address_id: 17
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('gym_unit', gymUnit);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('gym_unit', null, {});
  }
};
