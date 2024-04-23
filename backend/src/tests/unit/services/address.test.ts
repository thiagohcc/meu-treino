import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
const sinon = require('sinon');

import AddressService from '../../../services/address.service';
import Address from '../../../models/Address';

import mock from '../mocks/address.mock';

chai.use(sinonChai);
const expect = chai.expect;

describe('=== Address_Service ===', () => {
  describe('Testa a Address Service se:', () => {

    const addressService = new AddressService();

    afterEach(() => {
      sinon.restore();
    });

    it('retorna todos os endereços corretamente', async () => {
      sinon.stub(Address, 'findAll').resolves(mock.allAddresses);

      const response = await addressService.getAll();

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.allAddresses);
    });

    it('retorna uma mensagem de erro ao tentar retornar todos os endereços', async () => {
      sinon.stub(Address, 'findAll').throws(new Error('Erro ao retornar endereços'));

      const response = await addressService.getAll();

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar endereços');
    });

    it('retorna um endereço através de um id', async () => {
      sinon.stub(Address, 'findByPk').resolves(mock.address);

      const response = await addressService.getById(1);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.address);
    });

    it('retorna uma mensagem de erro ao tentar retornar um endereço através de um id', async () => {
      sinon.stub(Address, 'findByPk').throws(new Error('Erro ao retornar endereço'));

      const response = await addressService.getById(1);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar endereço');
    });

    it('retorna uma mensagem de erro ao tentar retornar um endereço que não existe', async () => {
      sinon.stub(Address, 'findByPk').resolves(null);

      const response = await addressService.getById(999);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal("Address not found.");
    });

    it('retorna uma mensagem de erro ao tentar retornar um endereço e falhar', async () => {
      sinon.stub(Address, 'findByPk').throws(new Error('Erro ao retornar endereço'));

      const response = await addressService.getById(999);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar endereço');
    });

    it('cria um novo endereço corretamente', async () => {
      sinon.stub(Address, 'create').resolves(mock.address);

      const response = await addressService.post(mock.newAddress);

      expect(response.type).to.be.equal(201);
      expect(response.message).to.be.equal(mock.address);
    });

    it('retorna uma mensagem de erro ao tentar criar um novo endereço', async () => {
      sinon.stub(Address, 'create').throws(new Error('Erro ao criar endereço'));

      const response = await addressService.post(mock.newAddress);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao criar endereço');
    });

    it('atualiza um endereço corretamente', async () => {
      sinon.stub(Address, 'findByPk').resolves(mock.address);
      sinon.stub(Address, 'update').resolves(mock.addressUpdated);

      const response = await addressService.put(1, mock.addressToUpdate);     

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.addressUpdated);
    });

    it('retorna uma mensagem de erro ao tentar atualizar um endereço que não existe', async () => {
      sinon.stub(Address, 'findByPk').resolves(null);

      const response = await addressService.put(999, mock.addressToUpdate);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal("Address not found.");
    });

    it('retorna uma mensagem de erro ao tentar atualizar um endereço e falhar', async () => {
      sinon.stub(Address, 'findByPk').throws(new Error('Erro ao retornar endereço'));

      const response = await addressService.put(999, mock.addressToUpdate);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar endereço');
    });

    it('retorna uma mensagem de erro ao tentar tualizar um endereço inexistente', async () => {
      sinon.stub(Address, 'findByPk').resolves(null);

      const response = await addressService.put(999, mock.addressToUpdate);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal("Address not found.");
    });

    it('retorna uma mensagem de erro ao tentar atualizar um endereço e falhar', async () => {
      sinon.stub(Address, 'findByPk').throws(new Error('Erro ao retornar endereço'));

      const response = await addressService.put(999, mock.addressToUpdate);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar endereço');
    });

    it('deleta um endereço corretamente', async () => {
      sinon.stub(Address, 'findByPk').resolves(mock.address);
      sinon.stub(Address, 'destroy').resolves();

      const response = await addressService.delete(1);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal('Address deleted.');
    });

    it('retorna uma mensagem de erro ao tentar deletar um endereço que não existe', async () => {
      sinon.stub(Address, 'findByPk').resolves(null);

      const response = await addressService.delete(999);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal("Address not found.");
    });

    it('retorna uma mensagem de erro ao tentar deletar um endereço e falhar', async () => {
      sinon.stub(Address, 'findByPk').throws(new Error('Erro ao retornar endereço'));

      const response = await addressService.delete(999);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar endereço');
    });

    it('é possível aditar um endereço parcialmente', async () => {
      sinon.stub(Address, 'findByPk').resolves(mock.address);
      sinon.stub(Address, 'update').resolves(mock.addressUpdated);

      const response = await addressService.patch(1, mock.dataToUpdateAddress.updates);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.addressUpdated);
    });

    it('retorna uma mensagem de erro ao tentar editar um endereço parcialmente que não existe', async () => {
      sinon.stub(Address, 'findByPk').resolves(null);

      const response = await addressService.patch(999, mock.dataToUpdateAddress.updates);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal("Address not found.");
    });

    it('retorna uma mensagem de erro ao tentar editar um endereço parcialmente e falhar', async () => {
      sinon.stub(Address, 'findByPk').throws(new Error('Erro ao retornar endereço'));

      const response = await addressService.patch(999, mock.dataToUpdateAddress.updates);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar endereço');
    });



  });
});
