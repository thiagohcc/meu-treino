'use strict';

const customer = [
  {
      first_name: 'João',
      last_name: 'Silva',
      email: 'joao@example.com',
      gender: 'masculino',
      phone: '1122334455',
      cpf: '12345678901',
      is_active: true,
      address_id: 1
  },
  {
      first_name: 'Maria',
      last_name: 'Santos',
      email: 'maria@example.com',
      gender: 'feminino',
      phone: '9988776655',
      cpf: '98765432101',
      is_active: true,
      address_id: 2
  },
  {
      first_name: 'José',
      last_name: 'Oliveira',
      email: 'jose@example.com',
      gender: 'masculino',
      phone: '5544332211',
      cpf: '12312312301',
      is_active: true,
      address_id: 3
  },
  {
      first_name: 'Ana',
      last_name: 'Ferreira',
      email: 'ana@example.com',
      gender: 'feminino',
      phone: '6677889900',
      cpf: '45678901201',
      is_active: true,
      address_id: 4
  },
  {
      first_name: 'Carlos',
      last_name: 'Rodrigues',
      email: 'carlos@example.com',
      gender: 'masculino',
      phone: '3344556677',
      cpf: '78901234501',
      is_active: true,
      address_id: 5
  },
  {
      first_name: 'Aline',
      last_name: 'Almeida',
      email: 'aline@example.com',
      gender: 'feminino',
      phone: '9988776655',
      cpf: '90123456701',
      is_active: true,
      address_id: 6
  },
  {
      first_name: 'Paulo',
      last_name: 'Gomes',
      email: 'paulo@example.com',
      gender: 'masculino',
      phone: '1122334455',
      cpf: '23456789001',
      is_active: true,
      address_id: 7
  },
  {
      first_name: 'Camila',
      last_name: 'Martins',
      email: 'camila@example.com',
      gender: 'feminino',
      phone: '9988776655',
      cpf: '56789012301',
      is_active: true,
      address_id: 8
  },
  {
      first_name: 'Pedro',
      last_name: 'Costa',
      email: 'pedro@example.com',
      gender: 'masculino',
      phone: '2233445566',
      cpf: '89012345601',
      is_active: true,
      address_id: 9
  },
  {
      first_name: 'Mariana',
      last_name: 'Ribeiro',
      email: 'mariana@example.com',
      gender: 'feminino',
      phone: '7788990011',
      cpf: '01234567801',
      is_active: true,
      address_id: 10
  },
  {
      first_name: 'Lucas',
      last_name: 'Oliveira',
      email: 'lucas@example.com',
      gender: 'masculino',
      phone: '3344556677',
      cpf: '34567890101',
      is_active: true,
      address_id: 11
  },
  {
      first_name: 'Juliana',
      last_name: 'Pereira',
      email: 'juliana@example.com',
      gender: 'feminino',
      phone: '9988776655',
      cpf: '67890123401',
      is_active: true,
      address_id: 12
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('customer', customer);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customer', null, {});
  }
};
