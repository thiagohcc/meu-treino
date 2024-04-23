import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
const sinon = require('sinon');

chai.use(sinonChai);
const expect = chai.expect;

import Customer from '../../../models/Customer';
import Address from '../../../models/Address';

import CustomerService from '../../../services/customer.service';

import mock from '../mocks/customer.mock';

describe('=== Customer_Service ===', () => {
  describe('Testa a Customer Service se:', () => {

    const customerService = new CustomerService();

    afterEach(() => {
      sinon.restore();
    });

    it('retorna todos os clientes corretamente', async () => {
      sinon.stub(Customer, 'findAll').resolves(mock.allCustomers);

      const response = await customerService.getAll();

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.allCustomers);
    });

    it('retorna uma mensagem de erro ao tentar retornar todos os clientes', async () => {
      sinon.stub(Customer, 'findAll').throws(new Error('Erro ao retornar clientes'));

      const response = await customerService.getAll();

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar clientes');
    });

    it('retorna um cliente pelo id corretamente', async () => {
      sinon.stub(Customer, 'findByPk').resolves(mock.userById);

      const response = await customerService.getById(1);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.userById);
    });

    it('retorna uma mensagem de erro ao tentar retornar um cliente pelo id e falha', async () => {
      sinon.stub(Customer, 'findByPk').throws(new Error('Erro ao retornar cliente'));

      const response = await customerService.getById(1);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar cliente');
    });

    it('retorna uma mensagem de erro ao tentar retornar um cliente que não existe pelo id', async () => {
      sinon.stub(Customer, 'findByPk').resolves(null);

      const response = await customerService.getById(1);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Customer not found.');
    });

    it('retorna um cliente pelo cpf corretamente', async () => {
      sinon.stub(Customer, 'findOne').resolves(mock.userByCpf);

      const response = await customerService.getByCpf('12345678900');

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.userByCpf);
    });

    it('retorna uma mensagem de erro ao tentar retornar um cliente pelo cpf e falha', async () => {
      sinon.stub(Customer, 'findOne').throws(new Error('Erro ao retornar cliente'));

      const response = await customerService.getByCpf('12345678900');

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar cliente');
    });

    it('retorna uma mensagem de erro ao tentar retornar um cliente que não existe pelo cpf', async () => {
      sinon.stub(Customer, 'findOne').resolves(null);

      const response = await customerService.getByCpf('12345678900');

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Customer not found.');
    });

    it('retorna um cliente pelo email corretamente', async () => {
      sinon.stub(Customer, 'findOne').resolves(mock.userByEmail);

      const response = await customerService.getByEmail('joao@example.com');

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.userByEmail);
    });

    it('retorna uma mensagem de erro ao tentar retornar um cliente pelo email e falha', async () => {
      sinon.stub(Customer, 'findOne').throws(new Error('Erro ao retornar cliente'));

      const response = await customerService.getByEmail('joao@example.com');

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar cliente');
    });

    it('retorna uma mensagem de erro ao tentar retornar um cliente que não existe pelo email', async () => {
      sinon.stub(Customer, 'findOne').resolves(null);

      const response = await customerService.getByEmail('joao@example.com');

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Customer not found.');
    });

    it('é possível criar um cliente simples corretamente', async () => {
      sinon.stub(Customer, 'create').resolves(mock.newUserSimpleCreated);

      const response = await customerService.post(mock.newUserSimple.customer);

      expect(response.type).to.be.equal(201);
      expect(response.message).to.be.equal(mock.newUserSimpleCreated);
    });

    it('retorna uma mensagem de erro ao tentar criar um cliente simples e falha', async () => {
      sinon.stub(Customer, 'create').throws(new Error('Erro ao criar cliente'));

      const response = await customerService.post(mock.newUserSimple.customer);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao criar cliente');
    });

    it('é possível criar um cliente completo corretamente', async () => {
      sinon.stub(Address, 'create').resolves(mock.newUserWithAddress.address);
      sinon.stub(Customer, 'create').resolves(mock.newUserWithAddressCreated);
      sinon.stub(Customer, 'findByPk').resolves(mock.newUserWithAddressCreated);

      const response = await customerService.post(mock.newUserWithAddress.customer, mock.newUserWithAddress.address);

      expect(response.type).to.be.equal(201);
      expect(response.message).to.be.equal(mock.newUserWithAddressCreated);
    });

    it('é possível editar um cliente corretamente', async () => {
      sinon.stub(Customer, 'findByPk').resolves(mock.userById);
      sinon.stub(Customer, 'update').resolves();
      sinon.stub(Customer, 'findOne').resolves(mock.customerUpdated);

      const response = await customerService.put(1, mock.customerToUpdate);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.customerUpdated);
    });

    it('retorna uma mensagem de erro ao tentar editar um cliente e falha', async () => {
      sinon.stub(Customer, 'findByPk').throws(new Error('Erro ao retornar cliente'));

      const response = await customerService.put(1, mock.customerToUpdate);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar cliente');
    });

    it('retorna uma mensagem de erro ao tentar editar um cliente que não existe', async () => {
      sinon.stub(Customer, 'findByPk').resolves(null);

      const response = await customerService.put(1, mock.customerToUpdate);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Customer not found.');
    });

    it('é possível deletar um cliente corretamente', async () => {
      sinon.stub(Customer, 'findByPk').resolves(mock.userById);
      sinon.stub(Customer, 'destroy').resolves();

      const response = await customerService.delete(1);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal('Customer deleted.');
    });

    it('retorna uma mensagem de erro ao tentar deletar um cliente e falha', async () => {
      sinon.stub(Customer, 'findByPk').throws(new Error('Erro ao retornar cliente'));

      const response = await customerService.delete(1);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar cliente');
    });

    it('retorna uma mensagem de erro ao tentar deletar um cliente que não existe', async () => {
      sinon.stub(Customer, 'findByPk').resolves(null);

      const response = await customerService.delete(1);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Customer not found.');
    });

    it('é possível editar parcialmente um cliente corretamente', async () => {
      sinon.stub(Customer, 'findByPk').resolves(mock.userById);
      sinon.stub(Customer, 'update').resolves();
      sinon.stub(Customer, 'findOne').resolves(mock.CustomerUpdatedByData);

      const response = await customerService.patch(1, mock.dataToUpdateCustomer);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.CustomerUpdatedByData);
    });

    it('retorna uma mensagem de erro ao tentar editar parcialmente um cliente e falha', async () => {
      sinon.stub(Customer, 'findByPk').resolves(mock.userById);
      sinon.stub(Customer, 'update').throws(new Error('Erro ao retornar cliente'));

      const response = await customerService.patch(1, mock.dataToUpdateCustomer);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar cliente');
    });

    it('retorna uma mensagem de erro ao tentar editar parcialmente um cliente que não existe', async () => {
      sinon.stub(Customer, 'findByPk').resolves(null);

      const response = await customerService.patch(1, mock.dataToUpdateCustomer);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Customer not found.');
    });


  });
});