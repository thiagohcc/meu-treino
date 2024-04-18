import 'mocha';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
const sinon = require('sinon');
import { Request, Response } from 'express';
import container from '../../../container/container.config';

import GymUnitController from '../../../controllers/gymUnit.controller';
import GymUnitService from '../../../services/gymUnit.service';

import mock from '../mocks/gymUnit.mock';

chai.use(sinonChai);
const expect = chai.expect;

describe('=== GymUnit Controller ===', () => {

  describe('Testa a controller GymUnit se:', () => {

    afterEach(() => {
      sinon.restore();
    });

    it('retorna todas as unidades de academia corretamente', async () => {
      const expectResults = { type: 200, message: mock.allUnits };
      const service = container.resolve<GymUnitService>('GymUnitService');
      service.getAll = sinon.stub().resolves(expectResults);

      const gymUnitController = new GymUnitController(service);

      const req = {} as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (response: any) => {
              expect(code).to.be.equal(200);
              expect(response).to.be.deep.equal(mock.allUnits);
            }
          };
        }
      } as unknown as Response;

      await gymUnitController.getAll(req, res);

      expect(service.getAll).to.have.been.calledOnce;
      expect(service.getAll).to.have.been.calledWith();
    });

    it('retorna mensagem de erro corretamente ao buscar todas as unidades de academia', async () => {
      const service = container.resolve<GymUnitService>('GymUnitService');
      service.getAll = sinon.stub().throws(new Error("Internal server error."));

      const gymUnitController = new GymUnitController(service);

      const req = {} as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (response: any) => {
              expect(code).to.be.equal(500);
              expect(response).to.be.equal("Internal server error.");
            }
          };
        }
      } as unknown as Response;

      await gymUnitController.getAll(req, res);

      expect(service.getAll).to.have.been.calledOnce;
      expect(service.getAll).to.have.been.calledWith();
    });

    it('retorna uma unidade de academia corretamente pelo id', async () => {
      const expectResults = { type: 200, message: mock.allUnits[0] };
      const service = container.resolve<GymUnitService>('GymUnitService');
      service.getById = sinon.stub().resolves(expectResults);

      const gymUnitController = new GymUnitController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (response: any) => {
              expect(code).to.be.equal(200);
              expect(response).to.be.deep.equal(mock.allUnits[0]);
            }
          };
        }
      } as unknown as Response;

      await gymUnitController.getById(req, res);

      expect(service.getById).to.have.been.calledOnce;
      expect(service.getById).to.have.been.calledWith(1);
    });

    it('retorna mensagem de erro corretamente ao buscar uma unidade de academia pelo id', async () => {
      const service = container.resolve<GymUnitService>('GymUnitService');
      service.getById = sinon.stub().throws(new Error("Internal server error."));

      const gymUnitController = new GymUnitController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (response: any) => {
              expect(code).to.be.equal(500);
              expect(response).to.be.equal("Internal server error.");
            }
          };
        }
      } as unknown as Response;

      await gymUnitController.getById(req, res);

      expect(service.getById).to.have.been.calledOnce;
      expect(service.getById).to.have.been.calledWith(1);
    });

    it('cadastra uma unidade de academia corretamente sem endereço', async () => {
      const expectResults = { type: 201, message: mock.returnNewUnitSimple };
      const service = container.resolve<GymUnitService>('GymUnitService');
      service.post = sinon.stub().resolves(expectResults);

      const gymUnitController = new GymUnitController(service);

      const req = { body: { gymUnit: mock.newUnitSimple } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (response: any) => {
              expect(code).to.be.equal(201);
              expect(response).to.be.deep.equal(mock.returnNewUnitSimple);
            }
          };
        }
      } as unknown as Response;

      await gymUnitController.post(req, res);

      expect(service.post).to.have.been.calledOnce;
      expect(service.post).to.have.been.calledWith(mock.newUnitSimple, undefined);
    });

    it('retorna mensagem de erro corretamente ao buscar uma unidade de academia pelo id', async () => {
      const service = container.resolve<GymUnitService>('GymUnitService');
      service.getById = sinon.stub().throws(new Error("Internal server error."));

      const gymUnitController = new GymUnitController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (response: any) => {
              expect(code).to.be.equal(500);
              expect(response).to.be.equal("Internal server error.");
            }
          };
        }
      } as unknown as Response;

      await gymUnitController.getById(req, res);

      expect(service.getById).to.have.been.calledOnce;
      expect(service.getById).to.have.been.calledWith(1);
    });

    it('cadastra uma unidade de academia com endereço corretamente', async () => {
      const expectResults = { type: 201, message: mock.allUnits[0] };
      const service = container.resolve<GymUnitService>('GymUnitService');
      service.post = sinon.stub().resolves(expectResults);

      const gymUnitController = new GymUnitController(service);

      const req = { body: mock.newUnitComplete } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (response: any) => {
              expect(code).to.be.equal(201);
              expect(response).to.be.deep.equal(mock.allUnits[0]);
            }
          };
        }
      } as unknown as Response;

      await gymUnitController.post(req, res);

      expect(service.post).to.have.been.calledOnce;
      expect(service.post).to.have.been.calledWith(mock.newUnitComplete.gymUnit, mock.newUnitComplete.address);
    });

    it('retorna mensagem de erro corretamente ao cadastrar uma unidade de academia', async () => {
      const service = container.resolve<GymUnitService>('GymUnitService');
      service.post = sinon.stub().throws(new Error("Internal server error."));

      const gymUnitController = new GymUnitController(service);

      const req = { body: mock.newUnitComplete } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (response: any) => {
              expect(code).to.be.equal(500);
              expect(response).to.be.equal("Internal server error.");
            }
          };
        }
      } as unknown as Response;

      await gymUnitController.post(req, res);

      expect(service.post).to.have.been.calledOnce;
      expect(service.post).to.have.been.calledWith(mock.newUnitComplete.gymUnit, mock.newUnitComplete.address);
    });

    it('atualiza uma unidade de academia corretamente', async () => {
      const expectResults = { type: 200, message: mock.updatedGymUnit };
      const service = container.resolve<GymUnitService>('GymUnitService');
      service.put = sinon.stub().resolves(expectResults);

      const gymUnitController = new GymUnitController(service);

      const req = { params: { id: 1 }, body: mock.gymUnitToUpdate } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (response: any) => {
              expect(code).to.be.equal(200);
              expect(response).to.be.deep.equal(mock.updatedGymUnit);
            }
          };
        }
      } as unknown as Response;

      await gymUnitController.put(req, res);

      expect(service.put).to.have.been.calledOnce;
      expect(service.put).to.have.been.calledWith(1, mock.gymUnitToUpdate);
    });

    it('retorna mensagem de erro corretamente ao atualizar uma unidade de academia', async () => {
      const service = container.resolve<GymUnitService>('GymUnitService');
      service.put = sinon.stub().throws(new Error("Internal server error."));

      const gymUnitController = new GymUnitController(service);

      const req = { params: { id: 1 }, body: mock.gymUnitToUpdate } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (response: any) => {
              expect(code).to.be.equal(500);
              expect(response).to.be.equal("Internal server error.");
            }
          };
        }
      } as unknown as Response;

      await gymUnitController.put(req, res);

      expect(service.put).to.have.been.calledOnce;
      expect(service.put).to.have.been.calledWith(1, mock.gymUnitToUpdate);
    });

    it('deleta uma unidade de academia corretamente', async () => {
      const expectResults = { type: 200, message: "Gym unit deleted." };
      const service = container.resolve<GymUnitService>('GymUnitService');
      service.delete = sinon.stub().resolves(expectResults);

      const gymUnitController = new GymUnitController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (response: any) => {
              expect(code).to.be.equal(200);
              expect(response).to.be.equal("Gym unit deleted.");
            }
          };
        }
      } as unknown as Response;

      await gymUnitController.delete(req, res);

      expect(service.delete).to.have.been.calledOnce;
      expect(service.delete).to.have.been.calledWith(1);
    });

    it('retorna mensagem de erro corretamente ao deletar uma unidade de academia', async () => {
      const service = container.resolve<GymUnitService>('GymUnitService');
      service.delete = sinon.stub().throws(new Error("Internal server error."));

      const gymUnitController = new GymUnitController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (response: any) => {
              expect(code).to.be.equal(500);
              expect(response).to.be.equal("Internal server error.");
            }
          };
        }
      } as unknown as Response;

      await gymUnitController.delete(req, res);

      expect(service.delete).to.have.been.calledOnce;
      expect(service.delete).to.have.been.calledWith(1);
    });

    it('atualiza uma unidade de academia parcialmente corretamente', async () => {
      const expectResults = { type: 200, message: mock.updatedGymUnit };
      const service = container.resolve<GymUnitService>('GymUnitService');
      service.patch = sinon.stub().resolves(expectResults);

      const gymUnitController = new GymUnitController(service);

      const req = { params: { id: 1 }, body: { updates: mock.gymUnitSimpleUpdate } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (response: any) => {
              expect(code).to.be.equal(200);
              expect(response).to.be.deep.equal(mock.updatedGymUnit);
            }
          };
        }
      } as unknown as Response;

      await gymUnitController.patch(req, res);

      expect(service.patch).to.have.been.calledOnce;
      expect(service.patch).to.have.been.calledWith(1, mock.gymUnitSimpleUpdate);
    });

    it('retorna mensagem de erro corretamente ao atualizar parcialmente uma unidade de academia', async () => {
      const service = container.resolve<GymUnitService>('GymUnitService');
      service.patch = sinon.stub().throws(new Error("Internal server error."));

      const gymUnitController = new GymUnitController(service);

      const req = { params: { id: 1 }, body: { updates: mock.gymUnitSimpleUpdate } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (response: any) => {
              expect(code).to.be.equal(500);
              expect(response).to.be.equal("Internal server error.");
            }
          };
        }
      } as unknown as Response;

      await gymUnitController.patch(req, res);

      expect(service.patch).to.have.been.calledOnce;
      expect(service.patch).to.have.been.calledWith(1, mock.gymUnitSimpleUpdate);
    });




  });

});