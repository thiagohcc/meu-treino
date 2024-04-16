import 'mocha';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
const sinon = require('sinon');
import { Request, Response } from 'express';
import container from '../../../container/container.config';

import WorkoutsheetController from '../../../controllers/workoutsheet.controller';
import WorkoutsheetService from '../../..//services/workoutsheet.service';

import mock from './mocks/workoutsheet.mock';

chai.use(sinonChai);
const expect = chai.expect;

describe('=== Workoutsheet_Controller ===', () => {

  describe('Testa a controller Workoutsheet se:', () => {

    afterEach(() => {
      sinon.restore();
    });

    it('retorna todas as fichas corretamente:', async () => {
      const expectResults = { type: 200, message: mock.allWorkoutsheets };
      const service = container.resolve<WorkoutsheetService>('WorkoutsheetService');
      service.getAll = sinon.stub().resolves(expectResults);

      const controller = new WorkoutsheetController(service);

      const req = {} as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (results: any) => {
              expect(code).to.be.equal(expectResults.type);
              expect(results).to.be.equal(expectResults.message);
            }
          }
        }
      } as unknown as Response;

      await controller.getAll(req, res);

      expect(service.getAll).to.have.been.calledOnce;
      expect(service.getAll).to.have.been.calledWith();
    });

    it('retorna mensagem de erro ao buscar todas as fichas:', async () => {
      const service = container.resolve<WorkoutsheetService>('WorkoutsheetService');
      service.getAll = sinon.stub().throws(new Error('Erro ao buscar todas as fichas'));

      const controller = new WorkoutsheetController(service);

      const req = {} as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (results: any) => {
              expect(code).to.be.equal(500);
              expect(results).to.be.equal('Erro ao buscar todas as fichas');
            }
          }
        }
      } as unknown as Response;

      await controller.getAll(req, res);

      expect(service.getAll).to.have.been.calledOnce;
      expect(service.getAll).to.have.been.calledWith();
    });

    it('retorna uma ficha por id corretamente', async () => {
      const expectResults = { type: 200, message: mock.workoutSheetById };
      const service = container.resolve<WorkoutsheetService>('WorkoutsheetService');
      service.getById = sinon.stub().resolves(expectResults);

      const controller = new WorkoutsheetController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (results: any) => {
              expect(code).to.be.equal(expectResults.type);
              expect(results).to.be.equal(expectResults.message);
            }
          }
        }
      } as unknown as Response;

      await controller.getById(req, res);

      expect(service.getById).to.have.been.calledOnce;
      expect(service.getById).to.have.been.calledWith(1);
    });

    it('retorna mensagem de erro ao buscar uma ficha por id', async () => {
      const service = container.resolve<WorkoutsheetService>('WorkoutsheetService');
      service.getById = sinon.stub().throws(new Error('Erro ao buscar a ficha por id'));

      const controller = new WorkoutsheetController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (results: any) => {
              expect(code).to.be.equal(500);
              expect(results).to.be.equal('Erro ao buscar a ficha por id');
            }
          }
        }
      } as unknown as Response;

      await controller.getById(req, res);

      expect(service.getById).to.have.been.calledOnce;
      expect(service.getById).to.have.been.calledWith(1);
    });

    it('retorna todas as fichas de um cliente corretamente', async () => {
      const expectResults = { type: 200, message: mock.workoutsheetsByCustomerId };
      const service = container.resolve<WorkoutsheetService>('WorkoutsheetService');
      service.getByCustomerId = sinon.stub().resolves(expectResults);

      const controller = new WorkoutsheetController(service);

      const req = { params: { customerId: 2 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (results: any) => {
              expect(code).to.be.equal(expectResults.type);
              expect(results).to.be.equal(expectResults.message);
            }
          }
        }
      } as unknown as Response;

      await controller.getByCustomerId(req, res);

      expect(service.getByCustomerId).to.have.been.calledOnce;
      expect(service.getByCustomerId).to.have.been.calledWith(mock.workoutsheetsByCustomerId[0].customer_id);
    });

    it('retorna mensagem de erro ao buscar todas as fichas de um cliente', async () => {
      const service = container.resolve<WorkoutsheetService>('WorkoutsheetService');
      service.getByCustomerId = sinon.stub().throws(new Error('Erro ao buscar todas as fichas de um cliente'));

      const controller = new WorkoutsheetController(service);

      const req = { params: { customerId: 3 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (results: any) => {
              expect(code).to.be.equal(500);
              expect(results).to.be.equal('Erro ao buscar todas as fichas de um cliente');
            }
          }
        }
      } as unknown as Response;

      await controller.getByCustomerId(req, res);

      expect(service.getByCustomerId).to.have.been.calledOnce;
      expect(service.getByCustomerId).to.have.been.calledWith(3);
    });

    it('é possível criar uma ficha corretamente', async () => {
      const expectResults = { type: 201, message: mock.newWorkoutsheet[1] };
      const service = container.resolve<WorkoutsheetService>('WorkoutsheetService');
      service.post = sinon.stub().resolves(expectResults);

      const controller = new WorkoutsheetController(service);

      const req = { body: mock.newWorkoutsheet[0] } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (results: any) => {
              expect(code).to.be.equal(expectResults.type);
              expect(results).to.be.equal(expectResults.message);
            }
          }
        }
      } as unknown as Response;

      await controller.post(req, res);

      expect(service.post).to.have.been.calledOnce;
      expect(service.post).to.have.been.calledWith(mock.newWorkoutsheet[0]);
    });

    it('retorna mensagem de erro ao criar uma ficha', async () => {
      const service = container.resolve<WorkoutsheetService>('WorkoutsheetService');
      service.post = sinon.stub().throws(new Error('Erro ao criar a ficha'));

      const controller = new WorkoutsheetController(service);

      const req = { body: mock.newWorkoutsheet[0] } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (results: any) => {
              expect(code).to.be.equal(500);
              expect(results).to.be.equal('Erro ao criar a ficha');
            }
          }
        }
      } as unknown as Response;

      await controller.post(req, res);

      expect(service.post).to.have.been.calledOnce;
      expect(service.post).to.have.been.calledWith(mock.newWorkoutsheet[0]);
    });

    it('é possível atualizar uma ficha corretamente', async () => {
      const expectResults = { type: 200, message: mock.updateWorkoutsheet[1] };
      const service = container.resolve<WorkoutsheetService>('WorkoutsheetService');
      service.put = sinon.stub().resolves(expectResults);

      const controller = new WorkoutsheetController(service);

      const req = { params: { id: 5 }, body: mock.updateWorkoutsheet[0] } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (results: any) => {
              expect(code).to.be.equal(expectResults.type);
              expect(results).to.be.equal(expectResults.message);
            }
          }
        }
      } as unknown as Response;

      await controller.put(req, res);

      expect(service.put).to.have.been.calledOnce;
      expect(service.put).to.have.been.calledWith(mock.updateWorkoutsheet[1].id, mock.updateWorkoutsheet[0]);
    });

    it('retorna mensagem de erro ao atualizar uma ficha', async () => {
      const service = container.resolve<WorkoutsheetService>('WorkoutsheetService');
      service.put = sinon.stub().throws(new Error('Erro ao atualizar a ficha'));

      const controller = new WorkoutsheetController(service);

      const req = { params: { id: 5 }, body: mock.updateWorkoutsheet[0] } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (results: any) => {
              expect(code).to.be.equal(500);
              expect(results).to.be.equal('Erro ao atualizar a ficha');
            }
          }
        }
      } as unknown as Response;

      await controller.put(req, res);

      expect(service.put).to.have.been.calledOnce;
      expect(service.put).to.have.been.calledWith(5, mock.updateWorkoutsheet[0]);
    });

    it('é possível deletar uma ficha corretamente', async () => {
      const expectResults = { type: 200, message: 'Ficha deletada com sucesso' };
      const service = container.resolve<WorkoutsheetService>('WorkoutsheetService');
      service.delete = sinon.stub().resolves(expectResults);

      const controller = new WorkoutsheetController(service);

      const req = { params: { id: 5 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (results: any) => {
              expect(code).to.be.equal(expectResults.type);
              expect(results).to.be.equal(expectResults.message);
            }
          }
        }
      } as unknown as Response;

      await controller.delete(req, res);

      expect(service.delete).to.have.been.calledOnce;
      expect(service.delete).to.have.been.calledWith(5);
    });

    it('retorna mensagem de erro ao deletar uma ficha', async () => {
      const service = container.resolve<WorkoutsheetService>('WorkoutsheetService');
      service.delete = sinon.stub().throws(new Error('Erro ao deletar a ficha'));

      const controller = new WorkoutsheetController(service);

      const req = { params: { id: 5 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (results: any) => {
              expect(code).to.be.equal(500);
              expect(results).to.be.equal('Erro ao deletar a ficha');
            }
          }
        }
      } as unknown as Response;

      await controller.delete(req, res);

      expect(service.delete).to.have.been.calledOnce;
      expect(service.delete).to.have.been.calledWith(5);
    });

    it('é possível editar pacialmente uma ficha corretamente', async () => {
      const expectResults = { type: 200, message: mock.updatePartialWorkoutsheet[1] };
      const service = container.resolve<WorkoutsheetService>('WorkoutsheetService');
      service.patch = sinon.stub().resolves(expectResults);

      const controller = new WorkoutsheetController(service);
      
      const req = { params: { id: 5 }, body: mock.updatePartialWorkoutsheet[0] } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (results: any) => {
              expect(code).to.be.equal(expectResults.type);
              expect(results).to.be.equal(expectResults.message);
            }
          }
        }
      } as unknown as Response;

      await controller.patch(req, res);

      expect(service.patch).to.have.been.calledOnce;
      expect(service.patch).to.have.been.calledWith(5, mock.updatePartialWorkoutsheet[0].updates);
    });

    it('retorna mensagem de erro ao editar parcialmente uma ficha', async () => {
      const service = container.resolve<WorkoutsheetService>('WorkoutsheetService');
      service.patch = sinon.stub().throws(new Error('Erro ao editar parcialmente a ficha'));

      const controller = new WorkoutsheetController(service);

      const req = { params: { id: 5 }, body: mock.updatePartialWorkoutsheet[0] } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (results: any) => {
              expect(code).to.be.equal(500);
              expect(results).to.be.equal('Erro ao editar parcialmente a ficha');
            }
          }
        }
      } as unknown as Response;

      await controller.patch(req, res);

      expect(service.patch).to.have.been.calledOnce;
      expect(service.patch).to.have.been.calledWith(5, mock.updatePartialWorkoutsheet[0].updates);
    });






  });
});