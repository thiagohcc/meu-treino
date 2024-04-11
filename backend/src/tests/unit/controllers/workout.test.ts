import 'mocha';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
const sinon = require('sinon');
import { Request, Response } from 'express';
import container from '../../../container/container.config';

import WorkoutController from '../../../controllers/workout.controller';
import WorkoutService from '../../../services/workout.service';

import mock from './mocks/workout.mock';

chai.use(sinonChai);
const expect = chai.expect;

describe('=== Workout_Controller ===', () => {

  describe('Testa a controller Workout se:', () => {

    afterEach(() => {
      sinon.restore();
    });

    it('retorna corretamente todos os workouts', async () => {
      const expectResults = { type: 200, message: mock.allWorkouts };
      const service = container.resolve<WorkoutService>('WorkoutService');
      service.getAll = sinon.stub().resolves(expectResults);

      const workoutController = new WorkoutController(service);

      const req = {} as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (result: any) => {
              expect(code).to.be.equal(200);
              expect(result).to.be.equal(expectResults.message);
            }
          };
        }
      } as unknown as Response;

      await workoutController.getAll(req, res);

      expect(service.getAll).to.have.been.calledOnce;
      expect(service.getAll).to.have.been.calledWith();
    });

    it('retorna uma mensagem de erro ao tentar retornar todos os workouts', async () => {
      const service = container.resolve<WorkoutService>('WorkoutService');
      service.getAll = sinon.stub().throws(new Error('Erro ao tentar retornar todos os workouts'));

      const workoutController = new WorkoutController(service);

      const req = {} as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (result: any) => {
              expect(code).to.be.equal(500);
              expect(result).to.be.equal('Erro ao tentar retornar todos os workouts');
            }
          };
        }
      } as unknown as Response;

      await workoutController.getAll(req, res);

      expect(service.getAll).to.have.been.calledOnce;
      expect(service.getAll).to.have.been.calledWith();
    });

    it('retorna corretamente um workout pelo id', async () => {
      const expectResults = { type: 200, message: mock.oneWorkout };
      const service = container.resolve<WorkoutService>('WorkoutService');
      service.getById = sinon.stub().resolves(expectResults);

      const workoutController = new WorkoutController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (result: any) => {
              expect(code).to.be.equal(200);
              expect(result).to.be.equal(expectResults.message);
            }
          };
        }
      } as unknown as Response;

      await workoutController.getById(req, res);

      expect(service.getById).to.have.been.calledOnce;
      expect(service.getById).to.have.been.calledWith(1);
    });

    it('retorna uma mensagem de erro ao tentar retornar um workout pelo id', async () => {
      const service = container.resolve<WorkoutService>('WorkoutService');
      service.getById = sinon.stub().throws(new Error('Erro ao tentar retornar um workout pelo id'));

      const workoutController = new WorkoutController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (result: any) => {
              expect(code).to.be.equal(500);
              expect(result).to.be.equal('Erro ao tentar retornar um workout pelo id');
            }
          };
        }
      } as unknown as Response;

      await workoutController.getById(req, res);

      expect(service.getById).to.have.been.calledOnce;
      expect(service.getById).to.have.been.calledWith(1);
    });

    it('retorna corretamente todos os workouts de uma workoutsheet pelo id', async () => {
      const expectResults = { type: 200, message: mock.allWorkouts };
      const service = container.resolve<WorkoutService>('WorkoutService');
      service.getByWorkoutsheetId = sinon.stub().resolves(expectResults);

      const workoutController = new WorkoutController(service);

      const req = { params: { workoutsheetId: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (result: any) => {
              expect(code).to.be.equal(200);
              expect(result).to.be.equal(expectResults.message);
            }
          };
        }
      } as unknown as Response;

      await workoutController.getByWorkoutsheetId(req, res);

      expect(service.getByWorkoutsheetId).to.have.been.calledOnce;
      expect(service.getByWorkoutsheetId).to.have.been.calledWith(1);
    });

    it('retorna uma mensagem de erro ao tentar retornar todos os workouts de uma workoutsheet pelo id', async () => {
      const service = container.resolve<WorkoutService>('WorkoutService');
      service.getByWorkoutsheetId = sinon.stub().throws(new Error('Erro ao tentar retornar todos os workouts de uma workoutsheet pelo id'));

      const workoutController = new WorkoutController(service);

      const req = { params: { workoutsheetId: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (result: any) => {
              expect(code).to.be.equal(500);
              expect(result).to.be.equal('Erro ao tentar retornar todos os workouts de uma workoutsheet pelo id');
            }
          };
        }
      } as unknown as Response;

      await workoutController.getByWorkoutsheetId(req, res);

      expect(service.getByWorkoutsheetId).to.have.been.calledOnce;
      expect(service.getByWorkoutsheetId).to.have.been.calledWith(1);
    });

    it('é possível criar um novo workout corretamente', () => {
      const expectResults = { type: 201, message: mock.returnsNewWorkout };
      const service = container.resolve<WorkoutService>('WorkoutService');
      service.post = sinon.stub().resolves(expectResults);

      const workoutController = new WorkoutController(service);

      const req = { body: mock.newWorkout } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (result: any) => {
              expect(code).to.be.equal(201);
              expect(result).to.be.equal(expectResults.message);
            }
          };
        }
      } as unknown as Response;

      workoutController.post(req, res);

      expect(service.post).to.have.been.calledOnce;
      expect(service.post).to.have.been.calledWith(mock.newWorkout.workout, mock.newWorkout.exerciseId);
    });



  });
});