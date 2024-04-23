import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
const sinon = require('sinon');

chai.use(sinonChai);
const expect = chai.expect;

import WorkoutSheet from '../../../models/Workoutsheet';
import WorkoutSheetService from '../../../services/workoutsheet.service';
import Customer from '../../../models/Customer';

import mock from '../mocks/workoutsheet.mock';

describe('=== WorkoutSheet_Service ===', () => {
  describe('Testa a WorkoutSheet Service se:', () => {

    const workoutSheetService = new WorkoutSheetService();

    afterEach(() => {
      sinon.restore();
    });

    it('retorna todas as fichas de treino corretamente', async () => {
      sinon.stub(WorkoutSheet, 'findAll').resolves(mock.allWorkoutsheets);

      const response = await workoutSheetService.getAll();

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.allWorkoutsheets);
    });

    it('retorna uma mensagem de erro ao tentar retornar todas as fichas de treino', async () => {
      sinon.stub(WorkoutSheet, 'findAll').throws(new Error('Erro ao retornar fichas de treino'));

      const response = await workoutSheetService.getAll();

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar fichas de treino');
    });

    it('retorna uma ficha de treino através de um id', async () => {
      sinon.stub(WorkoutSheet, 'findByPk').resolves(mock.workoutSheetById);

      const response = await workoutSheetService.getById(1);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.workoutSheetById);
    });

    it('retorna uma mensagem de erro ao tentar retornar uma ficha de treino através de um id e falhar', async () => {
      sinon.stub(WorkoutSheet, 'findByPk').throws(new Error('Erro ao retornar ficha de treino'));

      const response = await workoutSheetService.getById(1);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar ficha de treino');
    });

    it('retorna uma mensagem de erro ao tentar retornar uma ficha de treino que não existe', async () => {
      sinon.stub(WorkoutSheet, 'findByPk').resolves(null);

      const response = await workoutSheetService.getById(1);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('workoutsheet not found.');
    });

    it('retorna as fichas de treino através de um id de um cliente', async () => {
      sinon.stub(Customer, 'findOne').resolves(true);
      sinon.stub(WorkoutSheet, 'findAll').resolves(mock.workoutsheetsByCustomerId);

      const response = await workoutSheetService.getByCustomerId(2);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.workoutsheetsByCustomerId);
    });

    it('retorna uma mensagem de erro ao tentar retornar as fichas de treino através de um id de um cliente e falhar', async () => {
      sinon.stub(WorkoutSheet, 'findAll').throws(new Error('Erro ao retornar fichas de treino'));

      const response = await workoutSheetService.getByCustomerId(2);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar fichas de treino');
    });

    it('retorna uma mensagem de erro ao tentar retornar as fichas de treino de um cliente que não existe', async () => {
      sinon.stub(Customer, 'findOne').resolves(false);

      const response = await workoutSheetService.getByCustomerId(2);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('User not exists.');
    });

    it('é possível criar uma ficha de treino', async () => {
      sinon.stub(WorkoutSheet, 'create').resolves(mock.newWorkoutsheet[1]);

      const response = await workoutSheetService.post(mock.newWorkoutsheet[0]);

      expect(response.type).to.be.equal(201);
      expect(response.message).to.be.equal(mock.newWorkoutsheet[1]);
    });

    it('retorna uma mensagem de erro ao tentar criar uma ficha de treino e falhar', async () => {
      sinon.stub(WorkoutSheet, 'create').throws(new Error('Erro ao criar ficha de treino'));

      const response = await workoutSheetService.post(mock.newWorkoutsheet[0]);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao criar ficha de treino');
    });

    it('é possível atualizar uma ficha de treino', async () => {
      sinon.stub(WorkoutSheet, 'findByPk').resolves(mock.workoutSheetById);
      sinon.stub(WorkoutSheet, 'update').resolves(mock.updateWorkoutsheet[1]);

      const response = await workoutSheetService.put(1, mock.updateWorkoutsheet[0]);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.updateWorkoutsheet[1]);
    });

    it('retorna uma mensagem de erro ao tentar atualizar uma ficha de treino e falhar', async () => {
      sinon.stub(WorkoutSheet, 'findByPk').throws(new Error('Erro ao retornar ficha de treino'));

      const response = await workoutSheetService.put(1, mock.updateWorkoutsheet[0]);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar ficha de treino');
    });

    it('retorna uma mensagem de erro ao tentar atualizar uma ficha de treino que não existe', async () => {
      sinon.stub(WorkoutSheet, 'findByPk').resolves(null);

      const response = await workoutSheetService.put(1, mock.updateWorkoutsheet[0]);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('workoutsheet not found.');
    });

    it('é possível deletar uma ficha de treino corretamente', async () => {
      sinon.stub(WorkoutSheet, 'findByPk').resolves(mock.workoutSheetById);
      sinon.stub(WorkoutSheet, 'destroy').resolves();

      const response = await workoutSheetService.delete(1);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal('Workoutsheet deleted.');
    });

    it('retorna uma mensagem de erro ao tentar deletar uma ficha de treino que não existe', async () => {
      sinon.stub(WorkoutSheet, 'findByPk').resolves(null);

      const response = await workoutSheetService.delete(1);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Workoutsheet not found.');
    });

    it('retorna uma mensagem de erro ao tentar deletar uma ficha de treino e falhar', async () => {
      sinon.stub(WorkoutSheet, 'findByPk').throws(new Error('Erro ao retornar ficha de treino'));

      const response = await workoutSheetService.delete(1);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar ficha de treino');
    });

    it('é possível atualizar parcialmente uma ficha de treino corretamente', async () => {
      sinon.stub(WorkoutSheet, 'findByPk').resolves(mock.updateWorkoutsheet[1]);
      sinon.stub(WorkoutSheet, 'update').resolves(mock.updatePartialWorkoutsheet[1]);

      const response = await workoutSheetService.patch(1, mock.updatePartialWorkoutsheet[0]);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.updatePartialWorkoutsheet[1]);
    });

    it('retorna uma mensagem de erro ao tentar atualizar parcialmente uma ficha de treino que não existe', async () => {
      sinon.stub(WorkoutSheet, 'findByPk').resolves(null);

      const response = await workoutSheetService.patch(1, mock.updateWorkoutsheet[0]);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Workoutsheet not found');
    });

    it('retorna uma mensagem de erro ao tentar atualizar parcialmente uma ficha de treino e falhar', async () => {
      sinon.stub(WorkoutSheet, 'findByPk').throws(new Error('Erro ao retornar ficha de treino'));

      const response = await workoutSheetService.patch(1, mock.updateWorkoutsheet[0]);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar ficha de treino');
    });




  });
});