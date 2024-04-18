import 'mocha';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
const sinon = require('sinon');
import { Request, Response } from 'express';
import container from '../../../container/container.config';

import ExerciseController from '../../../controllers/exercise.controller';
import ExerciseService from '../../../services/exercise.service';

import mock from '../mocks/exercise.mock';

chai.use(sinonChai);
const expect = chai.expect;

describe('=== Exercise_Controller ===', () => {

  describe('Testa a controller Exercise se:', () => {

    it('retorna todos os exercícios corretamente', async () => {
      const expectResults = { type: 200, message: mock.allExercises };

      const service = container.resolve<ExerciseService>('ExerciseService');
      service.getAll = sinon.stub().resolves(expectResults);

      const exerciseController = new ExerciseController(service);

      const req = {} as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
              expect(data).to.be.deep.equal(mock.allExercises);
            }
          }
        }
      } as unknown as Response;

      await exerciseController.getAll(req, res);

      expect(service.getAll).to.have.been.calledOnce;
      expect(service.getAll).to.have.been.calledWithExactly();
    });

    it('retorna uma menssaem de erro ao tentar retornar todos os exercícios', async () => {
      const service = container.resolve<ExerciseService>('ExerciseService');
      service.getAll = sinon.stub().throws(new Error('Erro ao tentar retornar todos os exercícios'));

      const exerciseController = new ExerciseController(service);

      const req = {} as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao tentar retornar todos os exercícios');
            }
          }
        }
      } as unknown as Response;

      await exerciseController.getAll(req, res);

      expect(service.getAll).to.have.been.calledOnce;
      expect(service.getAll).to.have.been.calledWithExactly();
    });

    it('retorna um exercício corretamente pelo id', async () => {
      const expectResults = { type: 200, message: mock.oneExercise };

      const service = container.resolve<ExerciseService>('ExerciseService');
      service.getById = sinon.stub().resolves(expectResults);

      const exerciseController = new ExerciseController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
              expect(data).to.be.deep.equal(mock.oneExercise);
            }
          }
        }
      } as unknown as Response;

      await exerciseController.getById(req, res);

      expect(service.getById).to.have.been.calledOnce;
      expect(service.getById).to.have.been.calledWithExactly(1);
    });

    it('retorna uma mensagem de erro ao tentar retornar um exercício pelo id', async () => {
      const service = container.resolve<ExerciseService>('ExerciseService');
      service.getById = sinon.stub().throws(new Error('Erro ao tentar retornar um exercício pelo id'));

      const exerciseController = new ExerciseController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao tentar retornar um exercício pelo id');
            }
          }
        }
      } as unknown as Response;

      await exerciseController.getById(req, res);

      expect(service.getById).to.have.been.calledOnce;
      expect(service.getById).to.have.been.calledWithExactly(1);
    });

    it('retorna um exercício corretamente pelo nome', async () => {
      const expectResults = { type: 200, message: mock.oneExercise };

      const service = container.resolve<ExerciseService>('ExerciseService');
      service.getByName = sinon.stub().resolves(expectResults);

      const exerciseController = new ExerciseController(service);

      const req = { query: { name: 'Flexão de Braço' } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
              expect(data).to.be.deep.equal(mock.oneExercise);
            }
          }
        }
      } as unknown as Response;

      await exerciseController.getByName(req, res);

      expect(service.getByName).to.have.been.calledOnce;
      expect(service.getByName).to.have.been.calledWithExactly('Flexão de Braço');
    });

    it('retorna uma mensagem de erro ao tentar retornar um exercício pelo nome', async () => {
      const service = container.resolve<ExerciseService>('ExerciseService');
      service.getByName = sinon.stub().throws(new Error('Erro ao tentar retornar um exercício pelo nome'));

      const exerciseController = new ExerciseController(service);

      const req = { query: { name: 'Flexão de Braço' } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao tentar retornar um exercício pelo nome');
            }
          }
        }
      } as unknown as Response;

      await exerciseController.getByName(req, res);

      expect(service.getByName).to.have.been.calledOnce;
      expect(service.getByName).to.have.been.calledWithExactly('Flexão de Braço');
    });

    it('retorna um exercício corretamente ao criar um novo exercício', async () => {
      const expectResults = { type: 201, message: mock.oneExercise };

      const service = container.resolve<ExerciseService>('ExerciseService');
      service.post = sinon.stub().resolves(expectResults);

      const exerciseController = new ExerciseController(service);

      const req = { body: mock.newExercise } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(201);
              expect(data).to.be.deep.equal(mock.oneExercise);
            }
          }
        }
      } as unknown as Response;

      await exerciseController.post(req, res);

      expect(service.post).to.have.been.calledOnce;
      expect(service.post).to.have.been.calledWithExactly(mock.newExercise);
    });

    it('retorna uma mensagem de erro ao tentar criar um novo exercício', async () => {
      const service = container.resolve<ExerciseService>('ExerciseService');
      service.post = sinon.stub().throws(new Error('Erro ao tentar criar um novo exercício'));

      const exerciseController = new ExerciseController(service);

      const req = { body: mock.newExercise } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao tentar criar um novo exercício');
            }
          }
        }
      } as unknown as Response;

      await exerciseController.post(req, res);

      expect(service.post).to.have.been.calledOnce;
      expect(service.post).to.have.been.calledWithExactly(mock.newExercise);
    });

    it('retorna um exercício corretamente ao atualizar um exercício', async () => {
      const expectResults = { type: 200, message: mock.exerciseUpdated };

      const service = container.resolve<ExerciseService>('ExerciseService');
      service.put = sinon.stub().resolves(expectResults);

      const exerciseController = new ExerciseController(service);

      const req = { params: { id: 33 }, body: mock.exerciseToUpdate } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
              expect(data).to.be.deep.equal(mock.exerciseUpdated);
            }
          }
        }
      } as unknown as Response;

      await exerciseController.put(req, res);

      expect(service.put).to.have.been.calledOnce;
      expect(service.put).to.have.been.calledWithExactly(33, mock.exerciseToUpdate);
    });

    it('retorna uma mensagem de erro ao tentar atualizar um exercício', async () => {
      const service = container.resolve<ExerciseService>('ExerciseService');
      service.put = sinon.stub().throws(new Error('Erro ao tentar atualizar um exercício'));

      const exerciseController = new ExerciseController(service);

      const req = { params: { id: 33 }, body: mock.exerciseToUpdate } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao tentar atualizar um exercício');
            }
          }
        }
      } as unknown as Response;

      await exerciseController.put(req, res);

      expect(service.put).to.have.been.calledOnce;
      expect(service.put).to.have.been.calledWithExactly(33, mock.exerciseToUpdate);
    });

    it('é possível deletar um exercício', async () => {
      const expectResults = { type: 200, message: 'Exercise deleted.' };

      const service = container.resolve<ExerciseService>('ExerciseService');
      service.delete = sinon.stub().resolves(expectResults);

      const exerciseController = new ExerciseController(service);

      const req = { params: { id: 33 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
              expect(data).to.be.equal('Exercise deleted.');
            }
          }
        }
      } as unknown as Response;

      await exerciseController.delete(req, res);

      expect(service.delete).to.have.been.calledOnce;
      expect(service.delete).to.have.been.calledWithExactly(33);
    });

    it('retorna uma mensagem de erro ao tentar deletar um exercício', async () => {
      const service = container.resolve<ExerciseService>('ExerciseService');
      service.delete = sinon.stub().throws(new Error('Erro ao tentar deletar um exercício'));

      const exerciseController = new ExerciseController(service);

      const req = { params: { id: 33 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao tentar deletar um exercício');
            }
          }
        }
      } as unknown as Response;

      await exerciseController.delete(req, res);

      expect(service.delete).to.have.been.calledOnce;
      expect(service.delete).to.have.been.calledWithExactly(33);
    });

    it('é possível atualizar parcialmente um exercício', async () => {
      const expectResults = { type: 200, message: mock.exerciseUpdated };

      const service = container.resolve<ExerciseService>('ExerciseService');
      service.patch = sinon.stub().resolves(expectResults);

      const exerciseController = new ExerciseController(service);

      const req = { params: { id: 33 }, body: mock.dataToUpdateExercise } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
              expect(data).to.be.deep.equal(mock.exerciseUpdated);
            }
          }
        }
      } as unknown as Response;

      await exerciseController.patch(req, res);

      expect(service.patch).to.have.been.calledOnce;
      expect(service.patch).to.have.been.calledWithExactly(33, mock.dataToUpdateExercise.updates);
    });

    it('retorna uma mensagem de erro ao tentar atualizar parcialmente um exercício', async () => {
      const service = container.resolve<ExerciseService>('ExerciseService');
      service.patch = sinon.stub().throws(new Error('Erro ao tentar atualizar parcialmente um exercício'));

      const exerciseController = new ExerciseController(service);

      const req = { params: { id: 33 }, body: mock.dataToUpdateExercise } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao tentar atualizar parcialmente um exercício');
            }
          }
        }
      } as unknown as Response;

      await exerciseController.patch(req, res);

      expect(service.patch).to.have.been.calledOnce;
      expect(service.patch).to.have.been.calledWithExactly(33, mock.dataToUpdateExercise.updates);
    });



  });

});