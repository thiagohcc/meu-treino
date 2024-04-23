import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
const sinon = require('sinon');

chai.use(sinonChai);
const expect = chai.expect;

import Workout from '../../../models/Workout';
import WorkoutService from '../../../services/workout.service';

import Exercise from '../../../models/Exercise';
import WorkoutExercise from '../../../models/WorkoutExercise';

import mock from '../mocks/workout.mock';

describe('=== Workout_Service ===', () => {
  describe('Testa a Workout Service se:', () => {

    const workoutService = new WorkoutService();

    afterEach(() => {
      sinon.restore();
    });

    it('retorna todos os treinos corretamente', async () => {
      sinon.stub(Workout, 'findAll').resolves(mock.allWorkouts);

      const response = await workoutService.getAll();

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.allWorkouts);
    });

    it('retorna uma mensagem de erro ao tentar retornar todos os treinos', async () => {
      sinon.stub(Workout, 'findAll').throws(new Error('Erro ao retornar treinos'));

      const response = await workoutService.getAll();

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar treinos');
    });

    it('retorna um treino através de um id', async () => {
      sinon.stub(Workout, 'findByPk').resolves(mock.oneWorkout);

      const response = await workoutService.getById(1);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.oneWorkout);
    });

    it('retorna uma mensagem de erro ao tentar retornar um treino através de um id e falhar', async () => {
      sinon.stub(Workout, 'findByPk').throws(new Error('Erro ao retornar treino'));

      const response = await workoutService.getById(1);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar treino');
    });

    it('retorna uma mensagem de erro ao tentar retornar um treino que não existe', async () => {
      sinon.stub(Workout, 'findByPk').resolves(null);

      const response = await workoutService.getById(1);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Workout not found.');
    });

    it('retorna treinos através de um id de ficha de treino', async () => {
      sinon.stub(Workout, 'findAll').resolves(mock.allWorkouts);

      const response = await workoutService.getByWorkoutsheetId(1);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.allWorkouts);
    });

    it('retorna uma mensagem de erro ao tentar retornar treinos através de um id de ficha de treino e falhar', async () => {
      sinon.stub(Workout, 'findAll').throws(new Error('Erro ao retornar treinos'));

      const response = await workoutService.getByWorkoutsheetId(1);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao retornar treinos');
    });

    it('retorna uma mensagem de erro ao tentar retornar treinos de uma ficha de treino que não existe', async () => {
      sinon.stub(Workout, 'findAll').resolves(null);

      const response = await workoutService.getByWorkoutsheetId(1);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Workouts not found.');
    });

    it('cria um treino corretamente', async () => {
      sinon.stub(Exercise, 'findByPk').resolves(mock.exercise);
      sinon.stub(Workout, 'create').resolves(mock.oneWorkout);
      sinon.stub(WorkoutExercise, 'create').resolves({
        workoutId: mock.oneWorkout.id,
        exerciseId: mock.exercise.id,
      });
      sinon.stub(Workout, 'findByPk').resolves(mock.returnsNewWorkout);

      const response = await workoutService.post(mock.newWorkout.workout, 5);

    });

    it('retorna uma mensagem de erro ao tentar criar um treino e falhar', async () => {
      sinon.stub(Exercise, 'findByPk').resolves(mock.exercise);
      sinon.stub(Workout, 'create').throws(new Error('Erro ao criar treino'));

      const response = await workoutService.post(mock.newWorkout.workout, 5);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao criar treino');
    });

    it('retorna uma mensagem de erro ao tentar criar um treino com um exercício que não existe', async () => {
      sinon.stub(Exercise, 'findByPk').resolves(null);

      const response = await workoutService.post(mock.newWorkout.workout, 5);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Exercise not found.');
    });

    it('é possível editar um treino corretamente.', async () => {
      sinon.stub(Workout, 'findByPk').resolves(mock.oneWorkout);
      sinon.stub(Workout, 'update').resolves(mock.updateWorkout.workoutUpdated);

      const response = await workoutService.put(1, mock.updateWorkout.updateData);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.updateWorkout.workoutUpdated);
    });

    it('retorna uma mensagem de erro ao tentar editar um treino e falhar', async () => {
      sinon.stub(Workout, 'findByPk').resolves(mock.oneWorkout);
      sinon.stub(Workout, 'update').throws(new Error('Erro ao editar treino'));

      const response = await workoutService.put(1, mock.updateWorkout.updateData);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao editar treino');
    });

    it('retorna uma mensagem de erro ao tentar editar um treino que não existe', async () => {
      sinon.stub(Workout, 'findByPk').resolves(null);

      const response = await workoutService.put(1, mock.updateWorkout.updateData);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Workout not found.');
    });

    it('é possível deletar um treino corretamente.', async () => {
      sinon.stub(Workout, 'findByPk').resolves(mock.oneWorkout);
      sinon.stub(Workout, 'destroy').resolves();

      const response = await workoutService.delete(1);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal('Workout deleted.');
    });

    it('retorna uma mensagem de erro ao tentar deletar um treino e falhar', async () => {
      sinon.stub(Workout, 'findByPk').resolves(mock.oneWorkout);
      sinon.stub(Workout, 'destroy').throws(new Error('Erro ao deletar treino'));

      const response = await workoutService.delete(1);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao deletar treino');
    });

    it('retorna uma mensagem de erro ao tentar deletar um treino que não existe', async () => {
      sinon.stub(Workout, 'findByPk').resolves(null);

      const response = await workoutService.delete(1);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Workout not found.');
    });

    it('é possível editar parcialmente um treino corretamente.', async () => {
      sinon.stub(Workout, 'findByPk').resolves(mock.oneWorkout);
      sinon.stub(Workout, 'update').resolves(mock.workoutPartialUpdateData);

      const response = await workoutService.patch(1, mock.workoutPartialUpdateData.updates);

      expect(response.type).to.be.equal(200);
      expect(response.message).to.be.equal(mock.workoutPartialUpdateData);
    });

    it('retorna uma mensagem de erro ao tentar editar parcialmente um treino e falhar', async () => {
      sinon.stub(Workout, 'findByPk').resolves(mock.oneWorkout);
      sinon.stub(Workout, 'update').throws(new Error('Erro ao editar treino'));

      const response = await workoutService.patch(1, mock.workoutPartialUpdateData.updates);

      expect(response.type).to.be.equal(500);
      expect(response.message).to.be.equal('Erro ao editar treino');
    });

    it('retorna uma mensagem de erro ao tentar editar parcialmente um treino que não existe', async () => {
      sinon.stub(Workout, 'findByPk').resolves(null);

      const response = await workoutService.patch(1, mock.workoutPartialUpdateData.updates);

      expect(response.type).to.be.equal(404);
      expect(response.message).to.be.equal('Workout not found.');
    });







  });
});