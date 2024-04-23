import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
const sinon = require('sinon');

import Exercise from '../../../models/Exercise';
import ExerciseService from '../../../services/exercise.service';

import mock from '../mocks/exercise.mock';

chai.use(sinonChai);
const expect = chai.expect;

describe('=== Exercise_Service ===', () => {
  describe('Testa a Exercise Service se:', () => {

    const exerciseService = new ExerciseService();

    afterEach(() => {
      sinon.restore();
    });

    it('retorna todos os exercícios corretamente', async () => {
      sinon.stub(Exercise, 'findAll').resolves(mock.allExercises);

      const response = await exerciseService.getAll();

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.allExercises);
    });

    it('retorna uma mensagem de erro ao tentar retornar todos os exercícios', async () => {
      sinon.stub(Exercise, 'findAll').throws(new Error('Erro ao retornar exercícios'));

      const response = await exerciseService.getAll();

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar exercícios');
    });

    it('retorna um exercício através de um id', async () => {
      sinon.stub(Exercise, 'findByPk').resolves(mock.oneExercise);

      const response = await exerciseService.getById(1);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.oneExercise);
    });

    it('retorna uma mensagem de erro ao tentar retornar um exercício através de um id e falhar', async () => {
      sinon.stub(Exercise, 'findByPk').throws(new Error('Erro ao retornar exercício'));

      const response = await exerciseService.getById(1);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar exercício');
    });

    it('retorna uma mensagem de erro ao tentar retornar um exercício que não existe', async () => {
      sinon.stub(Exercise, 'findByPk').resolves(null);

      const response = await exerciseService.getById(1);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Exercise not found.');
    });

    it('retorna um exercício através de um nome', async () => {
      sinon.stub(Exercise, 'findOne').resolves(mock.oneExercise);

      const response = await exerciseService.getByName('Flexão de Braço');

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.oneExercise);
    });

    it('retorna uma mensagem de erro ao tentar retornar um exercício através de um nome e falhar', async () => {
      sinon.stub(Exercise, 'findOne').throws(new Error('Erro ao retornar exercício'));

      const response = await exerciseService.getByName('Flexão de Braço');

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar exercício');
    });

    it('retorna uma mensagem de erro ao tentar retornar um exercício que não existe', async () => {
      sinon.stub(Exercise, 'findOne').resolves(null);

      const response = await exerciseService.getByName('Flexão de Braço');

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Exercise not found.');
    });

    it('é possível criar um novo exercício corretamente', async () => {
      sinon.stub(Exercise, 'create').resolves(mock.oneExercise);

      const response = await exerciseService.post(mock.newExercise);

      expect(response.type).to.be.equal(201);
      expect(response.message).to.be.equal(mock.oneExercise);
    });

    it('retorna uma mensagem de erro ao tentar criar um novo exercício e falhar', async () => {
      sinon.stub(Exercise, 'create').throws(new Error('Erro ao criar exercício'));

      const response = await exerciseService.post(mock.newExercise);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao criar exercício');
    });

    it('é possível atualizar um exercício corretamente', async () => {
      sinon.stub(Exercise, 'findByPk').resolves(mock.exerciseOutdated);
      sinon.stub(Exercise, 'update').resolves(mock.exerciseUpdated);

      const response = await exerciseService.put(33, mock.exerciseToUpdate);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.exerciseUpdated);
    });

    it('retorna uma mensagem de erro ao tentar atualizar um exercício que não existe', async () => {
      sinon.stub(Exercise, 'findByPk').resolves(null);

      const response = await exerciseService.put(1, mock.exerciseToUpdate);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Exercise not found.');
    });

    it('retorna uma mensagem de erro ao tentar atualizar um exercício e falhar', async () => {
      sinon.stub(Exercise, 'findByPk').throws(new Error('Erro ao retornar exercício'));

      const response = await exerciseService.put(1, mock.exerciseToUpdate);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar exercício');
    });

    it('é possível deletar um exercício corretamente', async () => {
      sinon.stub(Exercise, 'findByPk').resolves(mock.oneExercise);
      sinon.stub(Exercise, 'destroy').resolves();

      const response = await exerciseService.delete(1);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal('Exercise deleted.');
    });

    it('retorna uma mensagem de erro ao tentar deletar um exercício que não existe', async () => {
      sinon.stub(Exercise, 'findByPk').resolves(null);

      const response = await exerciseService.delete(1);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Exercise not found.');
    });

    it('retorna uma mensagem de erro ao tentar deletar um exercício e falhar', async () => {
      sinon.stub(Exercise, 'findByPk').throws(new Error('Erro ao retornar exercício'));

      const response = await exerciseService.delete(1);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar exercício');
    });

    it('retorna mensagem de erro corretamente se o exercício estiver restrições de Constrains para ser deletado', async () => {
      sinon.stub(Exercise, 'findByPk').resolves(mock.oneExercise);

      const error = new Error();
      error.name = 'SequelizeForeignKeyConstraintError';
      sinon.stub(Exercise, 'destroy').throws(error);

      const response = await exerciseService.delete(1);

      expect(response.type).to.be.equal(400);
      expect(response.message).to.be.equal('Cannot delete exercise due to a foreign key constraint.');
    });

    it('é possível editar um exercício parcialmente', async () => {
      sinon.stub(Exercise, 'findByPk').resolves(mock.oneExercise);
      sinon.stub(Exercise, 'update').resolves(mock.exerciseUpdated);

      const response = await exerciseService.patch(1, mock.dataToUpdateExercise.updates);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.oneExercise);
    });

    it('retorna uma mensagem de erro ao tentar editar um exercício parcialmente que não existe', async () => {
      sinon.stub(Exercise, 'findByPk').resolves(null);

      const response = await exerciseService.patch(1, mock.dataToUpdateExercise.updates);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Exercise not found.');
    });

    it('retorna uma mensagem de erro ao tentar editar um exercício parcialmente e falhar', async () => {
      sinon.stub(Exercise, 'findByPk').throws(new Error('Erro ao retornar exercício'));

      const response = await exerciseService.patch(1, mock.dataToUpdateExercise.updates);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar exercício');
    });
  






  });
});