import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
const sinon = require('sinon');

import GymUnit from '../../../models/GymUnit';
import GymUnitService from '../../../services/gymUnit.service';
import Address from '../../../models/Address';

import mock from '../mocks/gymUnit.mock';

chai.use(sinonChai);
const expect = chai.expect;

describe('=== GymUnit_Service ===', () => {
  describe('Testa a GymUnit Service se:', () => {

    const gymUnitService = new GymUnitService();

    afterEach(() => {
      sinon.restore();
    });

    it('retorna todas as unidades de academia corretamente', async () => {
      sinon.stub(GymUnit, 'findAll').resolves(mock.allUnits);

      const response = await gymUnitService.getAll();

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.allUnits);
    });

    it('retorna uma mensagem de erro ao tentar retornar todas as unidades de academia', async () => {
      sinon.stub(GymUnit, 'findAll').throws(new Error('Erro ao retornar unidades de academia'));

      const response = await gymUnitService.getAll();

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar unidades de academia');
    });

    it('retorna uma unidade de academia através de um id', async () => {
      sinon.stub(GymUnit, 'findByPk').resolves(mock.allUnits[0]);

      const response = await gymUnitService.getById(1);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.allUnits[0]);
    });

    it('retorna uma mensagem de erro ao tentar retornar uma unidade de academia através de um id e falhar', async () => {
      sinon.stub(GymUnit, 'findByPk').throws(new Error('Erro ao retornar unidade de academia'));

      const response = await gymUnitService.getById(1);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar unidade de academia');
    });

    it('retorna uma mensagem de erro ao tentar retornar uma unidade de academia que não existe', async () => {
      sinon.stub(GymUnit, 'findByPk').resolves(null);

      const response = await gymUnitService.getById(1);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Gym unit not found.');
    });

    it('é possível cadastrar uma unidade sem endereço', async () => {
      sinon.stub(GymUnit, 'create').resolves(mock.returnNewUnitSimple);

      const newUnitSimple = {
        name: mock.newUnitSimple.name,
        phone: mock.newUnitSimple.phone,
        email: mock.newUnitSimple.email,
        open_hour: new Date(mock.newUnitSimple.open_hour),
        close_hour: new Date(mock.newUnitSimple.close_hour),
      }

      const response = await gymUnitService.post(newUnitSimple, undefined);

      expect(response.type).to.be.equal(201);
      expect(response.message).to.be.equal(mock.returnNewUnitSimple);
    });

    it('retorna uma mensagem de erro ao cadastrar uma unidade sem endereço e falhar', async () => {
      sinon.stub(GymUnit, 'create').throws(new Error('Erro ao cadastrar unidade'));

      const newUnitSimple = {
        name: mock.newUnitSimple.name,
        phone: mock.newUnitSimple.phone,
        email: mock.newUnitSimple.email,
        open_hour: new Date(mock.newUnitSimple.open_hour),
        close_hour: new Date(mock.newUnitSimple.close_hour),
      }

      const response = await gymUnitService.post(newUnitSimple, undefined);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao cadastrar unidade');
    });

    it('é possível cadastrar uma unidade com endereço', async () => {
      sinon.stub(GymUnit, 'create').resolves(mock.allUnits[0]);
      sinon.stub(Address, 'create').resolves(mock.address);
      sinon.stub(GymUnit, 'findByPk').resolves(mock.allUnits[0]);

      const newUnitComplete = {
        name: mock.newUnitComplete.gymUnit.name,
        phone: mock.newUnitComplete.gymUnit.phone,
        email: mock.newUnitComplete.gymUnit.email,
        open_hour: new Date(mock.newUnitComplete.gymUnit.open_hour),
        close_hour: new Date(mock.newUnitComplete.gymUnit.close_hour),
      };

      const response = await gymUnitService.post(newUnitComplete, mock.newUnitComplete.address);

      expect(response.type).to.be.equal(201);
      expect(response.message).to.be.equal(mock.allUnits[0]);
    });

    it('retorna uma mensagem de erro ao cadastrar uma unidade com endereço e falhar', async () => {
      sinon.stub(GymUnit, 'create').throws(new Error('Erro ao cadastrar unidade'));
      sinon.stub(Address, 'create').resolves(mock.address);

      const newUnitComplete = {
        name: mock.newUnitComplete.gymUnit.name,
        phone: mock.newUnitComplete.gymUnit.phone,
        email: mock.newUnitComplete.gymUnit.email,
        open_hour: new Date(mock.newUnitComplete.gymUnit.open_hour),
        close_hour: new Date(mock.newUnitComplete.gymUnit.close_hour),
      };

      const response = await gymUnitService.post(newUnitComplete, mock.newUnitComplete.address);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao cadastrar unidade');
    });

    it('é possível atualizar uma unidade de academia corretamente', async () => {
      sinon.stub(GymUnit, 'findOne').resolves(mock.allUnits[0]);
      sinon.stub(GymUnit, 'update').resolves(mock.updatedGymUnitComplete);
      sinon.stub(GymUnit, 'findByPk').resolves(mock.updatedGymUnitComplete);

      const gymUnitToUpdate = {
        name: mock.gymUnitToUpdate.name,
        phone: mock.gymUnitToUpdate.phone,
        email: mock.gymUnitToUpdate.email,
        open_hour: new Date(mock.gymUnitToUpdate.open_hour),
        close_hour: new Date(mock.gymUnitToUpdate.close_hour),
      };

      const response = await gymUnitService.put(1, gymUnitToUpdate);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.updatedGymUnitComplete);
    });

    it('retorna uma mensagem de erro ao tentar atualizar uma unidade de academia que não existe', async () => {
      sinon.stub(GymUnit, 'findOne').resolves(null);

      const gymUnitToUpdate = {
        name: mock.gymUnitToUpdate.name,
        phone: mock.gymUnitToUpdate.phone,
        email: mock.gymUnitToUpdate.email,
        open_hour: new Date(mock.gymUnitToUpdate.open_hour),
        close_hour: new Date(mock.gymUnitToUpdate.close_hour),
      };

      const response = await gymUnitService.put(1, gymUnitToUpdate);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Gym unit not found.');
    });

    it('retorna uma mensagem de erro ao tentar atualizar uma unidade de academia e falhar', async () => {
      sinon.stub(GymUnit, 'findByPk').throws(new Error('Erro ao retornar unidade de academia'));

      const gymUnitToUpdate = {
        name: mock.gymUnitToUpdate.name,
        phone: mock.gymUnitToUpdate.phone,
        email: mock.gymUnitToUpdate.email,
        open_hour: new Date(mock.gymUnitToUpdate.open_hour),
        close_hour: new Date(mock.gymUnitToUpdate.close_hour),
      };

      const response = await gymUnitService.put(1, gymUnitToUpdate);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar unidade de academia');
    });

    it('é possível deletar uma unidade de academia corretamente', async () => {
      sinon.stub(GymUnit, 'findByPk').resolves(mock.allUnits[0]);
      sinon.stub(GymUnit, 'destroy').resolves();

      const response = await gymUnitService.delete(1);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal('Gym unit deleted.');
    });

    it('retorna uma mensagem de erro ao tentar deletar uma unidade de academia que não existe', async () => {
      sinon.stub(GymUnit, 'findByPk').resolves(null);

      const response = await gymUnitService.delete(1);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Gym unit not found.');
    });

    it('retorna uma mensagem de erro ao tentar deletar uma unidade de academia e falhar', async () => {
      sinon.stub(GymUnit, 'findByPk').throws(new Error('Erro ao retornar unidade de academia'));

      const response = await gymUnitService.delete(1);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar unidade de academia');
    });

    it('é possível atualizar parcialmente uma unidade de academia corretamente', async () => {
      sinon.stub(GymUnit, 'findOne').resolves(mock.allUnits[0]);
      sinon.stub(GymUnit, 'update').resolves();
      sinon.stub(GymUnit, 'findByPk').resolves(mock.updatedGymUnitComplete);

      const response = await gymUnitService.patch(1, mock.gymUnitSimpleUpdate);     

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.updatedGymUnitComplete);
    });

    it('retorna uma mensagem de erro ao tentar atualizar parcialmente uma unidade de academia que não existe', async () => {
      sinon.stub(GymUnit, 'findOne').resolves(null);

      const response = await gymUnitService.patch(1, mock.gymUnitSimpleUpdate);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Gym unit not found.');
    });

    it('retorna uma mensagem de erro ao tentar atualizar parcialmente uma unidade de academia e falhar', async () => {
      sinon.stub(GymUnit, 'findOne').throws(new Error('Erro ao retornar unidade de academia'));

      const response = await gymUnitService.patch(1, mock.gymUnitSimpleUpdate);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar unidade de academia');
    });



  });
});