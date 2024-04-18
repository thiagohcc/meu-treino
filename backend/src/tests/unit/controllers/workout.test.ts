import 'mocha';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
const sinon = require('sinon');
import { Request, Response } from 'express';
import container from '../../../container/container.config';

import WorkoutController from '../../../controllers/workout.controller';
import WorkoutService from '../../../services/workout.service';

import mock from '../mocks/workout.mock';

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

    it('retorna uma mensagem de erro ao tentar criar um novo workout', () => {
      const service = container.resolve<WorkoutService>('WorkoutService');
      service.post = sinon.stub().throws(new Error('Erro ao tentar criar um novo workout'));

      const workoutController = new WorkoutController(service);

      const req = { body: mock.newWorkout } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (result: any) => {
              expect(code).to.be.equal(500);
              expect(result).to.be.equal('Erro ao tentar criar um novo workout');
            }
          };
        }
      } as unknown as Response;

      workoutController.post(req, res);

      expect(service.post).to.have.been.calledOnce;
      expect(service.post).to.have.been.calledWith(mock.newWorkout.workout, mock.newWorkout.exerciseId);
    });

    it('é possível atualizar um workout corretamente', async () => {
      const service = container.resolve<WorkoutService>('WorkoutService');
      service.put = sinon.stub().resolves({ type: 200, message: mock.updateWorkout.workoutUpdated });

      const workoutController = new WorkoutController(service);

      const req = { params: { id: 1 }, body: mock.updateWorkout.updateData } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (result: any) => {
              expect(code).to.be.equal(200);
              expect(result).to.be.equal(mock.updateWorkout.workoutUpdated);
            }
          };
        }
      } as unknown as Response;

      await workoutController.put(req, res);

      expect(service.put).to.have.been.calledOnce;
      expect(service.put).to.have.been.calledWith(1, mock.updateWorkout.updateData);
    });

    it('retorna uma mensagem de erro ao tentar atualizar um workout', async () => {
      const service = container.resolve<WorkoutService>('WorkoutService');
      service.put = sinon.stub().throws(new Error('Erro ao tentar atualizar um workout'));

      const workoutController = new WorkoutController(service);

      const req = { params: { id: 1 }, body: mock.updateWorkout.updateData } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (result: any) => {
              expect(code).to.be.equal(500);
              expect(result).to.be.equal('Erro ao tentar atualizar um workout');
            }
          };
        }
      } as unknown as Response;

      await workoutController.put(req, res);

      expect(service.put).to.have.been.calledOnce;
      expect(service.put).to.have.been.calledWith(1, mock.updateWorkout.updateData);
    });

    it('é possível deletar um workout corretamente', async () => {
      const service = container.resolve<WorkoutService>('WorkoutService');
      service.delete = sinon.stub().resolves({ type: 200, message: 'Workout deleted.' });

      const workoutController = new WorkoutController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (result: any) => {
              expect(code).to.be.equal(200);
              expect(result).to.be.equal('Workout deleted.');
            }
          };
        }
      } as unknown as Response;

      await workoutController.delete(req, res);

      expect(service.delete).to.have.been.calledOnce;
      expect(service.delete).to.have.been.calledWith(1);
    });

    it('retorna uma mensagem de erro ao tentar deletar um workout', async () => {
      const service = container.resolve<WorkoutService>('WorkoutService');
      service.delete = sinon.stub().throws(new Error('Erro ao tentar deletar um workout'));

      const workoutController = new WorkoutController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (result: any) => {
              expect(code).to.be.equal(500);
              expect(result).to.be.equal('Erro ao tentar deletar um workout');
            }
          };
        }
      } as unknown as Response;

      await workoutController.delete(req, res);

      expect(service.delete).to.have.been.calledOnce;
      expect(service.delete).to.have.been.calledWith(1);
    });

    it('é possível atualizar parcialmente um workout corretamente', async () => {
      const service = container.resolve<WorkoutService>('WorkoutService');
      service.patch = sinon.stub().resolves({ type: 200, message: mock.workoutPartialUpdate });

      const workoutController = new WorkoutController(service);
     

      const req = { params: { id: 1 }, body: mock.workoutPartialUpdateData } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (result: any) => {
              expect(code).to.be.equal(200);
              expect(result).to.be.equal(mock.workoutPartialUpdate);
            }
          };
        }
      } as unknown as Response;

      await workoutController.patch(req, res);

      expect(service.patch).to.have.been.calledOnce;
      expect(service.patch).to.have.been.calledWith(1, mock.workoutPartialUpdateData.updates);
    });

    it('retorna uma mensagem de erro ao tentar atualizar parcialmente um workout', async () => {
      const service = container.resolve<WorkoutService>('WorkoutService');
      service.patch = sinon.stub().throws(new Error('Erro ao tentar atualizar parcialmente um workout'));

      const workoutController = new WorkoutController(service);

      const req = { params: { id: 1 }, body: mock.workoutPartialUpdateData } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (result: any) => {
              expect(code).to.be.equal(500);
              expect(result).to.be.equal('Erro ao tentar atualizar parcialmente um workout');
            }
          };
        }
      } as unknown as Response;

      await workoutController.patch(req, res);

      expect(service.patch).to.have.been.calledOnce;
      expect(service.patch).to.have.been.calledWith(1, mock.workoutPartialUpdateData.updates);
    });



  });
});