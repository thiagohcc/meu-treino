'use strict';

const address = [
  {
    street: 'Rua das Flores', number: 123, complement: 'Apto 101',
    neighborhood: 'Centro', city: 'Cidade A',
    state: 'Estado A', country: 'País A', zip_code: '12345-678',
  },
  {
    street: 'Avenida Brasil', number: 456, complement: 'Casa',
    neighborhood: 'Jardim das Palmeiras', city: 'Cidade B',
    state: 'Estado B', country: 'País B', zip_code: '54321-987',
  },
  {
    street: 'Travessa dos Girassóis', number: 789, complement: 'Sala 202',
    neighborhood: 'Bairro dos Lírios', city: 'Cidade C',
    state: 'Estado C', country: 'País C', zip_code: '98765-432',
  },
  {
    street: 'Rua dos Pinheiros', number: 321, complement: 'Bloco C',
    neighborhood: 'Vila Verde', city: 'Cidade D',
    state: 'Estado D', country: 'País D', zip_code: '54321-123',
  },
  {
    street: 'Avenida Principal', number: 789, complement: 'Loja 01',
    neighborhood: 'Centro Comercial', city: 'Cidade E',
    state: 'Estado E', country: 'País E', zip_code: '98765-321',
  },
  {
    street: 'Travessa dos Cravos', number: 654, complement: 'Sala 101',
    neighborhood: 'Bairro dos Lírios', city: 'Cidade F',
    state: 'Estado F', country: 'País F', zip_code: '12345-678',
  },
  {
    street: 'Rua dos Jasmins', number: 987, complement: 'Apto 303',
    neighborhood: 'Vila Verde', city: 'Cidade G',
    state: 'Estado G', country: 'País G', zip_code: '54321-987',
  },
  {
    street: 'Avenida das Palmeiras', number: 654, complement: 'Casa',
    neighborhood: 'Jardim das Flores', city: 'Cidade H',
    state: 'Estado H', country: 'País H', zip_code: '98765-432',
  },
  {
    street: 'Travessa dos Lírios', number: 321, complement: 'Bloco D',
    neighborhood: 'Vila Verde', city: 'Cidade I',
    state: 'Estado I', country: 'País I', zip_code: '54321-123',
  },
  {
    street: 'Rua dos Cravos', number: 987, complement: 'Loja 02',
    neighborhood: 'Centro Comercial', city: 'Cidade J',
    state: 'Estado J', country: 'País J', zip_code: '98765-321',
  },
  {
    street: 'Avenida dos Girassóis', number: 654, complement: 'Sala 202',
    neighborhood: 'Bairro dos Lírios', city: 'Cidade K',
    state: 'Estado K', country: 'País K', zip_code: '12345-678',
  },
  {
    street: 'Travessa dos Jasmins', number: 987, complement: 'Apto 404',
    neighborhood: 'Vila Verde', city: 'Cidade L',
    state: 'Estado L', country: 'País L', zip_code: '54321-987',
  },
  {
    street: 'Rua das Palmeiras', number: 321, complement: 'Casa',
    neighborhood: 'Jardim das Flores', city: 'Cidade M',
    state: 'Estado M', country: 'País M', zip_code: '98765-432',
  },
  {
    street: 'Avenida dos Lírios', number: 654, complement: 'Bloco E',
    neighborhood: 'Vila Verde', city: 'Cidade N',
    state: 'Estado N', country: 'País N', zip_code: '54321-123',
  },
  {
    street: 'Travessa das Flores', number: 987, complement: 'Loja 03',
    neighborhood: 'Centro Comercial', city: 'Cidade O',
    state: 'Estado O', country: 'País O', zip_code: '98765-321',
  },
  {
    street: 'Rua dos Girassóis', number: 654, complement: 'Sala 303',
    neighborhood: 'Bairro dos Lírios', city: 'Cidade P',
    state: 'Estado P', country: 'País P', zip_code: '12345-678',
  },
  {
    street: 'Avenida dos Cravos', number: 987, complement: 'Apto 505',
    neighborhood: 'Vila Verde', city: 'Cidade Q',
    state: 'Estado Q', country: 'País Q', zip_code: '54321-987',
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('address', address);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('address', null, {});
  }
};
